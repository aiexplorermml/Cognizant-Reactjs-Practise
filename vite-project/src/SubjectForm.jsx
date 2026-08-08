import React, { useState } from "react";

const Marks = () => {

  const [marks, setMarks] = useState({
    sub1: "",
    sub2: "",
    sub3: "",
    sub4: "",
    sub5: ""
  });

  const handleChange = (e) => {
    setMarks({
      ...marks,
      [e.target.name]: e.target.value
    });
  };

  const total =
    Number(marks.sub1) +
    Number(marks.sub2) +
    Number(marks.sub3) +
    Number(marks.sub4) +
    Number(marks.sub5);

  const average = total / 5;

  return (
    <div>

      <h2>Enter Marks</h2>

      <input name="sub1" value={marks.sub1} onChange={handleChange} placeholder="Subject 1" />
      <br />

      <input name="sub2" value={marks.sub2} onChange={handleChange} placeholder="Subject 2" />
      <br />

      <input name="sub3" value={marks.sub3} onChange={handleChange} placeholder="Subject 3" />
      <br />

      <input name="sub4" value={marks.sub4} onChange={handleChange} placeholder="Subject 4" />
      <br />

      <input name="sub5" value={marks.sub5} onChange={handleChange} placeholder="Subject 5" />

      <h3>Total: {total}</h3>
      <h3>Average: {average}</h3>

    </div>
  );
};

export default Marks;