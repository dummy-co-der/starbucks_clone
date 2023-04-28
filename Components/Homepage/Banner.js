import { Button } from 'antd'
import styles from './Homepagestyle/Banner.module.scss'
import Link from 'next/link'
function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannersub}>
        <h2 className="">A world of rewards awaits you! Sign up now.</h2>
      </div>
      <Link href='/knowmore'>
      <Button shape="round"  ghost className={`${styles.btnbanner} no-hover`} >
        Know more
      </Button>
      </Link>
    </div>
  )
}

export default Banner