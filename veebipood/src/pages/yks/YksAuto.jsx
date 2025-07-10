import { useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"

function YksAuto() {
  // <Route path="/auto/:mark" element={<YksAuto />} />
  const { mark } = useParams();
  const leitud = autodFailist.find(auto => auto.nimi === mark);
//const vastus = autodFailist.filter(toode => toode.nimi.includes("er"));

  if (leitud === undefined) {
    return <div>Autot ei leitud</div>
  }

  return (
    <div>
      <div>{leitud.nimi}</div>
      <div>{leitud.hind}</div>
      <div><img className="pilt" src={leitud.pilt} alt="" /></div>
      <div>{leitud.aktiivne ? "Toode on aktiivne" : "Toode on mitteaktiivne"}</div>
    </div>
  )
}

export default YksAuto