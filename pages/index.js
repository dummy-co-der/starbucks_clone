import { Open_Sans } from 'next/font/google'
import Homepage from './home'
import Splash from '@/Components/Splashscreen/Splash'
const open_sans = Open_Sans({ subsets: ['latin'] })
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <div>
      <Head>
      <title>Starbucks</title>
      </Head>
      <Splash>
      <Homepage />
      </Splash>
      </div>
    </>
  )
}
