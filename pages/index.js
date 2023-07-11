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
        <Header title="🇱​​🇮​​🇳​​🇰​​🇸​ ​🇨​​🇭​​🇦​​🇵​​🇪​​🇱​" />
        <p className="description"> <a href= "https://discord.gg/xn3K28W9eu"><img src= "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png" width= "100" height= "80"></img></a></p> 
      </main>
   
      <Footer />
    </div>
  )
}
