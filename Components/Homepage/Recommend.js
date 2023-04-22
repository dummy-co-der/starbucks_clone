import Image from 'next/image';
import styles from './Homepagestyle/Recommend.module.scss'
import leaf from '../../public/leaf.svg';
import RecommendList from './RecommendList';
const Recommend = () => {
  return (
    <div className={styles.recommend}>
    <div className={styles.container}>
      <h2 className={styles.title}>Barista Recommends</h2>
      <div className={styles.action}>
        <h2 className={styles.menu}>View Menu</h2>
        <div className={styles.image}>
        </div>
      </div>
    </div>
    <RecommendList/>
    </div>
  );
};

export default Recommend;