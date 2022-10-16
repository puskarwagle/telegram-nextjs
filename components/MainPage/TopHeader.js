import styles from '../../styles/MainPage.module.css'
import { BiMenu } from 'react-icons/bi';
import { BiSearchAlt2 } from 'react-icons/bi';

const TopHeader = ()=> {
  return (
    <div class={styles.TopHeader}>
      <BiMenu id={styles.hamburger}/>
      <span id={styles.RadhaGram}>Radhagram</span>
      <BiSearchAlt2 id={styles.search} />
  </div>
  );
}

export default TopHeader;