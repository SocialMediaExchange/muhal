import React, {Component} from 'react'
import {Accordion, Item} from '../../components/accordion'
import Layout from '../../components/arLayout'
import Person from '../../components/person'
import {has} from 'ramda'

export default class Case extends Component {
  static async getInitialProps (ctx) {
    const isServer = !!ctx.req

    if (isServer) {
      return ctx.query
    }
    else {
      try {
        const res = await fetch(`/_data/cases/${ctx.query.id}`, { headers: { 'Accept': 'application/json' } })
        const json = await res.json()
        return json
      } catch (err) {
        console.error('Error', err)
      }
    }
  }

  render() {
    if (!this.props.case || !this.props.case.fields) {
      return <Layout><div>Loading...</div></Layout>
    }
    const data = this.props.case.fields

    let imagesToDisplay = []
    let attachments = data["Picture of Content in Question"]["Post picture"]
    if (attachments) {
      attachments.filter(has('thumbnails')).forEach(image => {
        imagesToDisplay.push(
          <a className="db mw5 tc black link dim" href={image.url} key={image.url}>
            <img className="db ba b--black-10" alt="" src={image.thumbnails.large.url} />
            <dl className="mt2 f6 lh-copy">
              <dt className="clip">Label</dt>
              <dd className="mr0">صورة للمحتوى</dd>
            </dl>
          </a>
        )
      }
      )
    }

    return (
      <Layout>
        <section>
          <h2>المتهم</h2>
          <div className="flex">
            {
              data["People"].map((person) => <Person ar key={person} person={person} />)
            }
          </div>
        </section>
        <section>
          <h2>تفاصيل</h2>
          <dl className="lh-title pa2 mt0 mw7">
            <Item ar ar field="Year" name="السنة" data={data} />
            <Item ar field="ماذا حصل؟" data={data} />
            <Item ar field="وضع القضية" data={data} />
          </dl>
        </section>
        <Accordion ar title="التعبير عن الرأي">
          <Item ar field="التهمة" data={data["Expression of Opinion"]} />
          <Item ar field="اتهم (ت) بموجب (قانون، المادة)" data={data["Expression of Opinion"]} />
          <Item ar field="وسيلة النشر" data={data} />
          <div className="pb1" key="Complaint by">
            <dt className="f6 b dib mb2">الجهة المدعية:</dt>
            <dd className="mr1 dib">{data["Complaint_ar"]}</dd>
          </div>
        </Accordion>
        <Accordion ar title="التحقيق والاحتجاز">
          <Item ar field="هل حكم عليه/عليها؟" data={data["Investigation and Detention"]} />
          <Item ar field="الحكم" data={data["Investigation and Detention"]} />
          <Item ar field="غيابياً" data={data["Investigation and Detention"]} />
          <Item ar field="هل احتجز/احتجزت؟" data={data["Investigation and Detention"]} />
          <Item ar field="عدد الأيام في الحجز" data={data["Investigation and Detention"]} />
          <Item ar field="هل تم التوقيع على تعهد؟" data={data["Investigation and Detention"]} />
          <Item ar field="هل طُلب من المستدعى حذف المحتوى؟" data={data["Investigation and Detention"]} />
          <Item ar field="طريقة الاتصال من قبل الأجهزة الأمنية" data={data["Investigation and Detention"]} />
        </Accordion>
        <Accordion ar title="الجدول الزمني">
          <Item ar field="تاريخ المنشور" data={data["Timeline"]} />
          <Item ar field="تاريخ الاتصال من مكتب الجريمة الالكترونية" data={data["Timeline"]} />
          <Item ar field="تاريخ التحقيق" data={data["Timeline"]} />
          <Item ar field="تاريخ الاحتجاز (إن وجد)" data={data["Timeline"]} />
          <Item ar field="توقيت الاحتجاز" data={data["Timeline"]} />
          <Item ar field="تاريخ جلسة الاستماع" data={data["Timeline"]} />
          <Item ar field="تاريخ الإفراج) إن وجد)" data={data["Timeline"]} />
          <Item ar field="تاريخ الحكم" data={data["Timeline"]} />
        </Accordion>
        <Accordion ar title=" معلومات عن المحكمة/المخفر">
          <Item ar field="اسم المحكمة/المخفر" data={data["Court/police station information"]} />
          <Item ar field="منصب القاضي/القاضية" data={data["Court/police station information"]} />
          <Item ar field="اسم القاضي/القاضية" data={data["Court/police station information"]} />
          <Item ar field="موقع المحكمة /المخفر" data={data["Court/police station information"]} />
        </Accordion>
        <section>
          <h2>محتوى موضع السؤال</h2>
          {
            imagesToDisplay.length > 0 ? imagesToDisplay : "N/A"
          }
        </section>
        {
          data["Source_ar"]
            ? (
              <section>
                <h2>المصدر</h2>
                <a href={data["Source_ar"]} >{data["Source_ar"]}</a>
              </section>
            )
            : <div />
        }
      </Layout>
    )
  }
}