import React, { useState } from "react";

const LocalStorage = () => {
  const [name, setname] = useState("");

  const saveData = () => {
    localStorage.setItem("username", name);
  };

  const getData = () => {
    const data = localStorage.getItem("username");
    console.log(data);
  };

  const removeData = () => {
    localStorage.removeItem("username");
    setname("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <button onClick={saveData}>Set</button>
      <button onClick={getData}>Get</button>
      <button onClick={removeData}>Remove</button>
    </div>
  );
};

export default LocalStorage;