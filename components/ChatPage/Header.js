import styles from '../../styles/ChatPage.module.css';

import { FaChevronLeft } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Header = ()=> {
  return (
    <div id={styles.ChatHeader}>
        <FaChevronLeft id={styles.left}/>
        <div id={styles.circle}>L</div>
        <span id={styles.name}>Ladli</span>
        <span id={styles.lastseen}>Last seen in Vrindavan</span>
      <div id={styles.PhoneMenu}>
        <IoMdCall/>
        <BsThreeDotsVertical/>
      </div>
    </div>
  );
}

export default Header;