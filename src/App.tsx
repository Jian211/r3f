import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react'
import { Mesh } from 'three'
import './App.css'


function Box(){

  const boxRef = useRef<Mesh>(null!);

  useFrame(()=>{
    boxRef.current.rotation.x = 1.8;
    // boxRef.current.rotation.y += 0.005;
    // boxRef.current.rotation.z += 0.005
  })

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[3,3,1.2]} />
      <meshStandardMaterial color="pink"  />
    </mesh>
  )
}

function ThreeScene() {
  return (
    <Canvas>
      {/* <ambientLight  /> */}
      <pointLight position={[4,4,1]} />
      <Box />
    </Canvas>
  )
}

function App() {
  return (
    <div className="App">
      <h1 className='text-lg bg-green-200'>Hello r3f!</h1>
      <ThreeScene />
    </div>
  )
}

export default App
