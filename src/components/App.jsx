import React from 'react'

import Home from './Home'
import '../css/global.css'
import styles from '../css/wrapper.css'

const App = () => {
  const randomColour = d3.interpolateWarm(Math.random())

  return (
    <div className={ styles.wrapper } style={{ backgroundColor: randomColour }} >
      <div className={ styles.title }>fluxmood</div>
      <Home />
    </div>
  )
}

export default App
