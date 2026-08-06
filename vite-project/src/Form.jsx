import { useContext, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const SubmitData = (e) => {
    e.preventDefault();

    setName("")
    setEmail("")
    setPassword("")

  };

  return (
    <>
      <div>
        <h2>This is signup form</h2>
        <p>{land}</p>

        <form onSubmit={SubmitData}>
            <label htmlfor="">Name: </label>
          <input
            type="text"  value={name} onChange={(e) => setName(e.target.value)}
          />
<br></br>
            <label htmlfor="">Email: </label>

          <input
            type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}
          />
<br></br>
            <label htmlfor="">Password: </label>

          <input
            type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}
          />
          

          <button type="submit">Sign Up</button>
        </form>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
      </div>
    </>
  );
}

export default App;