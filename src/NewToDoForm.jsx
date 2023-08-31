import { useState } from "react";
const NewToDoForm = ({ addTodo, newThing }) => {
    console.log(newThing)
  const [newTodo, setNewTodo] = useState({
    text: "",
    completed: false
  });
  function handleChange(evt) {
    const newFormData = { ...newTodo, [evt.target.name]: evt.target.value };
    setNewTodo(newFormData);
  }
  function handleAddTodo(evt) {
    evt.preventDefault();
    addTodo(newTodo);
    setNewTodo({ text: "", completed: false });
  }

  return (
    <>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddTodo}>
        <input
          name="text"
          value={newTodo.text}
          onChange={handleChange}
          placeholder="New To-Do"
          required
          pattern=".{4,}"
        />
        <button type="submit">Add To-Do</button>
      </form>
    </>
  );
}

export default NewToDoForm;