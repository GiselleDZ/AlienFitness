import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import PoseNet from './components/Posenet/PoseNet'

const App = () => {
  return (
    <div>
      <Navbar />
      <PoseNet />
      <Routes />
    </div>
  )
}

export default App
