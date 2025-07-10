import { useRef, useState } from "react"
import HaldaHome from "./HaldaHome"
import esindusedJSON from "../../data/esindused.json"
import { Link } from "react-router-dom";

function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedJSON.slice());
  const esindusRef = useRef();
  const aadressRef = useRef();
  const telefonRef = useRef();
  const [unikaalne, setUnikaalne] = useState(true);

  const lisa = () => {
    if (esindusRef.current.value === "") {
      alert("Tühja esindust ei saa lisada!");
      return;
    }
    if (aadressRef.current.value === "") {
      alert("Tühja aadressi ei saa lisada!");
      return;
    }
    if (telefonRef.current.value === "") {
      alert("Tühja telefoninumbrit ei saa lisada!");
      return;
    }
    esindusedJSON.push({
      "keskus": esindusRef.current.value, 
      "aadress": aadressRef.current.value, 
      "tel": telefonRef.current.value
    });
    setEsindused(esindusedJSON.slice());
    // vormi tagasi tühjaks tegemiseks:
    esindusRef.current.value = "";
    aadressRef.current.value = "";
    telefonRef.current.value = "";
  }

  const kustuta = (index) => {
    esindusedJSON.splice(index, 1);
    setEsindused(esindusedJSON.slice());
  }


  const kasUnikaalne = () => {
    const leitud = esindusedJSON.find(esindus => esindus.keskus === esindusRef.current.value);
    if (leitud === undefined) {
      setUnikaalne(true);
    } else {
      setUnikaalne(false);
    }
  }

  return (
    <div>
      <HaldaHome />
      {unikaalne === false && <div className="red">Keskuse nimi on juba olemas!</div>}
      <label>Esindus</label> <br />
      <input onChange={kasUnikaalne} ref={esindusRef} type="text" /> <br />
      <label>Aadress</label> <br />
      <input ref={aadressRef} type="text" /> <br />
      <label>Telefon</label> <br />
      <input ref={telefonRef} type="text" /> <br />
      <button disabled={unikaalne === false} onClick={lisa}>Lisa</button> <br />
      <button onClick={() => kustuta(0)}>Kustuta esimene</button>
      <button onClick={() => kustuta(1)}>Kustuta teine</button>
      <button onClick={() => kustuta(2)}>Kustuta kolmas</button>
      <button onClick={() => kustuta(3)}>Kustuta neljas</button>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Esinduse keskus</th>
            <th>Esinduse telefon</th>
            <th>Esinduse aadress</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {esindused.map((esindus, index) => 
          <tr key={esindus.keskus}>
            <td>{index}</td>
            <td>{esindus.keskus}</td>
            <td>{esindus.tel}</td>
            <td>{esindus.aadress}</td>
            <td><button onClick={() => kustuta(index)}>x</button></td>
            <td>
              <Link to={"/muuda-esindus/" + index}>
                <button>Muuda</button>
              </Link>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaEsindused