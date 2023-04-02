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
      <img src="https://www.pngmart.com/files/10/Green-Dollar-Sign-PNG-File.png" alt="This supposed to be a dollar sign" width="500" height="600"></img>
      </main>

      <Footer />
    </div>
  )
}
