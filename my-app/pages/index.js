import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import ColorWheel from '../components/ColorWheel'
import { colors } from '../constants/colors'

export default function Home() {
  const [selectedColor, setSelectedColor] = useState({});

  return (
    <div className={styles.container}>
      <Head>
        <title>Color wheel</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.colorBoxWrapper}>
          <h3 className={styles.colorBoxTitle}>Selected color:</h3>
          {Object.keys(selectedColor).length ?
            <div>
              <div> {selectedColor.colorName} </div>
              <div style={{ background: selectedColor?.colorCode }} className={styles.colorBox}></div>
            </div> : null
          }
        </div>
        {/* ColorWheel component will work with any number of colors and can be of any size */}
        <ColorWheel colors={colors} size={300} setColor={setSelectedColor} />
      </main>
    </div>
  )
}
