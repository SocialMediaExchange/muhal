import React from 'react'
import Search from '../components/searchbox'
import Select from '../components/select'
import Card from '../components/card'
import fetch from 'isomorphic-unfetch'
import {values, any, test, uniq, uniqBy, prop} from 'ramda'

function filterCases(searchText) {
  return caseData => {
    const testSearch = test(new RegExp(searchText, 'ig'))
    return any(testSearch, values(caseData))
  }
}

export default class extends React.Component {
  static async getInitialProps(ctx) {
    const isServer = !!ctx.req

    if (isServer) {
      return ctx.query
    }
    else {
      const res = await fetch('/_data/cases', {headers: {'Accept': 'application/json'}})
      const json = await res.json()
      return json
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      searchText: "",
      Year: null,
      Medium: null
    }
    this.onChange = this.onChange.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  onChange (e) {
    this.setState({
      searchText: e.target.value
    })
  }

  onSelect (label) {
    const component = this;
    return function (option) {
      component.setState({
        [label]: option.target.value === "None Selected"? null : option.target.value
      })
    }
  }

  render() {
    const { cases } = this.props
    const {searchText, Year, Medium} = this.state
    let casesToDisplay = cases;

    // Filter cases with the same primary
    casesToDisplay = uniqBy(prop('Primary'), casesToDisplay)

    if (searchText && searchText.length > 0) {
      casesToDisplay = casesToDisplay.filter(filterCases(searchText))
    }

    const mediumOptions = uniq(cases.map(data => data["Medium"]))
    const yearOptions = uniq(cases.map(data => data["Year"]))

    if (Year) {
      casesToDisplay = casesToDisplay.filter(data => data["Year"] === Year)
    }

    if (Medium) {
      casesToDisplay = casesToDisplay.filter(data => data["Medium"] === Medium)
    }

    return (
      <div>
        <div className="flex flex-wrap">
          <Search onChange={this.onChange} searchText={searchText} />
          <Select options={mediumOptions} selected={this.state["Medium"]} onChange={this.onSelect("Medium")} selectLabel="Medium" />
          <Select options={yearOptions} selected={this.state["Year"]} onChange={this.onSelect("Year")} selectLabel="Year" />
        </div>
        <div className="flex flex-wrap">
          {casesToDisplay.map(data => <Card data={data} key={data.id}/>)}
        </div>
      </div>
    )
  }
}