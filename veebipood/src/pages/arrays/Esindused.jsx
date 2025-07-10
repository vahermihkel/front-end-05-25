import { useRef, useState } from "react";
import ArraysHome from "./ArraysHome";
import esindusedJSON from "../../data/esindused.json"
import { Link } from "react-router-dom";

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [tallinnaEsindused, setTallinnaEsindused] = useState(esindusedJSON.slice());

  const otsingRef = useRef();

  const otsi = () => {
    const vastus = esindusedJSON.filter(esindus => esindus.keskus.includes(otsingRef.current.value));
    setTallinnaEsindused(vastus);
  }

  // const esindusedFailist = esindusedJSON;
  // const pood = esindus.keskus; // <Route path="/esindus/:pood"

  function arvutaKokku() {
    let summa = 0;
    tallinnaEsindused.forEach(esindus => summa += esindus.keskus.length);
    return summa;
  }

  return (
    <div>
      <ArraysHome />
      <div>Esinduste keskuste tähed kokku: {arvutaKokku()}</div>
      <br />
      <input ref={otsingRef} onChange={otsi} placeholder="Otsi esindust" type="text" />
      <div>Aktiivne linn: {linn}</div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      <br /><br />

      {linn === "Tallinn" &&
      <>
        {tallinnaEsindused.map(esindus => 
          <div key={esindus.keskus}>
            {esindus.keskus}
            <Link to={"/esindus/" + esindus.keskus}>
              <button>Vt kontaktandmeid</button>
            </Link>
          </div>)}
      </>}

      {linn === "Tartu" &&
      <>
        <div>Lõunakeskus</div>
        <div>Raatuse</div>
      </>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused