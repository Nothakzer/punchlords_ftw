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
      <img src="https://ih1.redbubble.net/image.4715657043.8489/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="This supposed to be a dollar sign" width="100" height="120"></img>
      </main>

      <Footer />
    </div>
  )
}
