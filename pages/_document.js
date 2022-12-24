import { Html, Head, Main, NextScript } from 'next/document'
import Banner from '../Components/Banner'
import Navigation from '../Components/Navigation'
import Curation from '../Components/Curation'
import Recommend from '../Components/Recommend'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Navigation/>
        <Banner/>
        <Curation/>
        <Recommend/>
        <NextScript />
      </body>
    </Html>
  )
}
