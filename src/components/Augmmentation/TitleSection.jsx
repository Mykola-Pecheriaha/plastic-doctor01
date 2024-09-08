import React from 'react'
import styles from './TitleSection.module.css'

const TitleSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          Збільшення грудей <br /> в Чернівцях{' '}
        </h2>
        <p>
          Приваблива фігура дарує впевненість у собі, відкриває шлях до
          особистого щастя та сприяє успішній соціалізації. Пластична операція
          зі збільшення грудей – це мрія… мрія кожної жінки, яка не в змозі
          похизуватись об’ємом або ж після народження дітей комплексує з приводу
          втрати форми
        </p>
        <button className={styles.buttonAugment}>
          Дізнатися більше
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  )
}

export default TitleSection
