import styles from "./Player.module.css";

import { FaPause } from "react-icons/fa";


const Player = (currentMusic) => {
    console.log(currentMusic)
  return (
    <div className={styles.player}> 
      <div className={styles.left}>
        <img
          src={currentMusic.image}
          alt="album"
        />

        <div>
          <h4>{currentMusic.title}</h4>
          <p>Album name</p>
        </div>
      </div>

      <div className={styles.center}>
        <button className={styles.playButton}>
          <FaPause />
        </button>

        <div className={styles.progressWrapper}>
          <span>0:38</span>

          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
          </div>

          <span>3:38</span>
        </div>
      </div>
    </div>
  );
};

export default Player;