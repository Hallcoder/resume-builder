import { useState } from 'react'
import NavBar from './components/NavBar'
import Intro from './components/Intro';
import Templates from './components/Templates';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full flex">
      <NavBar />
      <div className="w-full">
        <Intro />
        <Templates />
      </div>
    </div>
  )
}

export default App
