'use client'
import {FC} from 'react'
import { Todo } from '../../interfaces';
import { TaskItem } from '../taskItem';

import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import {StrictModeDroppable} from '../StrictModeDroppable';

interface Props {
    todos: Todo[];
    onDeleteTodo: (id: string) => void;
    UpdateTodo: (id: string, title: string, description: string) => void;
    CompleteTodo: (id: string) => void;
    OpenModal: (id: string) => void;
    OpenOptions: (id: string) => void;
    todosFilter: number;
    handleDragEnd: (id: string, sIndex: number, dIndex: number) => void;
}

export const Task: FC<Props> = ({ todos = [], onDeleteTodo, UpdateTodo, CompleteTodo, OpenModal, OpenOptions, todosFilter, handleDragEnd }) => {

  return (
    <DragDropContext
        onDragEnd={(result) => {
            const {source, destination} = result;
            if(!destination) return;
            if(source.index === destination.index && source.droppableId === destination.droppableId) return;

            handleDragEnd(result.draggableId, source.index, destination.index);
        }}
    >
        <div className='task'>
            <StrictModeDroppable droppableId='tasks'>
                {(droppableProvider) => (
                    <div 
                        {...droppableProvider.droppableProps}
                        ref={droppableProvider.innerRef} 
                        className='task-container'
                    >
                        {
                            todosFilter === 0 &&
                            todos?.map(({id, title, description, done, modal, options, date}, index) => (
                                <Draggable 
                                    key={id}
                                    draggableId={id}
                                    index={index}
                                >
                                    {
                                        (draggableProvider) => (
                                            <div 
                                                {...draggableProvider.draggableProps}
                                                ref={draggableProvider.innerRef}
                                                {...draggableProvider.dragHandleProps}
                                                className={ 
                                                    done 
                                                    ? 'task-done task-item' 
                                                    : 'task-item'
                                                }
                                            >
                                                <TaskItem  
                                                    id={id} 
                                                    title={title} 
                                                    description={description} 
                                                    done={done} 
                                                    modal={modal} 
                                                    options={options} 
                                                    date={date}
                                                    CompleteTodo={CompleteTodo} 
                                                    onDeleteTodo={onDeleteTodo}
                                                    UpdateTodo={UpdateTodo}
                                                    OpenModal={OpenModal}
                                                    OpenOptions={OpenOptions}
                                                />
                                            </div>
                                        )
                                    }
                                </Draggable>
                            ))
                        }

                        {
                            todosFilter === 1 &&
                            todos.filter(todo => todo.done)
                            .map(({id, title, description, done, modal, options, date}, index) => (
                                <Draggable 
                                    key={id}
                                    draggableId={id}
                                    index={index}
                                >
                                    {
                                        (draggableProvider) => (
                                            <div 
                                                {...draggableProvider.draggableProps}
                                                ref={draggableProvider.innerRef}
                                                {...draggableProvider.dragHandleProps}
                                                className={ 
                                                    done 
                                                    ? 'task-done task-item' 
                                                    : 'task-item'
                                                }
                                            >
                                                <TaskItem  
                                                    id={id} 
                                                    title={title} 
                                                    description={description} 
                                                    done={done} 
                                                    modal={modal} 
                                                    options={options} 
                                                    date={date}
                                                    CompleteTodo={CompleteTodo} 
                                                    onDeleteTodo={onDeleteTodo}
                                                    UpdateTodo={UpdateTodo}
                                                    OpenModal={OpenModal}
                                                    OpenOptions={OpenOptions}
                                                />
                                            </div>
                                        )
                                    }
                                </Draggable>
                            ))
                        }

                        {
                            todosFilter === 2 &&
                            todos.filter(todo => !todo.done)
                            .map(({id, title, description, done, modal, options, date}, index) => (
                                <Draggable 
                                    key={id}
                                    draggableId={id}
                                    index={index}
                                >
                                    {
                                        (draggableProvider) => (
                                            <div 
                                                {...draggableProvider.draggableProps}
                                                ref={draggableProvider.innerRef}
                                                {...draggableProvider.dragHandleProps}
                                                className={ 
                                                    done 
                                                    ? 'task-done task-item' 
                                                    : 'task-item'
                                                }
                                            >
                                                <TaskItem  
                                                    id={id} 
                                                    title={title} 
                                                    description={description} 
                                                    done={done} 
                                                    modal={modal} 
                                                    options={options} 
                                                    date={date}
                                                    CompleteTodo={CompleteTodo} 
                                                    onDeleteTodo={onDeleteTodo}
                                                    UpdateTodo={UpdateTodo}
                                                    OpenModal={OpenModal}
                                                    OpenOptions={OpenOptions}
                                                />
                                            </div>
                                        )
                                    }
                                </Draggable>
                            ))
                        }
                        {droppableProvider.placeholder}
                    </div>
                )}
            </StrictModeDroppable>
        </div>
    </DragDropContext>
  )
}
