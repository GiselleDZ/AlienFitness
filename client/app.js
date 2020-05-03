import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import PoseNet from './components/Posenet/PoseNet'
import WindowResize from './components/Posenet/WindowResize'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <PoseNet /> */}
      <WindowResize />
      {/* <Routes /> */}
    </div>
  )
}

export default App
