
function LaenuKalkulaator() {
  return (
    <div>
      <label>Ostuhind</label>
      <input type="number" /> <br />
      <label>Sissemakse</label>
      <input type="number" /> <br />
      <label>Protsent</label>
      <input type="number" /> <br />
      <label>Laenusumma</label>
      <input type="number" /> <br />
      <label>Periood</label>
      <input type="number" /> <br />
      <label>Marginaal</label>
      <input type="number" /> <br />
      <label>Euribor</label>
      <input type="number" /> <br />
      <label>Intress kokku</label>
      <input type="number" /> <br />
      <div>Kuumakse xx €</div>
      <div>Juhul kui laenu intress peaks tõusma 7%-ni, on laenumakse xx €</div>
    </div>
  )
}

export default LaenuKalkulaator