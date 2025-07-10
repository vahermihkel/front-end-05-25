import './App.css'
import { Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Kinkekaart from './pages/Kinkekaart'
import Esindused from './pages/arrays/Esindused'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'
import ArraysHome from './pages/arrays/ArraysHome'
import Autod from './pages/arrays/Autod'
import Hinnad from './pages/arrays/Hinnad'
import Kasutajad from './pages/arrays/Kasutajad'
import Tootajad from './pages/arrays/Tootajad'
import Tooted from './pages/arrays/Tooted'
import HaldaHome from './pages/halda/HaldaHome'
import HaldaAutod from './pages/halda/HaldaAutod'
import HaldaEsindused from './pages/halda/HaldaEsindused'
import HaldaHinnad from './pages/halda/HaldaHinnad'
import HaldaKasutajad from './pages/halda/HaldaKasutajad'
import HaldaTootajad from './pages/halda/HaldaTootajad'
import HaldaTooted from './pages/halda/HaldaTooted'
import MuudaAuto from './pages/muuda/MuudaAuto'
import MuudaEsindus from './pages/muuda/MuudaEsindus'
import MuudaHind from './pages/muuda/MuudaHind'
import MuudaKasutaja from './pages/muuda/MuudaKasutaja'
import MuudaTootaja from './pages/muuda/MuudaTootaja'
import MuudaToode from './pages/muuda/MuudaToode'
import YksAuto from './pages/yks/YksAuto'
import YksEsindus from './pages/yks/YksEsindus'
import YksHind from './pages/yks/YksHind'
import YksKasutaja from './pages/yks/YksKasutaja'
import YksTootaja from './pages/yks/YksTootaja'
import YksToode from './pages/yks/YksToode'
import { useState } from 'react'
import { ContactUs } from './pages/ContactUs'
import ApiHome from './pages/api/ApiHome'
import ApiAutod from './pages/api/ApiAutod'
import Riigid from './pages/api/Riigid'
import Sonastik from './pages/api/Sonastik'
import Tarnija1 from './pages/api/Tarnija1'
import Tarnija2 from './pages/api/Tarnija2'
import Tarnija3 from './pages/api/Tarnija3'

function App() {  
  const [tume, setTume] = useState(JSON.parse(localStorage.getItem("tume")));

  const muudaTumedaks = () => {
    setTume(true);
    localStorage.setItem("tume", JSON.stringify(true));
  }

  const muudaHeledaks = () => {
    setTume(false);
    localStorage.setItem("tume", JSON.stringify(false));
  }

  // kui muutuja tume on true, siis on peal CSS klass .tume {}
  // kui ei ole true, siis pole peal mitte midagi (undefined)
  //     <div className={tume === true ? "tume" : undefined}>

  return (
    <div className={tume === true ? "tume" : undefined}>
        <Menu />
        <button onClick={muudaTumedaks}>Tumedaks</button>
        <button onClick={muudaHeledaks}>Heledaks</button>

        <Routes>
          <Route path="/" element={ <Avaleht /> } />
          <Route path="/ostukorv" element={<Ostukorv/>} />
          <Route path="/lisa-toode" element={<LisaToode/>} />
          <Route path="/osta-kinkekaart" element={<Kinkekaart />} />
          <Route path="/seaded" element={<Seaded />} />
          <Route path="/kalkulaator" element={<Kalkulaator />} />

          <Route path="/arrays-home" element={<ArraysHome />} />
          <Route path="/autod" element={<Autod />} />
          <Route path="/esindused" element={<Esindused />} />
          <Route path="/hinnad" element={<Hinnad />} />
          <Route path="/kasutajad" element={<Kasutajad />} />
          <Route path="/tootajad" element={<Tootajad />} />
          <Route path="/tooted" element={<Tooted />} />

          <Route path="/halda-home" element={<HaldaHome />} />
          <Route path="/halda-autod" element={<HaldaAutod />} />
          <Route path="/halda-esindused" element={<HaldaEsindused />} />
          <Route path="/halda-hinnad" element={<HaldaHinnad />} />
          <Route path="/halda-kasutajad" element={<HaldaKasutajad />} />
          <Route path="/halda-tootajad" element={<HaldaTootajad />} />
          <Route path="/halda-tooted" element={<HaldaTooted />} />

          <Route path="/muuda-auto/:index" element={<MuudaAuto />} />
          <Route path="/muuda-esindus/:index" element={<MuudaEsindus />} />
          <Route path="/muuda-hind/:index" element={<MuudaHind />} />
          <Route path="/muuda-kasutaja/:index" element={<MuudaKasutaja />} />
          <Route path="/muuda-tootaja/:index" element={<MuudaTootaja />} />
          <Route path="/muuda-toode/:index" element={<MuudaToode />} />

          <Route path="/auto/:mark" element={<YksAuto />} />
          <Route path="/esindus/:pood" element={<YksEsindus />} />
          <Route path="/hind/:index" element={<YksHind />} />
          <Route path="/kasutaja" element={<YksKasutaja />} />
          <Route path="/tootaja" element={<YksTootaja />} />
          <Route path="/toode" element={<YksToode />} />

          <Route path="/email" element={<ContactUs />} />

          <Route path="/api-home" element={<ApiHome />} />
          <Route path="/api-autod" element={<ApiAutod />} />
          <Route path="/riigid" element={<Riigid />} />
          <Route path="/sonastik" element={<Sonastik />} />
          <Route path="/tarnija1" element={<Tarnija1 />} />
          <Route path="/tarnija2" element={<Tarnija2 />} />
          <Route path="/tarnija3" element={<Tarnija3 />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
       
    </div> 
  )
}

export default App

// 5. 23.05 Reacti algus, navigeerimine
// 6. 02.06 useState, useRef
// 7. 05.06 --> 2 ak/h dünaamiline CSS, alamkomponendid
// 8. 09.06 --> ei saa, annab Hans
// 9. 12.06 kalkulaator. serverisse ülespanek (Firebase)
//10. 14.06 Toastify, arrays
//11. 19.06 Regex. Array kustutamine + lisamine (Halda). objektid
//xx.P22.06 --> 13.30-16.45. 
//12. 26.06 useParams - URL muutuja. tõlge
//13. E 30.06 muutmine, otsing, unikaalsuse kontroll, kokkuarvutus
//14. N 03.07 localStorage, ostukorv, bootstrap, emaili saatmine, API ----> KODUS WEBSHOP
//14. E 07.07 lõpetame 19.00. API, 
//15. N 10.07 Webshop. Ülevaatamine. Andmebaas. TypeScript
//16. E 14.07 Kogus ostukorvis (objekt objektis), kujundus, Context (globaalne muutuja)
//17. N 17.07 Webshopis saadame ID muutmisel
//18. N 31.07  ---> 2ak/h. lõpuprojekti esitlemine.
//  tegelikult kohtume siin, aga allkirjalehele varasem kpv