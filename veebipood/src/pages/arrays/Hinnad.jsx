import { useRef, useState } from "react"
import ArraysHome from "./ArraysHome";
import hinnadFailist from "../../data/hinnad.json";
import { Link } from "react-router-dom";

function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice())
  const otsingRef = useRef();

  function reset() {
    setHinnad(hinnadFailist.slice());
  }

  // const sorteeriKasvavalt = () => {}
  function sorteeriKasvavalt() {
    hinnad.sort((a, b) => a - b);
    setHinnad(hinnad.slice()); // .slice() ---> kustutab mälukoha (kust ta pärineb)
  } // miks siin on seda vaja? 
  // sest muidu uuendatakse "hinnad" muutujat "setHinnad" abil, pannes sisse "hinnad"

  function sorteeriKahanevalt() {
    hinnad.sort((a, b) => b - a);
    setHinnad(hinnad.slice());
  }

  function filtreeriSuuremadKui100() {
    const vastus = hinnadFailist.filter(hind => hind > 100);
    setHinnad(vastus);
  }

  function filtreeriVaiksemadKui50() {
    const vastus = hinnadFailist.filter(hind => hind < 50);
    setHinnad(vastus);
  }

  const otsi = () => {
    const vastus = hinnadFailist.filter(hind => hind.number.toString().includes(otsingRef.current.value));
    setHinnad(vastus);
  }

  const arvutaKokku = () => {
    let summa = 0;
    // summa = summa + 9;
    // summa = summa + 123;
    // summa += 54;
    // Variant1:
    // for (let index = 0; index < hinnad.length; index++) {
    //   summa = summa + hinnad[index].number;
    // }
    // Variant2:
    // for (let hind of hinnad) {
    //   summa = summa + hind.number;
    // }
    // Variant3:
    hinnad.forEach(hind => summa = summa + hind.number);
    return summa; // return väljastab midagi HTMLi
  }

  // onClick={reset} onClick={otsi}   kui midagi kaasa ei saada
  // onClick={() => kustuta(index)}   kui saadan midagi kaasa

  // kui tahan, et kohe käivituks, siis saan panna <div>{arvutaKokku()}</div>

// ootab käivitust: onClick={reset}
// ootab käivitust: onChange={() => otsi()}
// käivitub kohe: {arvutaKokku()}

  return (
    <div>
      <ArraysHome />
      <div>Hindade koguväärtus: {arvutaKokku()} €</div>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <input ref={otsingRef} onChange={otsi} placeholder="Otsi hinda" type="text" />
      <div>Kokku {hinnad.length} tk</div>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <br />
      <button onClick={filtreeriSuuremadKui100}>Jäta alles suuremad kui 100</button>
      <button onClick={filtreeriVaiksemadKui50}>Jäta alles väiksemad kui 50</button>
      {hinnad.map((hind, index) => 
        <div key={hind.number}>
          <div>{hind.number} €</div>
          <Link to={"/hind/" + index}>
            <button>Vt lähemalt</button>
          </Link>
        </div>)}
    </div>
  )
}

export default Hinnad