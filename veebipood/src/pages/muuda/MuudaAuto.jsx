import { useNavigate, useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"
import { useRef } from "react";

// Reacti erikood --> Hook
// 1. tuleb importida node_module-st siin failis
// 2. peab olema use- eesliidesega
// 3. kui ta loon, peavad sulud olema lõpus (ta peab olema funktsionaalne)
// 4. ta ei tohi olla funktsiooni sees loodud
// 5. ta ei tohi olla tingimuslikult loodud (if abiga)

function MuudaAuto() {
  const { index } = useParams();
  const leitud = autodFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    if (nimiRef.current.value === "") {
      alert("Tühja nimega autot ei saa lisada!");
      return;
    }

    autodFailist[index] = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), // kui HTMLs number
      "aktiivne": aktiivneRef.current.checked, // .current.value annab mulle "on", olenemata kas on linnuke või mitte
      "pilt": piltRef.current.value
    }
    navigate("/halda-autod");
  }

  return (
    <div>
      <input ref={nimiRef} type="text" defaultValue={leitud.nimi} /> <br />
      <input ref={hindRef} type="number" defaultValue={leitud.hind} /> <br />
      <input ref={piltRef} type="text" defaultValue={leitud.pilt} /> <br />
      <input ref={aktiivneRef} type="checkbox" defaultChecked={leitud.aktiivne} /> <br />
      {/* <Link to="/halda-autod"> */}
      <button onClick={muuda}>Muuda</button>
      {/* </Link> */}
    </div>
  )
}

export default MuudaAuto