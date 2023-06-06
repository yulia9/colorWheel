import { useState, useMemo } from 'react';
import styles from './ColorWheel.module.css'

export default function ColorWheel({ size = 300, colors = [], setColor }) {
  const wheelSize = `${size}px`;
  const circleSize = useMemo(() => 3.14 * size, [size]);

  const colorWidth = useMemo(() => `${circleSize / colors.length}px`, [circleSize, colors]);
  const rotate = useMemo(() => 360 / colors.length, [colors]);

  const [colorData, setColorData] = useState({});

  return (
    <div className={styles.container}>
      <div className={styles.colorWheelWrapper} style={{ width: wheelSize, height: wheelSize }}>
        <div className={styles.colorWheel}>
          {colors.map(({ colorName, colorCode, title }, index) =>
            <div
              key={colorCode}
              onMouseOver={() => setColorData({ colorName, title })}
              onClick={() => setColor({ colorName, title, colorCode })}
              style={{ backgroundColor: colorCode, width: colorWidth, transform: `rotate(${index * rotate}deg) translate(-50%)` }}
              className={styles.colorElement}>
            </div>
          )}
        </div>
        <div className={styles.innerCircleLg}></div>
        <div className={styles.innerCircleSm}>
          <div>
            <h4 className={styles.title}>{colorData?.title}</h4>
            <div className={styles.colorName}>{colorData?.colorName}</div>
          </div>
        </div>
        <div className={styles.outerCircleLg}></div>
        <div className={styles.outerCircleSm}></div>
      </div>
    </div>
  )
}
