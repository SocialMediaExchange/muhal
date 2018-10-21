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

    server.get('/_data/cases', (req, res) => {
      getCases(100, function (err, records) {
        return res.json(records)
      })
    })

    server.get('/', (req, res) => {
      getCases(100, function (err, records) {
        if (err) {
          return app.render(req, res, "/", { cases: [] })
        } else {
          return app.render(req, res, "/", { cases: records })
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