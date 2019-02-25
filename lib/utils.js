import { compose, not, isEmpty, values, test, any } from 'ramda'

export const notEmpty = compose(not, isEmpty)

export function filterCases(searchText) {
  return caseData => {
    const testSearch = test(new RegExp(searchText, 'ig'))
    return any(testSearch, values(caseData))
  }
}

export function substr(str, len) {
  if (str && str.length > len) {
    return `${str.substring(0, len)}..`
  }
  else return str
}
