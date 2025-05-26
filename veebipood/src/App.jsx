import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Kinkekaart from './pages/Kinkekaart'
import Esindused from './pages/Esindused'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  // pilt peaks lõppema laiendiga: .jpg või .png või .jpeg
  return (
    <>
        <Menu />

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Routes>
          <Route path="/" element={ <Avaleht /> } />
          <Route path="/ostukorv" element={<Ostukorv/>} />
          <Route path="/lisa-toode" element={<LisaToode/>} />
          <Route path="/osta-kinkekaart" element={<Kinkekaart />} />
          <Route path="/esindused" element={<Esindused />} />
          <Route path="/seaded" element={<Seaded />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
       
    </> 
  )
}

export default App
