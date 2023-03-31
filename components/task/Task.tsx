import {FC, useState} from 'react'
import { EditTask } from '../editTask';
import { Todo } from '../../interfaces';

interface Props {
    todos: Todo[];
    onDeleteTodo: (id: string) => void;
    UpdateTodo: (id: string, task: string) => void;
    CompleteTodo: (id: string) => void;
    OpenModal: (id: string) => void;
}

export const Task: FC<Props> = ({ todos = [], onDeleteTodo, UpdateTodo, CompleteTodo, OpenModal }) => {

    console.log('task', typeof window)

  return (
    <div className='task'>
        <div className='task-container'>
            {
                todos.map(({id, task, done, modal, date}) => (
                    <div className={ done ? 'task-done task-item' : 'task-undone task-item'} key={id}>
                        <div className='task-item-description'>
                            <div className='task-item-text'>
                                {task}
                            </div>
                            {/* <div className='task-item-date'>Creación: {date}</div> */}
                        </div>
                        <div className='task-container-button'>
                            <button 
                                className={
                                    done 
                                    ? 'task-item-complete-true task-item-complete' 
                                    : 'task-item-complete-false task-item-complete'
                                }
                                onClick={() => CompleteTodo(id)}
                            >{done ? 'Imcompleta' : 'Completada'}</button>
                            <button className='task-item-edit' onClick={() => OpenModal(id)}>editar</button>
                            <button 
                                className='task-item-delete' 
                                onClick={() => onDeleteTodo(id)} 
                            >eliminar</button>
                        </div>

                        <EditTask id={id} todo={task} date={date} modal={modal} OpenModal={OpenModal} UpdateTodo={UpdateTodo} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
