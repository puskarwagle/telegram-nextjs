import styles from '../../styles/MainPage.module.css'

// MenuIcons
import { BsPeople } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineCall } from 'react-icons/md';
import { MdOutlinePersonSearch } from 'react-icons/md';
import { BsBookmark } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { BsPersonPlus } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
// ProfileIcons
import { MdWbSunny } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';


const SideMenu = ()=> {
  return (
   <div className={styles.SideMenuActive}>
      <div className={styles.Profile}>
        <div className={styles.PicSun}>
          <div id={styles.ProfilePic}>im</div>
          < MdWbSunny id={styles.Sunny}/>
        </div>
        <div className={styles.NameArrow}>
          <span id={styles.Name}>Puskar Wagle</span>
          <span id={styles.Number}>+977 9864049501</span>
          < BsChevronDown id={styles.Arrow}/>
        </div>
      </div>
      
      <div className={styles.MenuIcons}>
        <div>< BsPeople />
          <span>New Group</span>
        </div>
        <div>< BsPerson />
          <span>Contacts</span>
        </div>
        <div>< MdOutlineCall />
          <span>Calls</span>
        </div>
        <div>< MdOutlinePersonSearch />
          <span>People Nearby</span>
        </div>
        <div>< BsBookmark />
          <span>Saved Messages</span>
        </div>
        <div>< FiSettings />
          <span>Settings</span>
        </div>
        <div>< BsPersonPlus />
          <span>Invite Friends</span>
        </div>
        <div>< AiOutlineQuestionCircle />
          <span>Telegram Features</span>
        </div>
      </div>
  </div>
  );
}

export default SideMenu;