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
        <Header title="Join the discord fr" />
        <p className="description"> <bold>xn3K28W9eu</bold> is da discord
        </p>
      </main>

      <Footer />
    </div>
  )
}
