import {FC, FormEvent, useEffect, useReducer} from 'react';
import { useForm } from '../../hooks';
import { Task } from '../task';
import { v4 as uuidv4 } from 'uuid';
import { todoReducer } from '../../helpers';
import moment from 'moment';
import 'moment/locale/es';


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
  

  const { formState, onInputChange, reset } = useForm(
    { task: ''}
  );

  const { task } = formState;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if( task.length <= 1 ) return;

    const newTodo = {
      id: uuidv4(),
      task,
      done: false,
      modal: false,
      // date: new Date().toLocaleDateString('es-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
      date: moment().calendar(),
    }

    const action = {
      type: '[TODO] - Add Todo',
      payload: newTodo
    }

    dispatchTodo(action);

    reset();
  }

  const onDeleteTodo = (id: string) => {

    const action = {
      type: '[TODO] - Delete Todo',
      payload: id
    }

    dispatchTodo(action);
  }

  const UpdateTodo = (id: string, task: string) => {

    if( task.length <= 1 ) return;

    const action = {
      type: '[TODO] - Update Todo',
      payload: {
        id,
        task
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

  return (
    <div>
      <div className='enter-task'>
          <form className='enter-task-form' onSubmit={handleSubmit}>
              <input 
                  className='enter-task-form-input-text' 
                  type="text" 
                  id='task' 
                  name='task'
                  value={task}
                  onChange={onInputChange} 
                  placeholder='Ingresa una tarea...'
              />
          </form>
      </div>

      <Task 
        todos={todos} 
        onDeleteTodo={onDeleteTodo} 
        UpdateTodo={UpdateTodo} 
        CompleteTodo={CompleteTodo} 
        OpenModal={OpenModal}
        todosFilter={todosFilter}
      />
    </div>
  )
}


export default EnterTask;