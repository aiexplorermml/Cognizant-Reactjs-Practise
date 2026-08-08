import React, { useState } from "react";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    setTodo([...todo, text]);
    setText("");
  };

  const handleDelete = (index) => {
    setTodo(todo.filter((value, i) => i !== index));
  };

  

  return (
    <div>
      <h2>ToDoList</h2>

      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleClick}>Add Todo</button>

      {todo.map((value, index) => {
        return (
          <div key={index}>
            <p>{value}</p>

            <button onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;