import { Open_Sans } from 'next/font/google'
import Homepage from './home'
import Splash from '@/Components/Splashscreen/Splash'
const open_sans = Open_Sans({ subsets: ['latin'] })
export default function Home() {
  return (
      <Splash>
      <Homepage />
      </Splash>
  )
}
