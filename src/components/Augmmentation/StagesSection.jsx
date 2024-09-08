import React from 'react'
import styles from './StagesSection.module.css'
import imgLargement from '../../assets/images/operations/breast/imgLargement.jpg'

const StagesSection = () => {
  return (
    <div className={styles.containerEnAugement}>
      <h3>Етапи збільшення грудей</h3>
      <div className={styles.enAugement}>
        <div className={styles.textEnAugemen}>
          <p>
            У призначений час за відсутності протипоказань хірург розпочинає
            операцію. Мамопластика виконується під загальним наркозом протягом
            1-2 годин. Хірург наводить розріз на шкірі та вводить силіконовий
            імплантант у підготовлену кишеню між м'якими тканинами грудей. Потім
            хірург пошарово зашиває рану, накладає асептичну пов'язку,
            встановлює дренаж і надягає на пацієнтку компресійну білизну. Хірург
            дає всі необхідні рекомендації задля досягнення максимального
            результату. Пацієнтка 24 години перебуває у стаціонарі під наглядом
            лікарів та, за відсутності ускладнень, повертається додому.
          </p>
        </div>
        <div className={styles.imgEnAugment}>
          <img src={imgLargement} alt="Етапи збільшення грудей" />
        </div>
      </div>
    </div>
  )
}

export default StagesSection
