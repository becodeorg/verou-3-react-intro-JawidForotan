import React, { useState } from "react";
const Content = () => {
  const [newTodo, setNewTodo] = useState("");
  const [items, setItems] = useState([]);

  const addToDo = () => {
    if (!newTodo) {
      alert("Put a value");
      return;
    }

    const item = { value: newTodo };
    setItems((oldList) => [...oldList, item]);
    setNewTodo("");
  };

  return (
    <main className="content">
      <h3>Add todo</h3>
      <input
        type="text"
        placeholder="Add todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button onClick={() => addToDo()}>Add ToDo</button>
      <ol>
        {items.map((item) => {
          return <li>{item.value}</li>;
        })}
      </ol>
    </main>
  );
};

export default Content;
