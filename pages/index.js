import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Links Chapel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
        <Header title="𝐋𝐢𝐧𝐤𝐬 𝐂𝐡𝐚𝐩𝐞𝐥​" />
        <p className="description"> <a href= "https://discord.gg/xn3K28W9eu"><img src= "https://static-00.iconduck.com/assets.00/telegram-icon-2048x2048-qq8ggh79.png" width= "100" height= "80"></img></a></p> 
      </main>
   
      <Footer />
    </div>
  )
}
