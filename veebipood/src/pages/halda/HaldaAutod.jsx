import { useRef, useState } from "react"
import HaldaHome from "./HaldaHome"
import autodFailist from "../../data/autod.json"
import { Link } from "react-router-dom";

function HaldaAutod() {
  const [autod, setAutod] = useState(autodFailist.slice());
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const [unikaalne, setUnikaalne] = useState(true);

  const lisa = () => {
    if (nimiRef.current.value === "") {
      alert("Tühja nimega autot ei saa lisada!");
      return;
    }
    autodFailist.push({
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "aktiivne": aktiivneRef.current.checked,
      "pilt": piltRef.current.value
    });
    setAutod(autodFailist.slice());
    nimiRef.current.value = "";
    hindRef.current.value = "";
    aktiivneRef.current.value = false;
    piltRef.current.value = "";
  }

  // const kustutaEsimene = () => {
  //   // kustutamisel kasutame ainult järjekorranumbrit (indexit)
  //   autod.splice(0, 1); // esimene nr --> mitmendat kustutan, teine nr ---> mitu tk alates sellest
  //   setAutod(autod.slice());
  // }

  // const kustutaTeine = () => {
  //   autod.splice(1, 1);
  //   setAutod(autod.slice());
  // }

  // const kustutaKolmas = () => {
  //   autod.splice(2, 1);
  //   setAutod(autod.slice());
  // }

  // const kustutaNeljas = () => {
  //   autod.splice(3, 1);
  //   setAutod(autod.slice());
  // }

  const kustuta = (index) => {
    autodFailist.splice(index,1);
    setAutod(autodFailist.slice());
  }

  const kasUnikaalne = () => {
              // YksAuto.jsx ---> leidsime auto nime järgi useParams abil
    const leitud = autodFailist.find(auto => auto.nimi === nimiRef.current.value);
    if (leitud === undefined) {
      setUnikaalne(true);
    } else {
      setUnikaalne(false);
    }
  }

  return (
    <div>
      <HaldaHome />
      {/* <button onClick={kustutaEsimene}>Kustuta esimene</button>
      <button onClick={kustutaTeine}>Kustuta teine</button>
      <button onClick={kustutaKolmas}>Kustuta kolmas</button>
      <button onClick={kustutaNeljas}>Kustuta neljas</button> */}
      {unikaalne === false && <div className="red">Auto nimi on kellelgi juba olemas!</div>}
      <label>Auto nimi</label> <br />
      <input onChange={kasUnikaalne} ref={nimiRef} type="text" /> <br />
      <label>Auto hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Auto pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Auto aktiivne</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button disabled={unikaalne === false} onClick={lisa}>Lisa</button> <br />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Auto nimi</th>
            <th>Auto hind</th>
            <th>Auto pilt</th>
            <th>Auto aktiivne</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {autod.map((auto, index) => 
          <tr key={auto.nimi}>
            <td>{index}</td>
            <td>{auto.nimi}</td>
            <td>{auto.hind}</td>
            <td><img style={{width:"50px", borderRadius: "10px"}} src={auto.pilt} alt="" /></td>
            <td>{auto.aktiivne ? "Aktiivne" : "Mitteaktiivne"}</td>
            <td><button onClick={() => kustuta(index)}>x</button></td>
            <td>
              <Link to={"/muuda-auto/" + index}>
                <button>Muuda</button>
              </Link>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaAutod