'use client'
import { FC, FormEvent } from 'react';
import { useForm } from '../../hooks/useForm';

interface Props{
  id: string;
  titleTask: string; 
  descriptionTask: string; 
  date: Date;
  UpdateTodo: (id: string, title: string, description: string) => void;
  modal: boolean;
  OpenModal: (id: string) => void;
}

export const EditTask: FC<Props> = ({id, titleTask, descriptionTask, date, modal, UpdateTodo, OpenModal}) => {

  const {formState, onInputChange} = useForm({
    title: titleTask,
    description: descriptionTask
  });

  
  
  const {title, description} = formState;
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    UpdateTodo(id, title, description);
    OpenModal(id);
  }

  return (
    <div>
      {
        (modal)
        &&
        <div className='edit-task animate__animated animate__fadeIn animate__faster'>
          <div className='edit-task-container'>
            <form className='edit-task-form' onSubmit={handleSubmit}>
              <input
                className='edit-task-input' 
                type="text" 
                name='title'
                value={title}
                onChange={(e) => onInputChange(e)}  
              />
              <textarea 
                className='edit-task-textarea' 
                rows={5} 
                name="description" 
                value={description} 
                onChange={(e) => onInputChange(e)}></textarea>
              {/* <input className='edit-task-input-date' type="date" /> */}
              <input className='edit-task-input-submit' type="submit" value="Cambiar" />
            </form>
            <button onClick={() => OpenModal(id)} className='edit-task-close'>X</button>
          </div>

        </div>
      }
    </div>
  )
}
