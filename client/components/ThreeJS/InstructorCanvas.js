import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import {Canvas, Dom} from 'react-three-fiber'
// import '../../../public/style.css'
import Scene from './Scene'
import Controls from './Controls'

function InstructorCanvas() {
  return (
    <Canvas camera={{zoom: 40, position: [0, 0, 500]}}>
      <Suspense
        fallback={<Dom center className="loading" children="Loading..." />}
      >
        <Controls />
        <Scene />
      </Suspense>
    </Canvas>
  )
}

export default InstructorCanvas
// const root = document.getElementById("root");
// ReactDOM.render(<App />, root);
