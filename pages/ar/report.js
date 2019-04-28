import React, { Component } from 'react'
import Layout from '../../components/arLayout'

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
    body += `المتهم\n ${this.state.defendant}\n\n`
    body += `الجهة المدعية\n ${this.state.complaint}\n\n`
    body += `ماذا حصل؟\n ${this.state.description}\n\n`
    const mailto = `mailto:info@smex.org?subject=${encodeURIComponent('Report from Muhal')}&body=${encodeURIComponent(body)}`

    return (
      <Layout>
      <h1>أبلغ/ي عن حالة</h1>
        <form>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf3j5LDt2FloX18Q964euoZzD9__K_eMyh8HQMqlgp7Wy6g9Q/viewform?embedded=true" width="640" height="1623" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

          <a className="btn btn-primary" href={mailto} >مراسلتنا عبر بريد الإلكتروني</a>
        </form>
      </Layout>
    )
  }
}