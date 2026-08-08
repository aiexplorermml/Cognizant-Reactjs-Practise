import React, { useState } from "react";

const Department = () => {

  const [department, setDepartment] = useState("");

  return (
    <div>

      <h2>Select Department</h2>

      <button onClick={() => setDepartment("CSE")}>
        CSE
      </button>

      <button onClick={() => setDepartment("ECE")}>
        ECE
      </button>

      <button onClick={() => setDepartment("EEE")}>
        EEE
      </button>

      {department === "CSE" && (
        <p>Welcome to Computer Science Department</p>
      )}

      {department === "ECE" && (
        <p>Welcome to Electronics Department</p>
      )}

      {department === "EEE" && (
        <p>Welcome to Electrical Department</p>
      )}

    </div>
  );
};

export default Department;