import React, { useState } from "react";
const Content = () => {
  const [newTodo, setNewTodo] = useState("");
  const [items, setItems] = useState([]);

  const addToDo = () => {
    if (!newTodo) {
      alert("Add a todo, please");
      return;
    }

    const item = { id: Math.floor(Math.random() * 1000), value: newTodo };
    setItems((oldList) => [...oldList, item]);
    setNewTodo("");
  };

  function deleteTodo(id){
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <main className="content">
      <h3>Add your todo's</h3>
      <input
        type="text"
        placeholder="Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button className="add-btn" onClick={() => addToDo()}>
        Add ToDo
      </button>
      <ol className="ul-todo">
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value} <button onClick={() => deleteTodo(item.id)} className="delete">❌</button>
            </li>
          );
        })}
      </ol>
    </main>
  );
};

export default Content;
