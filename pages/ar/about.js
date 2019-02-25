import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import Layout from '../../components/arLayout'
import Link from 'next/link'
import NoSSR from 'react-no-ssr'

function Loading() {
  return (
    <div>
      <h3>Loading...</h3>
      <style jsx>{`
      div {
        align-items: center;
        display: flex;
        height: 50vh;
        justify-content: center;
      }
    `}</style>
    </div>
  )
}

export default function About () {
  return (
    <Layout>
      <h1>معلومات</h1>
      <h2>ما المشكلة؟</h2>
      <p className="measure-copy mw7">
      تتعرّض الحرية على الإنترنت في لبنان لتهديدات قانونية و مجتمعية. فمنذ عام 2016، ازداد عدد التوفيقات المتعلقة بحرية التعبير. وغالباً ما يتم اعتماد المواد الواردة في قانون العقوبات وقانون القضاء العسكري لتبرير احتجاز المواطنين/المواطنات قبل المحاكمة، وهو احتجاز  يمكن أن يمتد أياماً أو أسابيع في بعض الحالات.
    </p>
      <h2>ما هو محال؟ </h2>
      <p className="measure-copy mw7">
      محال هي حملة مستمرّة من "سمكس"  لتوثيق التوقيفات والاعتقالات المتعلقة بحرية التعبير على الإنترنت في لبنان. يهدف محال إلى رفع الوعي بهذه القضايا بين منظمات المجتمع المدني والصحفيين والشباب وغيرهم من الجهات المعنية، والضغط على صانعي السياسات لتغيير القوانين، وبخاصة تلك التي تتعلق بالتشهير والذم والقدح والتي كانت السبب في هذه الاعتقالات.
    </p>
      <h2>طريقة التصفح</h2>
      <p className="measure-copy mw7">
        ابحث/ابحثي عن الحالة حسب الاسم أو السنة أو اسم المنصة أو نوع المحتوى المنشور، أو غيرها من المعلومات

    </p>
      <h2>شارك/شاركي</h2>
      <p className="measure-copy mw7">
      إذا تعرّضت للتوقيف شخصياً،  أو إذا تعرّض شخص تعرفه لذلك، بسبب لمشاركات على وسائل التواصل الاجتماعي،<Link href="/ar/report"><a href="/ar/report"> أبلغ/ي عن الحالة عن طريق ملء النموذج</a></Link>، وسوف نرفعه نحن إلى قاعدة البيانات.
        </p>


      <footer className="pa3-l pa2 w-30">
        <NoSSR onSSR={<Loading />} class="center pa3-l pa2 dib-l dn">
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'SMEX'
            }}
            options={{
              username: 'smex',
              height: '500'
            }}
          />
        </NoSSR>
      </footer>
    </Layout>
  )
}