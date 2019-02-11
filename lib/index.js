const Airtable = require('airtable')
const {map, pick} = require('ramda')
const async = require('async')

const base = new Airtable(
  {
    apiKey: process.env.AIRTABLE_API_KEY,
  }
).base('appPInDENp4cEyEaB')

function getCases (numRecords, callback) {
  base('Cases').select({
    maxRecords: numRecords,
    view: "English",
  }).firstPage((err, records) => {
    let data = []
    records.forEach(record => {
      let fields = record.fields
      fields.id = record.id
      data.push(fields)
    })
    callback(err, data)
  })
}

function substr(str, len) {
  if (str && str.length > len) {
    return `${str.substring(0, len)}..`
  }
  else return str
}

function getCase (caseId, mainCallback) {
  base('Cases').find(caseId, function (err, record) {
    if (!err) {
      /*
      Get all people for the record
      */
      const people = record.get('People')
      const peopleCallbacks = people.map((person) => {
        return function (callback) {
          base('People').find(person, callback)
        }
      })

      async.parallel(peopleCallbacks, function (err, results) {
        if (!err) {
          record.people = results

          /*
          Get complaints
          */
          const complaints = record.get('Complaint By')
          const complaintCallbacks = complaints.map((complaint) => {
            return function (callback) {
              base('Complaint By').find(complaint, callback)
            }
          })
          async.parallel(complaintCallbacks, function (err, results) {
            if (!err) {
              record.complaints = results

              mainCallback(null, record)
            } else {
              mainCallback(err)
            }
          })
        } else {
          mainCallback(err)
        }
      })
    } else {
      mainCallback(err)
    }
  })
}

module.exports = {
  getCases,
  getCase,
  substr
}