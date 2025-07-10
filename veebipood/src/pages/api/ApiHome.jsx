import { Link } from "react-router-dom"

function ApiHome() {
  return (
    <div>
      <Link to="/api-autod">
        <button>Autod</button>
      </Link>

      <Link to="/riigid">
        <button>Riigid</button>
      </Link>

      <Link to="/sonastik">
        <button>Sõnastik</button>
      </Link>

      <Link to="/tarnija1">
        <button>Tarnija 1</button>
      </Link>

      <Link to="/tarnija2">
        <button>Tarnija 2</button>
      </Link>

       <Link to="/tarnija3">
        <button>Tarnija 3</button>
      </Link>
    </div>
  )
}

export default ApiHome