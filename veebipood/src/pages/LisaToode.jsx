import { useRef } from "react"

function LisaToode() {
  const nimiRef = useRef();

  // echmascript 6-7
  const lisa = () => {
    if (nimiRef.current.value === "") {
      alert("Tühja nimetusega ei saa lisada!");
    } else {
      alert("Toode lisatud: " + nimiRef.current.value);
    }
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode