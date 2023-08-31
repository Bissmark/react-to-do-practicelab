import React from 'react';
import ToDoListItem from './ToDoListItem';

export default function ToDoList({ todos, setTodos }) {
    //setTodos(todos.filter((todo) => !todo.completed))
    return (
        <ul>
            {todos.filter((todo) => !todo.completed).map((todo, index) => (
                <ToDoListItem todo={todo} index={index} key={index} setTodos={setTodos} todos={todos}/>
            ))}
        </ul>
    );
}