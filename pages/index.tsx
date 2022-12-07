import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RoundedBox from './components/RoundedBox'

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[hsl(216,12%,8%)]">
      <Head>
        <title>Create Next App</title>
        <meta name="Code challenge" content="code challenge" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      
      
      </Head>

    <div className=''>

      <RoundedBox />
    </div>

    </div>
  )
}
