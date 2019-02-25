import React, { Component } from 'react'
import Layout from '../../components/enLayout'
import Search from '../../components/searchbox'
import Select from '../../components/select'
import Card from '../../components/card'
import fetch from 'isomorphic-unfetch'
import { filter, uniq, uniqBy, prop } from 'ramda'
import { notEmpty, filterCases } from '../../lib/utils'

export default class Home extends Component {
  static async getInitialProps(ctx) {
    const isServer = !!ctx.req

    if (isServer) {
      return ctx.query
    }
    else {
      const res = await fetch('/_data/cases', {headers: {'Accept': 'application/json'}})
      const json = await res.json()
      return { cases: json}
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      searchText: "",
      Year: null,
      Medium: null,
      Complaint: null
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
    const {searchText, Year, Medium, Complaint} = this.state
    let casesToDisplay = cases;

    if (!casesToDisplay || !casesToDisplay.length) {
      return <Layout><div>Loading...</div></Layout>
    }

    // Filter cases with the same primary
    casesToDisplay = uniqBy(prop('Primary'), casesToDisplay)

    if (searchText && searchText.length > 0) {
      casesToDisplay = casesToDisplay.filter(filterCases(searchText))
    }

    const mediumOptions = uniq(filter(notEmpty, cases.map(prop("Platform")))).sort()
    const yearOptions = uniq(filter(notEmpty, cases.map(prop("Year")))).sort()
    const complaintOptions = uniq(filter(notEmpty, cases.map(prop("Complaint")))).sort()

    if (Year) {
      casesToDisplay = casesToDisplay.filter(data => data["Year"] === Year)
    }

    if (Medium) {
      casesToDisplay = casesToDisplay.filter(data => data["Platform"] === Medium)
    }

    if (Complaint) {
      casesToDisplay = casesToDisplay.filter(data => {
        return new Set(data["Complaint"]).has(Complaint)
      })
    }

    return (
      <Layout>
        <div className="flex flex-wrap">
          <Search onChange={this.onChange} searchText={searchText} />
          <Select options={mediumOptions} selected={this.state["Medium"]} onChange={this.onSelect("Medium")} selectLabel="Platform" />
          <Select options={yearOptions} selected={this.state["Year"]} onChange={this.onSelect("Year")} selectLabel="Year" />
          <Select options={complaintOptions} selected={this.state["Complaint"]} onChange={this.onSelect("Complaint")} selectLabel="Complaint by" />
        </div>
        <div className="flex flex-wrap">
          {casesToDisplay.map(data => <Card data={data} key={data.id}/>)}
        </div>
      </Layout>
    )
  }
}