import React, { createRef } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useSong, usePlayerVisible } from '../../hooks/DataProvider';
import Playlist from '../Playlist/Playlist';
import Visualizer from '../Visualizer/Visualizer';
import styles from './Player.css';
// import 'react-h5-audio-player/lib/styles.css';

const Player = () => {
  const song = useSong();
  const playerVisible = usePlayerVisible();
  const player = createRef();

  return (
    <>
      <div className={styles.audioContainer}>
        <Playlist style={{ visibility: playerVisible ? 'visible' : 'hidden', height: playerVisible ? 100 : 0 }} />

        <section className={styles.Player} style={{ visibility: playerVisible ? 'visible' : 'collapse', height: playerVisible ? 100 : 0 }}>
          <section className={styles.title}>
            {song?.mapLocation} - {song?.title}
          </section>

          <AudioPlayer
            ref={player}
            className={styles.rhap_container}
            src={song?.url}
            customProgressBarSection={
              [
                RHAP_UI.CURRENT_TIME,
                // eslint-disable-next-line react/jsx-key
                <section>/</section>,
                RHAP_UI.DURATION
              ]
            }
          />
        </section>
        <Visualizer forwardRef={player}/>

        {!playerVisible && <p className={styles.instructions}>Select a garden to listen to:</p>} 
      </div>
    </>
  );
};

export default Player;
