import React from 'react'
import styles from './ResultsSection'
import imgResults from '../../assets/images/operations/breast/imgResults.jpg'

const ResultsSection = () => {
  return (
    <div className={styles.containerResults}>
      <h3>Результати збільшення грудей імплантами</h3>
      <div className={styles.results}>
        <div className={styles.texrResults}>
          <p>
            В результаті збільшення грудей імплантами ви отримаєте: естетично
            привабливий бюст; симетричні та красиві соски та ареоли; виправлення
            асиметричної форми грудей; збільшення об'єму грудей. Судячи з
            відгуків наших пацієнток, вони задоволені ефектом та своїм вибором
            цієї методики збільшення грудей.
          </p>
        </div>
        <div className={styles.imgResults}>
          <img src={imgResults} alt="результат" />
        </div>
      </div>
    </div>
  )
}

export default ResultsSection
