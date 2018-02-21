import React from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from 'react-router-dom'

import Home from './Home'
import New from './New'

import '../css/global.css'
import styles from '../css/wrapper.css'


//


const App = () => {
  const randomColour = d3.interpolateWarm(Math.random())

  return (
    <Router>
      <div className={ styles.wrapper } style={{ backgroundColor: randomColour }} >
        <Route path="/" component={ New } />
      </div>
    </Router>
  )
}

export default App
