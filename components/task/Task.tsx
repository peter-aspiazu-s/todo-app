'use client'
import {FC} from 'react'
import { EditTask } from '../editTask';
import { Todo } from '../../interfaces';

interface Props {
    todos: Todo[];
    onDeleteTodo: (id: string) => void;
    UpdateTodo: (id: string, task: string) => void;
    CompleteTodo: (id: string) => void;
    OpenModal: (id: string) => void;
    todosFilter: number;
}

export const Task: FC<Props> = ({ todos = [], onDeleteTodo, UpdateTodo, CompleteTodo, OpenModal, todosFilter }) => {

    console.log(todos.map(t => t.date))

  return (
    <div className='task'>
        <div className='task-container'>
            {
                todosFilter === 0 &&
                todos?.map(({id, task, done, modal, date}) => (
                    <div 
                        className={ 
                            done 
                            ? 'task-done task-item animate__animated animate__fadeIn' 
                            : 'task-item animate__animated animate__fadeIn'
                        } key={id}>
                        
                        <input 
                            className='task-input-done'
                            type="checkbox"
                            checked={done}
                            onClick={() => CompleteTodo(id)}
                        ></input>

                        <div className='task-item-description'>
                            <div className='task-item-text'>
                                {task}
                            </div>
                            <div className='task-item-date'>Creación: {`${date}`}</div>
                        </div>

                        <div className='task-container-button'>

                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="48" 
                                viewBox="0 96 960 960" 
                                width="48"
                                fill='#0075ff'
                                onClick={() => OpenModal(id)}
                            >
                                    <path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/>
                            </svg>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="48" 
                                viewBox="0 96 960 960" 
                                width="48"
                                fill='#94030b'
                                onClick={() => onDeleteTodo(id)}
                            >
                                    <path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/>
                            </svg>
                        </div>

                        <EditTask 
                            id={id} 
                            todo={task} 
                            date={date} 
                            modal={modal} 
                            OpenModal={OpenModal} 
                            UpdateTodo={UpdateTodo} 
                        />
                    </div>
                ))
            }

            {
                todosFilter === 1 &&
                todos.filter(todo => todo.done)
                .map(({id, task, done, modal, date}) => (
                    <div 
                        className={ 
                            done 
                            ? 'task-done task-item animate__animated animate__fadeIn' 
                            : 'task-item animate__animated animate__fadeIn'
                        } key={id}>
                        
                        <input 
                            className='task-input-done'
                            type="checkbox"
                            checked={done}
                            onClick={() => CompleteTodo(id)}
                        ></input>

                        <div className='task-item-description'>
                            <div className='task-item-text'>
                                {task}
                            </div>
                            <div className='task-item-date'>Creación: {`${date}`}</div>
                        </div>

                        <div className='task-container-button'>

                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="48" 
                                viewBox="0 96 960 960" 
                                width="48"
                                fill='#0075ff'
                                onClick={() => OpenModal(id)}
                            >
                                    <path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/>
                            </svg>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="48" 
                                viewBox="0 96 960 960" 
                                width="48"
                                fill='#94030b'
                                onClick={() => onDeleteTodo(id)}
                            >
                                    <path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/>
                            </svg>
                        </div>

                        <EditTask 
                            id={id} 
                            todo={task} 
                            date={date} 
                            modal={modal} 
                            OpenModal={OpenModal} 
                            UpdateTodo={UpdateTodo} 
                        />
                    </div>
                ))
            }

            {
                todosFilter === 2 &&
                todos.filter(todo => !todo.done)
                .map(({id, task, done, modal, date}) => (
                    <div 
                        className={ 
                            done 
                            ? 'task-done task-item animate__animated animate__fadeIn' 
                            : 'task-item animate__animated animate__fadeIn'
                        } key={id}>
                        
                        <input 
                            className='task-input-done'
                            type="checkbox"
                            checked={done}
                            onClick={() => CompleteTodo(id)}
                        ></input>

                        <div className='task-item-description'>
                            <div className='task-item-text'>
                                {task}
                            </div>
                            <div className='task-item-date'>Creación: {`${date}`}</div>
                        </div>

                        <div className='task-container-button'>

                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="48" 
                                viewBox="0 96 960 960" 
                                width="48"
                                fill='#0075ff'
                                onClick={() => OpenModal(id)}
                            >
                                    <path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/>
                            </svg>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="48" 
                                viewBox="0 96 960 960" 
                                width="48"
                                fill='#94030b'
                                onClick={() => onDeleteTodo(id)}
                            >
                                    <path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/>
                            </svg>
                        </div>

                        <EditTask 
                            id={id} 
                            todo={task} 
                            date={date} 
                            modal={modal} 
                            OpenModal={OpenModal} 
                            UpdateTodo={UpdateTodo} 
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
