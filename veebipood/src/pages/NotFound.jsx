import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
       <h1>404</h1>
       <h2>Page not found</h2>
       <Link to="/">
        <button>Back to home</button>
       </Link>
    </div>
  )
}

export default NotFound