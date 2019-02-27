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
      <h1>نبذة عن الموقع</h1>

      <h2>ما المشكلة؟</h2>
      <p className="measure-copy mw7">
ترزح الحرية على الإنترنت في لبنان تحت تهديدات قانونية ومجتمعية، فعدد حالات التوقيف والاحتجاز المتعلّقة بحرية التعبير في ازدياد منذ عام 2016. ولتبرير احتجاز المواطنين والمواطنات قبل المحاكمة، غالباً ما تُعتمد المواد الواردة في قانون العقوبات وقانون القضاء العسكري. وفي بعض الحالات يمكن أن يستمرّ الاحتجاز أياماً أو أسابيع.
    </p>
      <h2>ما هو "مُحال"؟</h2>
      <p className="measure-copy mw7">

      محال هي حملة مستمرّة من "سمكس"  لتوثيق التوقيفات والاعتقالات المتعلقة بحرية التعبير على الإنترنت في لبنان. يهدف محال إلى رفع الوعي بهذه القضايا بين منظمات المجتمع المدني والصحفيين والشباب وغيرهم من الجهات المعنية، والضغط على صانعي السياسات لتغيير القوانين، وبخاصة تلك التي تتعلق بالتشهير والذم والقدح والتي كانت السبب في هذه الاعتقالات.
    </p>
      <p className="measure-copy mw7">
      تهدف "مُحال" إلى إلقاء  الضوء على عملية التوقيف الاحتياطي وإنهاء مثل هذه الحالات، خصوصاً فيما يتعلّق بحرية التعبير على الويب.
      
      </p>
      <h2>طريقة التصفح</h2>
      <p className="measure-copy mw7">
      ابحث/ي عن الحالة بحسب وسيلة النشر، أو السنة، أو الجهة المدّعية. يمكن استخدام خانة البحث للعثور على معلومات محدّدة أكثر. 

    </p>
      <h2>شارك/شاركي</h2>
      <p className="measure-copy mw7">
      إذا تعرّضت للتوقيف شخصياً، أو إذا تعرّض شخص تعرفه لذلك، بسبب مشاركات على وسائل التواصل الاجتماعي،<Link href="/ar/report"><a href="/ar/report"> أبلغ/ي عن الحالة عن طريق ملء النموذج</a></Link>، وسوف نرفعه نحن إلى قاعدة البيانات.
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