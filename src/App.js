import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Details from './components/Details'
import MovieContextProvider from './contexts/MovieContext'

const initialState = false || JSON.parse(localStorage.getItem('theme'))

const App = () => {
  const [darkMode, setDarkMode] = useState(initialState)
  
  const toggleMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={darkMode ? "dark-mode container" : "light-mode container"}>
      <Router>
        <Navbar toggleMode={toggleMode}/>
        <Switch>
          <MovieContextProvider >
            <Route exact path="/movieSearchApp" component={Search} />
            <Route path="/movieSearchApp/:id" component={Details} />
          </MovieContextProvider>
        </Switch>
      </Router>
    </div>
  )
}

export default App

