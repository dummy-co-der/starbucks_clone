import { Open_Sans } from 'next/font/google'
import Homepage from './home'
const open_sans = Open_Sans({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Homepage />
    </>
  )
}
