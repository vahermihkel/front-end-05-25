import { useNavigate, useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"
import { useRef } from "react";

function MuudaEsindus() {
  const { index } = useParams();
  const leitud = esindusedFailist[index];
  const keskusRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    if (keskusRef.current.value === "") {
      alert("Tühja keskuse nimega ei saa lisada!");
      return;
    }

    esindusedFailist[index] = {
      "keskus": keskusRef.current.value, 
      "tel": telefonRef.current.value, 
      "aadress": aadressRef.current.value
    }
    navigate("/halda-esindused");
  }

  return (
    <div>
      <label>Keskus</label> <br />
      <input ref={keskusRef} type="text" defaultValue={leitud.keskus} /> <br />
      <label>Telefon</label> <br />
      <input ref={telefonRef} type="text" defaultValue={leitud.tel} /> <br />
      <label>Aadress</label> <br />
      <input ref={aadressRef} type="text" defaultValue={leitud.aadress} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaEsindus