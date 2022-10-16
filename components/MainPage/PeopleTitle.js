import styles from '../../styles/MainPage.module.css'

const PeopleTitle = ()=> {
  return (
    <div class={styles.PeopleTitle}>
          <div id={styles.circle}>L</div>
          <span id={styles.Ladli}>Ladli</span>
          <br />
          <span id={styles.LastMsg}>Radhe Shyam Maharaj G</span>
          <span id={styles.BlueTick}>✓✓ Wed</span>
    </div>
  );
}

export default PeopleTitle;