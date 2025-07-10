import { useRef, useState } from "react"
import ArraysHome from "./ArraysHome";
import autodFailist from "../../data/autod.json"
import { Link } from "react-router-dom";

function Autod() {
  const [tooted, setTooted] = useState(autodFailist.slice());
  const otsingRef = useRef();

  // sõnu võrdlen: localeCompare
  // numbreid võrdlen: üks miinus teine
  // objekte ei saa võrrelda

  const otsi = () => {
    const vastus = autodFailist.filter(toode => toode.nimi.includes(otsingRef.current.value));
    setTooted(vastus);
  }

  function reset() {
    setTooted(autodFailist.slice());
  }

  function sorteeriAZ() {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    setTooted(tooted.slice());
  }

  function sorteeriKolmasTahtZA() {
    tooted.sort((a,b) => b.nimi[2].localeCompare(a.nimi[2]));
    setTooted(tooted.slice());
  }

  function sorteeriHindKasv() {
    tooted.sort((a,b) => a.hind - b.hind);
    setTooted(tooted.slice());
  }

  function sorteeriHindKah() {
    tooted.sort((a,b) => b.hind - a.hind);
    setTooted(tooted.slice());
  }


  function filtreeriIgaLoppevad() {
    const vastus = autodFailist.filter(toode => toode.nimi.endsWith("i"));
    setTooted(vastus);
  }

  function filtreeriErSisaldavad() {
    const vastus = autodFailist.filter(toode => toode.nimi.includes("er"));
    setTooted(vastus);
  }

  //.push(MIDA) --> lõppu lisamiseks
  //.splice(MITMENDAT, TK) --> kustutamiseks
  //.sort((a,b) => PLUSS/MIINUS) --> kui on plussmärk, siis keerab nende kahe järjekorra teistpidi
  //.filter(element => TRUE/FALSE) --> kui on true, siis jätab alles
  //.map(element => MILLEGA_ASENDADA) --> iga kord asendatakse see element uue elmendiga

  function suurteksTahtedeks() {
    // const vastus = autodFailist.map(toode => ({"nimi": toode.nimi.toUpperCase(), "hind": toode.hind, "pilt": toode.pilt, "aktiivne": toode.aktiivne}));
    const vastus = autodFailist.map(toode => ({...toode, "nimi": toode.nimi.toUpperCase()}));
    setTooted(vastus);
  }

  function arvutaKokku() {
    let summa = 0;
    tooted.forEach(toode => summa += toode.hind);
    return summa;
  }

  function lisaOstukorvi(toode) {
    // array ostukorvi
    // varasemalt asendasime koguaeg eelnevalt lisatu
    // "en" --> "et"     "true" --> "false"
    // aga nüüd: ["BMW", "Audi",........]
    // 1. võtan varasema seisu, et sinna hakata juurde lisama:  localStorage.getItem
    // 1.b võtan jutumärgid maha:   JSON.parse()
    // 2. lisan ühe juurde:      .push()
    // 3. lisame localStorage-sse tagasi: localStorage.setItem()
    // 3.b lisame jutumärgid tagasi: JSON.stringify()
    const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
    ostukorvLS.push(toode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
  }

  //   = null || []
  // [].push("BMW");
  // ["BMW"] -> JSON.stringify -----> "["BMW"]"

  //2.
  // = "["BMW"]" -> JSON.parse() ---->  ["BMW"]
  // ["BMW"].push("Audi")
  // ["BMW", "Audi"] -> JSON.stringify() ----->    "["BMW", "Audi"]"

  return (
    <div>
      <ArraysHome />
      <div>Autode hinnad kokku: {arvutaKokku()}</div>
      <button onClick={reset}>Reset</button>
      <br />
      <input ref={otsingRef} onChange={otsi} type="text" />
      <div>Toodete koguarv: {tooted.length} tk</div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriKolmasTahtZA}>Sorteeri kolmas täht Z-A</button>
      <button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
      <button onClick={sorteeriHindKah}>Sorteeri hind kahanevalt</button>
      <br />
      <button onClick={filtreeriIgaLoppevad}>Jäta alles i-ga loppevad</button>
      <button onClick={filtreeriErSisaldavad}>Jäta alles er sisaldavad</button>
      <br />
      <button onClick={suurteksTahtedeks}>Muuda kõigil tähed suurteks</button>
      {tooted.map(toode => 
        <div key={toode.nimi}>
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <img className="pilt" src={toode.pilt} alt="" />
          <Link to={"/auto/" + toode.nimi}>
            <button>Vt lähemalt</button>
          </Link>
          <button onClick={() => lisaOstukorvi(toode)}>     Lisa ostukorvi     </button>
        </div>)}
    </div>
  )
}

export default Autod