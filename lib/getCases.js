module.exports = function getCases (base) {
  return function (numRecords, callback) {
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
}