import { fazPedido } from './src/Utils/res';
import { useState } from "react";

export default function Login() {

  const [authValues, setAuthValues] = useState({ email: "", password: "" })

  const handleAuthenticate = async () => {
    setError("")
    const res = await fazPedido("/api/login/", "POST", authValues)
    setAuthValues(res.body)
    console.log(res)
    localStorage.setItem("token", res.body.token)

    if (res.status === 400) {
      setError(res.body.errors)
    }
    setMensagem(res.body.message)

  }

  return (
    <div
      className="loginUser"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1> Login</h1>
      <form>
        <div className="userId">
          Username:
          <br />
          <input
            value={authValues.email}
            onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, email: e.target.value }))}
            id="username"
            name="username"
            placeholder="usrename" />
          <br />
          Password:
          <br />
          <input
            value={authValues.password}
            onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))}
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <br />
          <button type="submit" onClick={() => handleAuthenticate()} > Login </button>
        </div>
      </form>
    </div>
  );
}
