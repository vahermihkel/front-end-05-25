import { useRef } from "react"
import { ToastContainer, toast } from 'react-toastify';

function LisaToode() {
  const nimiRef = useRef();

  // echmascript 6-7
  const lisa = () => {
    // VARIANT 1: if/else
    // if (nimiRef.current.value === "") {
    //   toast.error("Tühja nimetusega ei saa lisada!");
    // } else {
    //   toast.success("Toode lisatud: " + nimiRef.current.value);
    // }

    // VARIANT 2: ternary operator
    // nimiRef.current.value === "" ?
    //         toast.error("Tühja nimetusega ei saa lisada!") :
    //         toast.success("Toode lisatud: " + nimiRef.current.value);

    // VARIANT 3: if + return
    if (nimiRef.current.value === "") {
      toast.error("Tühja nimetusega ei saa lisada!");
      return; // see lõpetab funktsiooni
    } 

    if (nimiRef.current.value.length < 5) {
      toast.error("Toote nimi liiga lühike!");
      return; // see lõpetab funktsiooni
    }
    
    if (nimiRef.current.value.includes("hitler") || nimiRef.current.value.includes("{")) {
      toast.error("Sisaldab keelatud märke / mõisteid");
      return; // see lõpetab funktsiooni
    }

    toast.success("Toode lisatud: " + nimiRef.current.value);
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default LisaToode