import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Punchlords</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="𝐏𝐔𝐍𝐂𝐇𝐋𝐎𝐑𝐃𝐒" />
        <p className="description"> <bold>xn3K28W9eu</bold> is da discord
        </p>
      <img src="https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/08/d1/a4/08d1a48f-6937-5a67-19ba-131c917b37a7/artwork.jpg/486x486bb.png" alt="This supposed to be a dollar sign" width="100" height="120"></img>
      </main>

      <Footer />
    </div>
  )
}
