const Airtable = require('airtable')
const base = new Airtable(
  {
    apiKey: process.env.AIRTABLE_API_KEY,
  }
).base('appPInDENp4cEyEaB')

const getCase = require('./getCase')(base)
const getCases = require('./getCases')(base)


module.exports = {
  getCases,
  getCase,
}