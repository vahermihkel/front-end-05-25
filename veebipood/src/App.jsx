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
import Kalkulaator from './pages/Kalkulaator'

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
          <Route path="/kalkulaator" element={<Kalkulaator />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
       
    </> 
  )
}

export default App

// 5. 23.05
// 6. 02.06
// 7. 05.06 --> lühem
// 8. 09.06 --> ei saa  Hans
// 9. 12.06
//10. 14.06 kell 10.00-13.15
//xx. 16.06 --> ei saa
//11. 19.06
//xx. 23.06 --> ei toimu
//12. 26.06
//13. 30.06
