import Head from 'next/head'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Homepage from './Homepage'


const open_sans = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Homepage/>
    </>
  )
}
