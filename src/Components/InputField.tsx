import React ,{useRef} from 'react'
import './style.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;

    handleAdd: (e:React.FormEvent) => void;

}

const InputField = ( { todo, setTodo,handleAdd }: Props
) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
      <form className='input' onSubmit={ ( e ) => {
          handleAdd( e );
          inputRef.current?.blur();
      } }>
          <input type="input"
              ref={inputRef}
              value={ todo }
              onChange={
                  (e)=>setTodo(e.target.value)
              }
              placeholder='Enter A Task' className='input___box' />
          <button type='submit'  className='input__submit'>Go</button>

    </form>
  )
}

export default InputField;