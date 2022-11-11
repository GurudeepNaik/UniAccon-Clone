import React from 'react'
import Section from './components/LargeCardSection/Section'
import Header from './components/header/Header'
import BtnScroll from './components/ScrollBtnSection.js/BtnScroll'
import SmallCardSection from './components/smallCard/SmallCardSection'

const App = () => {
  return (
    <div>      
    <Header/>
    <Section/>
    <BtnScroll/>
    <SmallCardSection/>
    </div>
  )
}

export default App