module.exports = function getCase(base) {
  return async (caseId, mainCallback) => {
    try {
      let record = await base('Cases').find(caseId)

      let people = await Promise.all(record.get("People").map(p => (
        base("People").find(p)
      )))
      record.fields["People"] = people.map(p => p.fields)

      let tables = [
        "Expression of Opinion", 
        "Court/police station information", 
        "Investigation and Detention",
        "Timeline",
        "Picture of Content in Question"
      ]
      const promises = tables.map(table => {
        let lookup = record.get(table)
        if (lookup && lookup.length > 0) {
          return base(table).find(record.get(table)[0])
        } else {
          return Promise.resolve({ fields: {} })
        }
      })

      let joins = await Promise.all(promises)
      tables.forEach((table, index) => {
        record.fields[table] = joins[index].fields
      })
      return mainCallback(null, record)
    } catch (err) {
      console.error(err)
      return mainCallback(err)
    }
  }
}