import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function KinkekaardiEmail() {
  const emailRef = useRef(); // inputiga ära sidumiseks
  const [sonum, setSonum] = useState(""); // HTMLi, mis on muutuvas seisundis

  const sisesta = () => { // onClick
    // if (emailRef.current.value.includes("@") === false) {
    //   setSonum("Ei saa lisada ilma @ märgita!");
    //   toast.error("Ei saa lisada ilma @ märgita!");
    //   return;
    // } 

    // regex101.com --> saan testida regexit
    // regex --> regular expression / regulaaravaldis - teksti kontrollimiseks
    // a-z --> väiksed tähed   A-Z --> suured tähed  0-9 --> numbrid
    // ._%+-   ---> need märgid on lubatud
    // []+ ---> neid võib panna lõputult
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailRef.current.value) === false) {
      setSonum("Email on valel kujul!");
      toast.error("Email on valel kujul!");
      return;
    } 

    setSonum("Email lisatud!");
    toast.success("Email lisatud!");
  }

  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="email">E-mail</label> <br />
      <input ref={emailRef} id="email" type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button>

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default KinkekaardiEmail