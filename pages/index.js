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
        <p className="description"> <a href= "https://discord.gg/xn3K28W9eu"> xn3K28W9eu </a> is da discord
        </p>
      </main>

      <Footer />
    </div>
  )
}
