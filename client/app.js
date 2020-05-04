import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import WindowResize from './components/Posenet/WindowResize'
import DashboardControls from './components/DashboardControls'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="game">
        <DashboardControls />
        <WindowResize />
      </div>
      <Routes />
    </div>
  )
}

export default App
