import { Link } from "react-router-dom"

function Menu() {
  return (
    <div>
      <Link to="/">
        <img className="pilt" src="https://i0.wp.com/accelerista.com/wp-content/uploads/2018/06/nobe.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>Kinkekaardid</button>
      </Link>

      <Link to="/esindused">
        <button>Esindused</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>
    </div>
  )
}

export default Menu