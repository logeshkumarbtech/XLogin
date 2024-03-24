import { useState } from "react";

export default function Login() {
  const [obj, setObj] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(obj.username, obj.password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.username === "user" && obj.password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  const handleUsernameChange = (e) => {
    setObj({ ...obj, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setObj({ ...obj, password: e.target.value });
  };

  return (
    <div className="main">
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {obj.username}!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="username"
              value={obj["username"]}
              onChange={handleUsernameChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              placeholder="password"
              value={obj["password"]}
              onChange={handlePasswordChange}
              required
            ></input>
          </div>
          <button type="submit">Submit </button>
        </form>
      )}
    </div>
  );
}
