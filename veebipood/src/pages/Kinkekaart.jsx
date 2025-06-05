import { useState } from "react";
import KinkekaardiEmail from "../components/KinkekaardiEmail";

function Kinkekaart() {
  // Reacti HOOK
  const [summa, setSumma] = useState(20); // --> need, mis lähevad HTMLi ja muutuvad seal
  // let kasutaja = {nimi: "", vanus: 12};
  // let summa2 = 20;
  const [kogus, setKogus] = useState(1);

  return (
    <div>
      {/* <div>{console.log(summa2)}</div> */}
      <button className={summa === 20 ? "summa-aktiivne" : undefined} onClick={() => setSumma(20)}>20€</button>
      <button className={summa === 50 ? "summa-aktiivne" : undefined} onClick={() => setSumma(50)}>50€</button>
      <button className={summa === 100 ? "summa-aktiivne" : undefined} onClick={() => setSumma(100)}>100€</button>

      {/* <br /><br />
      <button onClick={() => {summa2 = 20; console.log(summa2)}}>20€</button>
      <button onClick={() => {summa2 = 50; console.log(summa2)}}>50€</button>
      <button onClick={() => {summa2 = 100; console.log(summa2)}}>100€</button> */}

      <div>Kinkekaart {summa} €</div>

      <br /><br />

      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br /><br />

      <div>{kogus * summa} €</div>

      <br /><br />

      <KinkekaardiEmail />
    </div>
  )
}

export default Kinkekaart