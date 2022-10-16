import styles from '../../styles/ChatPage.module.css';
import { ImAttachment } from 'react-icons/im';
import { FiMic } from 'react-icons/fi';

const Footer = ()=> {
  return (
    <div className={styles.ChatFooter}>
      <div id={styles.gif}>GIF</div>
      <form id={styles.form}>
      <input id={styles.input} type="text" placeholder="Message" name="msg" autoComplete="off"/>
      </form>
      <div id={styles.material}>
      <ImAttachment/>
      <FiMic/>
      </div>
    </div>
      );
      }

      export default Footer;
