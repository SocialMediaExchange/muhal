import React from 'react'
import Search from '../components/searchbox'
import Card from '../components/card'
import fetch from 'isomorphic-unfetch'
import {values, any, test} from 'ramda'

function filterCases(searchText, caseData) {
  const testSearch = test(new RegExp(searchText, 'ig'))
  return any(testSearch, values(caseData))
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
      searchText: ""
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({
      searchText: e.target.value
    })
  }

  render() {
    const { cases } = this.props
    const searchText = this.state.searchText
    let casesToDisplay = cases;
    if (searchText && searchText.length > 0) {
      casesToDisplay = cases.filter(caseData => filterCases(searchText, caseData))
    }
    return (
      <div>
        <Search onChange={this.onChange} searchText={searchText} />
        <div class="flex flex-wrap">
          {casesToDisplay.map(data => <Card data={data} />)}
        </div>
      </div>
    )
  }
}