import React from 'react'
import styles from './DoctorSection.module.css'
import imageDoctor2 from '../../assets/images/doctor/doctor2.jpg'

const DoctorSection = () => {
  return (
    <div className={styles.containerAugment}>
      <div className={styles.doctorAugment}>
        <div className={styles.leftAugment}>
          <p className={styles.text}>
            Для мене, як пластичного хірурга, це не просто операція – це
            втілення однієї мрії. Для мене дуже важливо, щоб ви отримали бажаний
            результат та, з професійної точки, максимально пропорційний вашому
            тілу розмір та форму грудей.
          </p>
        </div>
        <div className={styles.rigntAugment}>
          <img src={imageDoctor2} alt="doctor" className={styles.imageDoctor} />
        </div>
      </div>
    </div>
  )
}

export default DoctorSection
