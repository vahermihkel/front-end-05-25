import { Link } from "react-router-dom"

function HaldaHome() {
  return (
    <div>
      <Link to="/halda-autod">
        <button>Halda autosid</button>
      </Link>

      <Link to="/halda-esindused">
        <button>Halda esindusi</button>
      </Link>

      <Link to="/halda-hinnad">
        <button>Halda hindu</button>
      </Link>

      <Link to="/halda-kasutajad">
        <button>Halda kasutajaid</button>
      </Link>

      <Link to="/halda-tootajad">
        <button>Halda töötajaid</button>
      </Link>

      <Link to="/halda-tooted">
        <button>Halda tooteid</button>
      </Link>
    </div>
  )
}

export default HaldaHome