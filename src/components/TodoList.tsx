import React from 'react'
import './styles.css';
import { Todo } from '../modal';
import TodoCard from './TodoCard';
 
interface Props{
    todos:Todo[];
    todo:string;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {todos.map((todo)=>(
            <TodoCard todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))}
    </div>
  )
}

export default TodoList