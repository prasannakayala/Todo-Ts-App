import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './modal';
import TodoList from './components/TodoList';

const App: React.FC=() =>{

  const [todo, setTodo]=useState<string>("");
  const [todos, setTodos]= useState<Todo[]>([])

  const handleAdd=(e:React.FormEvent)=> {
    e.preventDefault();
    if (todo){
      setTodos([...todos, {id: Date.now(), todo, isDone:false}])
      setTodo("")
    }
  }
console.log(todos)

  return (
    <div className="App">
      <span className="heading">Todo App</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos} todo={todo}/>
    
    </div>
  );
}

export default App;
