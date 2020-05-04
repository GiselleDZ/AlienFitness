import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

var loader = new THREE.GLTFLoader()

loader.load(
  '../../models/Alien-Doing-JumpingJacks.glb',
  function(gltf) {
    scene.add(gltf.scene)
  },
  undefined,
  function(error) {
    console.error(error)
  }
)
