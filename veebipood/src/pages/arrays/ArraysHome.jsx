import { Link } from "react-router-dom"

function ArraysHome() {
  return (
    <div>
      <Link to="/autod">
        <button>Autod</button>
      </Link>

      <Link to="/esindused">
        <button>Esindused</button>
      </Link>

      <Link to="/hinnad">
        <button>Hinnad</button>
      </Link>

      <Link to="/kasutajad">
        <button>Kasutajad</button>
      </Link>

      <Link to="/tootajad">
        <button>Tootajad</button>
      </Link>

      <Link to="/tooted">
        <button>Tooted</button>
      </Link>
    </div>
  )
}

export default ArraysHome