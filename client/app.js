import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
// import PoseNet from './components/Posenet/PoseNet'
import WindowResize from './components/Posenet/WindowResize'
import InstructorCanvas from './components/ThreeJS/InstructorCanvas'

const App = () => {
  return (
    <div>
      <Navbar />
      <InstructorCanvas />
      <WindowResize />
      <Routes />
    </div>
  )
}

export default App
