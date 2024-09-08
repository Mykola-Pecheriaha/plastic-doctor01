import React from 'react'
import styles from './ContraindicationSection.module.css'
import imgContrOper from '../../assets/images/operations/breast/contr.jpg'

const ContraindicationSection = () => {
  return (
    <div className={styles.contrIndicContainer}>
      <h3>Протипокази до збільшення грудей</h3>
      <div className={styles.contrIndic}>
        <div className={styles.leftContrIndic}>
          <p>Протипокази до проведення цієї операції є:</p>
          <ul>
            <li>загострення або декомпенсація хронічних хвороб пацієнта ;</li>
            <li>інфекційні захворювання</li>
            <li>психічні розлади</li>
          </ul>
        </div>
        <img
          src={imgContrOper}
          alt="протипокази"
          className={styles.indicatioImg}
        />
      </div>
    </div>
  )
}

export default ContraindicationSection
