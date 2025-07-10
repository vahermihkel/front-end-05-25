import { useRef, useState } from "react"

function LaenuKalkulaator() {
  const [kuumakse, setKuumakse] = useState(348.73);
  const [korgendatudKuumakse, setKorgendatudKuumakse] = useState(498.98);
  const [intress, setIntress] = useState(3.85);
  const [protsent, setProtsent] = useState(0);
  const [laenusumma, setLaenusumma] = useState(75000);
  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const perioodRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();

  // kui on mingi muu tehe peale liitmise, siis proovitakse konverteerida .current.value numbriks

  const arvutaKuumakse = () => {

    setProtsent(sissemakseRef.current.value / ostuhindRef.current.value * 100);

    setLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value);

    setIntress(Number(marginaalRef.current.value) + Number(euriborRef.current.value));

    setKuumakse((ostuhindRef.current.value - sissemakseRef.current.value) / 12 / perioodRef.current.value * 
              (Number(marginaalRef.current.value) + Number(euriborRef.current.value)) / 2.3 );

    setKorgendatudKuumakse((ostuhindRef.current.value - sissemakseRef.current.value) 
              / 12 / perioodRef.current.value * 7 / 2.3);
  }

  return (
    <div>
      <label>Ostuhind</label>
      <input ref={ostuhindRef} defaultValue={75000} onChange={arvutaKuumakse} type="number" /> <br />
      <label>Sissemakse</label>
      <input ref={sissemakseRef} defaultValue={0} onChange={arvutaKuumakse} type="number" /> <br />
      <label>Protsent</label>
      <input disabled value={protsent.toFixed(2)} type="number" /> <br />
      <label>Laenusumma</label>
      <input disabled value={laenusumma} type="number" /> <br />
      <label>Periood</label>
      {/* <input  type="number" /> <br /> */}
      <select ref={perioodRef} defaultValue={30} onChange={arvutaKuumakse}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
      </select> <br />
      <label>Marginaal</label>
      <input ref={marginaalRef} defaultValue={1.7} onChange={arvutaKuumakse} type="number" /> <br />
      <label>Euribor</label>
      <input ref={euriborRef} defaultValue={2.15} onChange={arvutaKuumakse} type="number" /> <br />
      <label>Intress kokku</label>
      <input disabled value={intress.toFixed(2)} type="number" /> <br />
      <div>Kuumakse {kuumakse.toFixed(2)} €</div>
      <div>Juhul kui laenu intress peaks tõusma 7%-ni, on laenumakse {korgendatudKuumakse.toFixed(2)} €</div>
    </div>
  )
}

export default LaenuKalkulaator