import { Button } from 'antd'
import style from './Homepagestyle/Banner.module.scss'
function Banner() {
  return (
    <div className={style.banner}>
        <div className={style.bannersub}>
        <h2 className="">A world of rewards awaits you! Sign up now.</h2>
        </div>
        <Button shape="round" ghost>
            Know more
          </Button>
    </div>
  )
}

export default Banner