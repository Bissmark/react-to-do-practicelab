import React, { useEffect } from "react";
import { useState } from "react";
import "./ToDoListItem.css"

export default function ToDoListItem({ todo, todos, setTodos, index }) {
    const [completed, setCompleted] = useState(true);

    // useEffect(() => {
    //     setTodos(todos.filter((todo) => !todo.completed))
    // })

    function handleToggleComplete() {
        setTodos(todos.filter((todo) => !todo.completed))
        //todos.filter((todo) => !todo.completed);
        todo.completed = !todo.completed;
    }

    return (
        <li
            className="ToDoListItem"
            style={{
                backgroundColor: index % 2 ? "lavender" : "plum"
            }}
        >
            <div className="flex-ctr-ctr">{index + 1}</div>
            <span style={{ textDecoration: todo.completed && 'line-through'}}>
                {todo.text}    
            </span>
            
            <button onClick={() => {
                handleToggleComplete()
                setCompleted(!completed)
                }}>
                {todo.completed ? "❌" : "✔️"} 
            </button>
        </li>
    )
}