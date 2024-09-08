import React from 'react'
import styles from './IndicationsSection.module.css'
import imageIndicftio from '../../assets/images/operations/breast/imageIndicatio.jpg'

const IndicationsSection = () => {
  return (
    <div className={styles.indicacioContainer}>
      <h3>Покази до збільшення грудей</h3>
      <div className={styles.indicacioAugment}>
        <div className={styles.leftIndicatio}>
          <p>
            Ендопротезування, як метод збільшення та корекції форми грудей
            рекомендовано у таких випадках:
          </p>
          <ul>
            <li>вікові зміни грудей;</li>
            <li>малі розміри молочних залоз;</li>
            <li>вроджена асиметрія молочних залоз;</li>
            <li>вікові зміни грудей;</li>
            <li>опущення, втрата форми після пологів.</li>
            <li>асиметрія молочних залоз;</li>
            <li>корекція форми та розмірів сосково-ареолярної області;</li>
          </ul>
        </div>
        <img
          src={imageIndicftio}
          alt="жіночі груди"
          className={styles.indicatioImg}
        />
      </div>
    </div>
  )
}

export default IndicationsSection
