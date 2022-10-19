import styles from "./Registration.module.css";

export default function Register() {
  return (
    <div
      className="register"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1> Registration</h1>
      <form>
        <div className="registerName">
          Username:
          <br />
          <input id="username" name="username" placeholder="usrename" />
          <br />
          Email:
          <br />
          <input id="email" name="email" placeholder="Email" />
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
          Confirm Password:
          <br />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <br />
          <br />
          <button type="submit" onClick={() => alert("Account Registered")}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
