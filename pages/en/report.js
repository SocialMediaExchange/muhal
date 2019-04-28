import React, { Component } from 'react'
import Layout from '../../components/enLayout'

export default class Report extends Component {
  constructor (props) {
    super(props)
    this.state = {
      defendant: '',
      description: '',
      complaint: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange (label) {
    let component = this
    return function (e) {
      component.setState({
        [label]: e.target.value,
      })
    }
  }

  render() {
    let body = ''
    body += `Defendant:\n ${this.state.defendant}\n\n`
    body += `Complaint By:\n ${this.state.complaint}\n\n`
    body += `Description:\n ${this.state.description}\n\n`
    const mailto = `mailto:info@smex.org?subject=${encodeURIComponent('Report from Muhal')}&body=${encodeURIComponent(body)}`

    return (
      <Layout>
        <h1>Report a case</h1>
        <form style={{"direction": "ltr"}}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScICsFJGOyvCR-DlKQs1SXCcbs9xgy6AYmIOe1My0AqEUrSTA/viewform?embedded=true" width="640" height="1623" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

          <a className="btn btn-primary" href={mailto} >Send us an email</a>
        </form>
      </Layout>
    )
  }
}