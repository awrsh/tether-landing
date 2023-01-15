import Head from 'next/head'
import Atributies from '../component/atributies/Atributies'
import Currency from '../component/currency-list/Currency'
import Footer from '../component/footer/Footer'
import Friends from '../component/friends/Friends'
import {Navbar} from '../component/navbar/Navbar'
import QuickAccess from '../component/qiuick-access/QuickAccess'
import Questions from '../component/questions/Questions'
import Infoteher from '../component/infoTether/index'
import ChartExchangeTether from '../component/chartExchangeTether/index'


// const DynamicComponentWithNoSSR = dynamic(() => import('../component/chartPrice/ChartPrice'), {
//   ssr: false
// })
export default function Home() {
  return (
    <>

      <main>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app"/>
        </Head>
        <Navbar/>

        {/* <DynamicComponentWithNoSSR/> */}
        <Infoteher/>
        <ChartExchangeTether/>
        <Currency/>
        <Atributies/>
        <QuickAccess/>
        <Questions/>
        <Friends/>
        <Footer/>
      </main>
    </>
  )
}
