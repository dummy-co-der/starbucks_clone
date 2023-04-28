import { Open_Sans } from 'next/font/google'
import Homepage from './home'
import Link from 'next/link'
const open_sans = Open_Sans({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Homepage/>
    </>
  )
}
