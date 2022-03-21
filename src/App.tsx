import { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './Components/model';
import TodoList from './Components/TodoList';

const App: React.FC = () => {
  const [ todo, setTodo ] = useState<string>( "" );
  console.log(todo)
  const [ todos, setTodos ] = useState<Todo[]>( [] );
  
  const handleAdd = ( e:React.FormEvent ) => {
    e.preventDefault();

    if ( todo )
    {
      setTodos( [ ...todos, { id: Date.now(), todo: todo, IsDone: false } ] )
      setTodo( "" );
    }
    
  }
      console.log(todos)

  
  
  return (
    <div className="App">
      <span className="heading">Taskify</span>   
      <InputField todo={ todo } setTodo={ setTodo } handleAdd={ handleAdd } />   
      {/* { { todos.map( t => <li>{t.todo}</li>)}  } */}
      <TodoList todos ={ todos } setTodos={ setTodos } />
      {/* <SingleTodo/> */}
    </div>
  );
}

export default App;
