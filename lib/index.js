const Airtable = require('airtable')
const {map, pick} = require('ramda')

const base = new Airtable(
  {
    apiKey: process.env.AIRTABLE_API_KEY,
  }
).base('appPInDENp4cEyEaB')

function getCases (numRecords, callback) {
  base('Cases').select({
    maxRecords: numRecords,
    view: "English"
  }).firstPage((err, records) => {
    let data = []
    records.forEach(record => {
      data.push(record.fields)
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

function getCase (caseId, callback) {
  base('Cases').find(caseId, callback)
}

module.exports = {
  getCases,
  getCase,
  substr
}