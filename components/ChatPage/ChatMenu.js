import styles from '../../styles/ChatPage.module.css';

import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { BsCameraVideo } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { BsPersonPlus } from 'react-icons/bs';
import { GiMagicBroom } from 'react-icons/gi';
import { BiBrush } from 'react-icons/bi';
import { FiTrash } from 'react-icons/fi';
import { BsChevronRight } from 'react-icons/bs';

const ChatMenu = ()=> {
  return (
    <div className={styles.ChatMenu}>
      <div id={styles.top}>
          < HiOutlineSpeakerphone />
          <span>Mute</span>
          < BsChevronRight id={styles.right}/>
      </div>

      <div id={styles.gap}></div>

      <div id={styles.bottom}>
        <div>< BsCameraVideo />
          <span>Video Call</span>
        </div>
        <div>< BiSearchAlt />
          <span>Search</span>
        </div>
        <div>< BsPersonPlus />
          <span>Share My Contact</span>
        </div>
        <div>< GiMagicBroom />
          <span>Clear History</span>
        </div>
        <div>< BiBrush />
          <span>Change Colors</span>
        </div>
        <div>< FiTrash />
          <span>Delete Chat</span>
        </div>
      </div>
    </div>
  );
}

export default ChatMenu;