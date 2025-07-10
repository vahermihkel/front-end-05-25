import { useRef, useState } from "react"
import HaldaHome from "./HaldaHome"
import hinnadFailist from "../../data/hinnad.json";
import { Link } from "react-router-dom";

function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice())
  const hindRef = useRef();
  const sonaRef = useRef();

  const lisa = () => {
    if (hindRef.current.value === "") {
      alert("Tühja hinda ei saa lisada!");
      return;
    }
    hinnadFailist.push({
      "number": Number(hindRef.current.value),
      "sonana": sonaRef.current.value
    });
    setHinnad(hinnadFailist.slice());
    hindRef.current.value = "";
  }

  const kustuta = (index) => {
    hinnadFailist.splice(index, 1);
    setHinnad(hinnadFailist.slice());
  }

  return (
    <div>
      <HaldaHome />
      <label>Hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Sõnana</label> <br />
      <input ref={sonaRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Hind</th>
            <th>Hind sõnana</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => 
          <tr key={hind.number}>
            <td>{index}</td>
            <td>{hind.number}</td>
            <td>{hind.sonana}</td>
            <td><button onClick={() => kustuta(index)}>x</button></td>
            <td>
              <Link to={"/muuda-hind/" + index}>
                <button>Muuda</button>
              </Link>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad