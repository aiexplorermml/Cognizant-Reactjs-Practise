import { useEffect, useRef, useState } from "react";

function Ref() {
  const inputRef = useRef(null);
  const [login,setLogin]=useState(false)

  useEffect(() => {
    inputRef.current.focus();
    setLogin("")
  }, []);

  return (
    <div>
      <h2>Login</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter username"
      />

      <br /><br />

      <input
      
        type="password"
        placeholder="Enter password"
      />

      <br /><br />

      <button onClick={()=>setLogin(!login)}>{login?"Logout":"Login"}</button>
    </div>
  );
}

export default Ref;