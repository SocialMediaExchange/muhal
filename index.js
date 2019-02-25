const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const {getCases, getCase} = require('./lib');

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => res.redirect('/ar/cases'))

    server.get('/_data/cases', (req, res) => {
      getCases(100, function (err, records) {
        return res.json(records)
      })
    })
    
    server.get('/_data/cases/:id', (req, res) => {
      const id = req.params.id
      getCase(id, function (err, record) {
        return res.json(record)
      })
    })

    server.get('/en/cases/:id', (req, res) => {
      const id = req.params.id
      getCase(id, function (err, record) {
        if (err) {
          return app.render(req, res, "/en/case", { case: {}, id })
        } else {
          return app.render(req, res, "/en/case", { case: record, id })
        }
      })
    })

    server.get('/ar/cases/:id', (req, res) => {
      const id = req.params.id
      getCase(id, function (err, record) {
        if (err) {
          return app.render(req, res, "/ar/case", { case: {}, id })
        } else {
          return app.render(req, res, "/ar/case", { case: record, id })
        }
      })
    })

    server.get('/en/cases', (req, res) => {
      getCases(100, function (err, records) {
        if (err) {
          return app.render(req, res, "/en/cases", { cases: [] })
        } else {
          return app.render(req, res, "/en/cases", { cases: records })
        }
      })
    })

    server.get('/ar/cases', (req, res) => {
      getCases(100, function (err, records) {
        if (err) {
          return app.render(req, res, "/ar/cases", { cases: [] })
        } else {
          return app.render(req, res, "/ar/cases", { cases: records })
        }
      })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})