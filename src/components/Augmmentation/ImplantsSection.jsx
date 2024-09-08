import React from 'react'
import styles from './ImplantsSection.module.css'
import implants from '../../assets/images/operations/breast/impl.jpg'

const ImplantsSection = () => {
  return (
    <div className={styles.implantsContainer}>
      <h3>Види імплантів для збільшення грудей</h3>
      <div className={styles.implants}>
        <div className={styles.leftImplants}>
          <p>
            Форма і розмір імпланта - найважливіші параметри кінцевого
            результату збільшення грудей. Адже від правильного визначення виду
            та об'єму грудних імплантів залежить естетичний результат операції
            що впливає на психологічний комфорт пацієнтки. <br />
            Ми використовуємо силіконові грудні імпланти відомого світового
            виробника POLYTECH уже на протязі 23 років. Що вказує на їх високу
            якість. Є два виду силіконових імплантів: <br /> Круглі імпланти -
            мають форму півсфери. Ці імпланти рівномірно заповнюють верхній і
            нижній відділ грудей і створюють візуальний ефект піднятої молочної
            залози.
            <br /> Анатомічні (краплеподібні) імпланти - мають витягнуту форму
            краплі. Вони надають грудям природної форми.
          </p>
        </div>
        <img src={implants} alt="імпланти" className={styles.implants} />
      </div>
    </div>
  )
}

export default ImplantsSection
