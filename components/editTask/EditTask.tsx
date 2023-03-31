import { FC, FormEvent } from 'react';
import { useForm } from '../../hooks/useForm';

interface Props{
  id: string;
  todo: string; 
  date: Date;
  UpdateTodo: (id: string, task: string) => void;
  modal: boolean;
  OpenModal: (id: string) => void;
}

export const EditTask: FC<Props> = ({id, todo, date, modal, UpdateTodo, OpenModal}) => {

  const {formState, onInputChange} = useForm({
    task: todo
  });

  
  const {task}: any = formState;
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    UpdateTodo(id, task);
  }

  return (
    <>
      {
        (modal)
        &&
        <div className='edit-task'>
          <div className='edit-task-container'>
            <form className='edit-task-form' onSubmit={handleSubmit}>
              <textarea 
                className='edit-task-textarea' 
                rows={10} 
                name="task" 
                value={task} 
                onChange={(e) => onInputChange(e)}></textarea>
              <input className='edit-task-input-date' type="date" />
              <input className='edit-task-input-submit' type="submit" value="Cambiar" />
            </form>
          </div>

          <button onClick={() => OpenModal(id)} className='edit-task-close'>X</button>
        </div>
      }
    </>
  )
}
