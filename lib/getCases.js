module.exports = function getCases (base) {
  return function (numRecords, callback) {
    this.data = []
    base('Cases').select({
      maxRecords: numRecords,
      view: "English",
    }).eachPage((records, fetchNextPage) => {
      records.forEach(record => {
        let fields = record.fields
        fields.id = record.id
        this.data.push(fields)
      })
      fetchNextPage()
    }, (err) => {
      callback(err, this.data)
    })
  }
}