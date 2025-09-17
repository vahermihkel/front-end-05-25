import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' // .carousel {width: 100px}
import 'leaflet/dist/leaflet.css';
import './index.css' // .carousel {width: 250px}
import App from './App.js'
import './i18n.js'
import { CartSumContextProvider } from './context/CartSumContext.js';
import { AuthContextProvider } from './context/AuthContext.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </StrictMode>,
)


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
//15. N 10.07 Webshop. Ülevaatamine. Andmebaas.
//16. E 14.07 Andmebaas. Context (globaalne muutuja) 
//17. N 17.07 TypeScript. Kogus ostukorvis (objekt objektis), kujundus. Webshopis saadame ID muutmisel
//18. N 31.07  ---> 2ak/h. lõpuprojekti esitlemine.
//  tegelikult kohtume siin, aga allkirjalehele varasem kpv