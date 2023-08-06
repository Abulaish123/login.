import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <form action="action_page.php">
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required=""
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required=""
          />

          <hr />
          
          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>
        <div className="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </>
  );
}

export default App;
