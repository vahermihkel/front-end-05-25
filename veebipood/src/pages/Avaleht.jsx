import { useState } from "react";
import laigitud from "../assets/laigitud.svg";
import mittelaigitud from "../assets/mittelaigitud.svg";

// lilla --> käsklused: import, from, export, if, else, return
// helesinine --> imporditud väärtus, sissekirjutatud väärtus: console. , useState impordis,
//                             localStorage. , .current.value  , src, alt, className, disabled
// tavaline sinine -->   meie tehtud muutujad
// tumesinine --> liigitus: function, const, let, button, img, input, div
// tumesinine --> ette antud väärtus. true.false.undefined.null
// heleroheline --> numbriline väärtus
// oranž --> sõnaline väärtus. string
// valge --> märgid    =   ;   ,   ===   &&   . HTMLs väljakuvatav tekst
// roheline suure tähega HTMLs --> sisseimporditud HTML  Route, Routes, Link
// tumeroheline --> kommentaar
{{{{((((((([[[[[]]]]])))))))}}}}
// sulgude osas värvide tähendust pole, aga sama värv avab ja suleb sulu
// kollane --> funktsioon, kui kasutusele, siis on sulud lõpus, aga useState sees mitte.

// renderdamine --> HTMLi väljakuvamine
// re-renderdamine --> HTMLi uuendamine useState-i setteri poolt

// let number = 1232142123   ---> 42?     number.toString()   --> number.includes("42")

function Avaleht() {
  const [kogus, setKogus] = useState(0); // number (ilma jutumärkideta). teeme arvutusi: * / < >
  const [sonum, setSonum] = useState("Muuda kogust!"); // kas sisaldab? kas algab? suurteks tähtedeks
  const [like, setLike] = useState(false); // kui on selgelt üks või teine. saab tagurpidi keerata

// number: hinnad, kogused, vanus, sünniaastad
// string: isikukood, telefoninumber, postiindeks
// boolean: täisealine, makstud, registreerunud, sisselogitud, kustutatud, aktiivne

  function nulli() {
    setKogus(0);
    setSonum("Nullisid koguse!");
  }

  function vahenda() {
    setKogus(kogus - 1);
    setSonum("Vähendasid kogust!");
  }

  function suurenda() {
    setKogus(kogus + 1);
    setSonum("Suurendasid kogust!");
  }
  
  return (
    <div>
      {like === true && <img onClick={() => setLike(false)} src={laigitud} alt="" />}
      {like === false && <img onClick={() => setLike(true)} src={mittelaigitud} alt="" />}

      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>} <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht