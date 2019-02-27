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
          <div className="mb3">
            <label htmlFor="defendant" className="db">المتهم</label>
            <input className="w-80 ma2" type="text" name="defendant" placeholder="" onChange={this.onInputChange("defendant")}/>
          </div>
          <div className="mb3">
            <label htmlFor="complaint_by" className="db">الجهة المدعية</label>
            <input className="w-80 ma2" type="text" name="complaint" placeholder="" onChange={this.onInputChange("complaint")}/>
          </div>
          <div className="mb3">
            <label htmlFor="complaint_by" className="db">ماذا حصل؟</label>
            <textarea className="w-80 ma2" maxLength={1000} rows={6} name="description" placeholder="" onChange={this.onInputChange("description")} />
          </div>

          <a className="btn btn-primary" href={mailto} >مراسلتنا عبر بريد الإلكتروني</a>
        </form>
      </Layout>
    )
  }
}