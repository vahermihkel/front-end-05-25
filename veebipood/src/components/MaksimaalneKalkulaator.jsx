
function MaksimaalneKalkulaator() {
  return (
    <div>
      <label>Ülalpeetavate arv</label>
      <select>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <label>Netosissetulek</label>
      <input type="number" /> <br />
      <label>Igakuised kohustused</label>
      <input type="number" /> <br />
      <div>Maksimaalne pakutav limiit xx €</div>
    </div>
  )
}

export default MaksimaalneKalkulaator