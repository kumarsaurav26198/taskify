import React from 'react'
import { Todo } from './model';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdFileDownloadDone, MdOutlineAutoDelete } from 'react-icons/md';
import './style.css';


type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({todo,todos,setTodos}:Props) => {
  return (
    <form className='single_todos'>
      <span className="todos_single_text">
        {todo.todo}
      </span>
      <div>
        <span className="icon">
              <AiTwotoneEdit/>
        </span>
        <span className="icon">
           <MdOutlineAutoDelete/>
        </span>
        <span className="icon">
            <MdFileDownloadDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo;