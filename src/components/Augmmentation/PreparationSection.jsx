import React from 'react'
import styles from './PreparationSection.module.css'

const PreparationSection = ({ toggleSection, activeSection }) => {
  return (
    <div className={styles.preparatioContainer}>
      <div className={styles.preparationReduct}>
        <h3 className={styles.preparatioText}>
          Підготовка до операції по ендопротизуванню мологної залози.
        </h3>

        <div className={styles.section}>
          <h4 onClick={() => toggleSection('consultation')}>
            Консультація <span className={styles.plusIcon}>+</span>
          </h4>
          {activeSection === 'consultation' && (
            <p>
              Під час прийому я знайомлю пацієнтку з деталями операції та
              рекомендаціями, яких необхідно дотримуватись до операції.
            </p>
          )}
        </div>

        <div className={styles.section}>
          <h4 onClick={() => toggleSection('inspectio')}>
            Огляд <span className={styles.plusIcon}>+</span>
          </h4>
          {activeSection === 'inspectio' && (
            <p>
              Здійсню виміри для підбору розмірів імплантів, з дуже детальни
              обговоренням з пацієнткою їх. Обговоримо також з пацієнткою форму
              імплантів. Потім обираю метод проведення операції та спосіб
              установки імплантів.
            </p>
          )}
        </div>

        <div className={styles.section}>
          <h4 onClick={() => toggleSection('examination')}>
            Обстеження <span className={styles.plusIcon}>+</span>
          </h4>
          {activeSection === 'examination' && (
            <p>
              Обов’язковим є огляд спеціалістів та здача всіх необхідних
              аналізів перед маммопластикою. До аналізів належать (загальний
              аналіз крові та сечі, біохімічний аналіз крові, цукор крові,
              коагулограма, проба на СНІД, ВІЛ, гепатит В і С, реакція
              Вассермана, група крові і резус фактор). До огляду спеціалістів –
              УЗД молочних залоз і ЕКГ, а також огляд у гінеколога та терапевта.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PreparationSection
