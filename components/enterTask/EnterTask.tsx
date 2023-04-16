import {FC, FormEvent, useEffect, useReducer} from 'react';
import { useForm } from '../../hooks';
import { Task } from '../task';
import { v4 as uuidv4 } from 'uuid';
import { getTimeElapsedString, todoReducer } from '../../helpers';


const initialState: [] = [];

const init = () => {
  return (JSON.parse(localStorage.getItem('todos')!) || [])
}

interface Props {
  todosFilter: number;
  setNumberTask: (numberTask: number) => void;
}

const EnterTask: FC<Props> = ({ todosFilter, setNumberTask }) => {

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));

    setNumberTask(todos.length)
  }, [todos])
  

  const { formState } = useForm({ 
    title: '',
    description: ''
  });

  const { title, description } = formState;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      description,
      done: false,
      modal: false,
      options: false,
      date: getTimeElapsedString(new Date())
    }

    const action = {
      type: '[TODO] - Add Todo',
      payload: newTodo
    }

    dispatchTodo(action);
  }

  const onDeleteTodo = (id: string) => {

    const action = {
      type: '[TODO] - Delete Todo',
      payload: id
    }

    dispatchTodo(action);
  }

  const UpdateTodo = (id: string, title: string, description: string) => {

    // if( title.length <= 1 ) return;
    // if( description.length <= 1 ) return;

    const action = {
      type: '[TODO] - Update Todo',
      payload: {
        id,
        title,
        description
      }
    };

    dispatchTodo(action);

  }


  const CompleteTodo = (id: string) => {
    const action = {
      type: '[TODO] - Complete Todo',
      payload: id
    }

    dispatchTodo(action);
  }
  
  const OpenModal = (id: string) => {

    const action = {
      type: '[TODO] - Open Modal',
      payload: id
      };

    dispatchTodo(action);
  }
  
  const OpenOptions = (id: string) => {

    const action = {
      type: '[TODO] - Open Options',
      payload: id
      };

    dispatchTodo(action);
  }

  const handleDragEnd = (id: string, sIndex: number, dIndex: number) => {
    const action = {
      type: '[TODO] - MOVE_ITEM',
      payload: {
        itemId: id,
        oldIndex: sIndex,
        newIndex: dIndex
      }
    }

    dispatchTodo(action);
  }

  return (
    <div>
      <div className='enter-task'>
          <form className='enter-task-form' onSubmit={handleSubmit}>

              <button 
                type='submit'
                className='enter-task-button'
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 976q-85 0-158-30.5T195 861q-54-54-84.5-127T80 576q0-84 30.5-157T195 292q54-54 127-85t158-31q75 0 140 24t117 66l-43 43q-44-35-98-54t-116-19q-145 0-242.5 97.5T140 576q0 145 97.5 242.5T480 916q37 0 71.5-7t66.5-21l45 46q-41 20-87 31t-96 11Zm290-90V766H650v-60h120V586h60v120h120v60H830v120h-60ZM421 758 256 592l45-45 120 120 414-414 46 45-460 460Z"/></svg>
                Agregar una nueva tarea
              </button>
          </form>
      </div>

      <Task 
        todos={todos} 
        onDeleteTodo={onDeleteTodo} 
        UpdateTodo={UpdateTodo} 
        CompleteTodo={CompleteTodo} 
        OpenModal={OpenModal}
        OpenOptions={OpenOptions}
        todosFilter={todosFilter}
        handleDragEnd={handleDragEnd}
      />
    </div>
  )
}


export default EnterTask;