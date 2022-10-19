

export default function Login() {

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
            id="username"
            name="username"
            placeholder="usrename" />
          <br />
          Password:
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <br />
          <button type="submit"  > Login </button>
        </div>
      </form>
    </div>
  );
}
