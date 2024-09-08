import React from 'react'
import styles from './RehabilitationSection.module.css'
import imgRehab from '../../assets/images/operations/breast/imgRehab.jpg'

const RehabilitationSection = () => {
  return (
    <div className={styles.containerRehab}>
      <h3>Реабілітація після збільшення грудей</h3>
      <div className={styles.rehab}>
        <div className={styles.textRehab}>
          <ul>
            <li>
              Після аугментації грудей під загальним наркозом перші 24 години
              (або 48 годин за наявності показань) ви проведете у стаціонарі.
            </li>
            <li>
              Протягом 10-14 днів спостерігаються набряки, болючість у ділянці
              грудей, відчуття «натягу».
            </li>
            <li>
              Протягом місяця після аугментації необхідно носити компресійну
              білизну, яка запобігає набрякам та зміщенню імплантату.
            </li>
            <li>
              Відгуки наших пацієнтів містять практичні рекомендації, які
              роблять реабілітацію після збільшення грудей комфортнішою.
            </li>
          </ul>
        </div>
        <div className={styles.imgRehab}>
          <img src={imgRehab} alt="Реабілітація" />
        </div>
      </div>
    </div>
  )
}

export default RehabilitationSection
