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
        <form>
          <div className="mb3">
            <label htmlFor="defendant" className="db">Defendant</label>
            <input className="w-80 ma2" type="text" name="defendant" placeholder="Who is accused?" onChange={this.onInputChange("defendant")}/>
          </div>
          <div className="mb3">
            <label htmlFor="complaint_by" className="db">Complaint By</label>
            <input className="w-80 ma2" type="text" name="complaint" placeholder="Who issued the complaint?" onChange={this.onInputChange("complaint")}/>
          </div>
          <div className="mb3">
            <label htmlFor="complaint_by" className="db">Description</label>
            <textarea className="w-80 ma2" maxLength={1000} rows={6} name="description" placeholder="Let us know more about this case" onChange={this.onInputChange("description")} />
          </div>

          <a className="btn btn-primary" href={mailto} >Send us an email</a>
        </form>
      </Layout>
    )
  }
}