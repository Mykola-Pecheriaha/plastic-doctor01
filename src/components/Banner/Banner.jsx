import React from 'react'
import styles from './Banner.module.css'
import doctorImage from '../../assets/images/doctor/doctor2.jpg'

const Banner = ({ toggleMoreInfo, selectedOperation, selectedData }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        {selectedOperation ? (
          <>
            <h1>{selectedOperation.title}</h1>
            <ul className={styles.details}>
              {selectedOperation.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h1>Печеряга Микола Миколайович</h1>
            <h2>Загальний хірург, пластичний хірург</h2>
            <ul className={styles.details}>
              <li>29 років досвіду</li>
              <li>Хірург вищої категорії</li>
              <li>Більше 1600 проведених операцій</li>
              <li>Член ВАПРЕХ та ОПРЕХ</li>
            </ul>
            <button className={styles.moreInfoButton} onClick={toggleMoreInfo}>
              Дізнатися більше
            </button>
          </>
        )}
      </div>
      <div className={styles.right}>
        {selectedOperation ? (
          <img
            src={selectedOperation.image}
            alt={selectedOperation.title}
            className={styles.operationImage}
          />
        ) : (
          <img src={doctorImage} alt="Doctor" className={styles.doctorImage} />
        )}
      </div>
    </div>
  )
}

export default Banner
