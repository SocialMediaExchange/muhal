require('dotenv').config()

const path = require('path')
const pify = require('pify')
const { getCases, getCase } = require('./lib');

const Dotenv = require('dotenv-webpack')
let exportObj = {
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  }
}

if (process.env.NODE_ENV === 'production') {
  exportObj.exportPathMap = async function () {
    let cases = await pify(getCases)(100)

    let casePaths = {}
    for (let i=0; i < cases.length; i++) {
      let caseId = cases[i].id
      console.log(caseId)
      let caseData = await pify(getCase)(caseId)
      casePaths[`/ar/cases/${caseId}`] = { page: '/ar/case', query: { case: caseData } }
      casePaths[`/en/cases/${caseId}`] = { page: '/en/case', query: { case: caseData } }
    }

    return Object.assign(casePaths, {
      '/': { page: '/ar/cases', query: { cases }},
      '/ar': { page: '/ar/cases', query: { cases }},
      '/ar/cases': { page: '/ar/cases', query: { cases }},
      '/ar/about': { page: '/ar/about'},
      '/ar/report': { page: '/ar/report'},
      '/en': { page: '/en/cases', query: { cases }},
      '/en/cases': { page: '/en/cases', query: { cases }},
      '/en/about': { page: '/en/about'},
      '/en/report': { page: '/en/report'}
    })
  }
}

module.exports = exportObj
