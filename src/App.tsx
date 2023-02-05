import { Canvas } from '@react-three/fiber'
import './App.css'



function App() {

  return (
    <div className="App">
      <h1 className='text-lg bg-green-200'>Hello r3f!</h1>
      <Canvas>
        <ambientLight  />
        <mesh>
          <boxGeometry args={[2,2,2]} />
          <meshStandardMaterial color="pink"  />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
