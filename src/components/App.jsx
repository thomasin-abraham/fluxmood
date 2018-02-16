import React from 'react'

import '../css/global.css'
import styles from '../css/wrapper.css'

const App = () => {
  const randomColour = d3.interpolateWarm(Math.random())

  return (
    <div className={ styles.wrapper } style={{ backgroundColor: randomColour }} >
      <div className={ styles.title }>fluxmood</div>
    </div>
  )
}

export default App
