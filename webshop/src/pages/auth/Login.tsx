import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function Login() {
  const {setLoggedIn} = useContext(AuthContext);

  const login = () => {
    setLoggedIn(true);
    sessionStorage.setItem("token", "123");
  }

  return (
    <div>
      <label>Username</label> <br />
      <input type="text" /> <br />
      <label>Password</label> <br />
      <input type="password" /> <br />
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default Login