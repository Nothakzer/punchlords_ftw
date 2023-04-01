import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Punchlords</title>
        <link rel="icon" href="/favicon.ico" />
    
    <style> 
    body{
    
    background-image: url("https://us-tuna-sounds-images.voicemod.net/a1c8e77e-affa-498b-b71e-fa549a58ceec-1674680382680.jpg")
    background-size: cover;
    
    }
    </style>
      </Head>

      <main>
        <Header title="Join the discord fr" />
        <p className="description"> xn3K28W9eu is da discord
        </p>
      </main>

      <Footer />
    </div>
  )
}
