import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {text: 'Have Fun', completed: true},
    {text: 'Learn React', completed: false},
    {text: 'Learn the MERN Stack', completed: false}
  ]);

  const [showTodos, setShowTodos] = useState(true);
  const newThing = 'something'

  function addTodo(todo) {
    setTodos([...todos, todo]);
    console.log(todos);
  }

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>
      {showTodos && <ToDoList todos={todos} setTodos={setTodos} />}
      <hr />
      <NewToDoForm addTodo={addTodo} newThing={newThing} />
    </div>
  );
}

export default App;
