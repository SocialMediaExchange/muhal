import React from 'react'
import Search from '../components/searchbox'
import Card from '../components/card'
import fetch from 'isomorphic-unfetch'

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
    return (
      <div>
        <h1>Search</h1>
        <Search onChange={this.onChange} searchText={this.state.searchText} />
        <div class="flex flex-wrap">
          {cases.map(data => <Card data={data} />)}
        </div>
      </div>
    )
  }
}