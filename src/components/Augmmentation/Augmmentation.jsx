import React, { useState } from 'react'

import TitleSection from './TitleSection'
import DoctorSection from './DoctorSection'
import DescriptionSection from './DescriptionSection'
import IndicationsSection from './IndicationsSection'
import ContraindicationsSection from './ContraindicationSection'
import ImplantsSection from './ImplantsSection'
import PreparationSection from './PreparationSection'
import StagesSection from './StagesSection'
import RehabilitationSection from './RehabilitationSection'
import ResultsSection from './ResultsSection'

const Augmmentation = () => {
  const [activeSection, setActiveSection] = useState(null)

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }
  return (
    <>
      <TitleSection />
      <DoctorSection />
      <DescriptionSection />
      <IndicationsSection />
      <ContraindicationsSection />
      <ImplantsSection />
      <PreparationSection
        activeSection={activeSection}
        toggleSection={toggleSection}
      />
      <StagesSection />
      <RehabilitationSection />
      <ResultsSection />
    </>
  )
}

export default Augmmentation
