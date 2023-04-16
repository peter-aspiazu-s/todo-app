import {FC} from 'react';
import { EditTask } from '../editTask';

interface Props {
    id: string;
    title: string;
    description: string;
    done: boolean;
    modal: boolean;
    options: boolean;
    date: string;
    CompleteTodo: (id: string) => void;
    onDeleteTodo: (id: string) => void;
    UpdateTodo: (id: string, title: string, description: string) => void;
    OpenModal: (id: string) => void;
    OpenOptions: (id: string) => void;
}

export const TaskItem: FC<Props> = ({
    id,
    title,
    description,
    done,
    modal,
    options,
    date,
    CompleteTodo,
    onDeleteTodo,
    UpdateTodo,
    OpenModal,
    OpenOptions,
}) => {

    const handleClickOptionsEdit = (id: string) => {
        OpenModal(id)
        OpenOptions(id)
    }

    const handleChangedCheckbox = () => {
        CompleteTodo(id)
    }

  return (
    <>
      <input 
            className='task-input-done'
            type="checkbox"
            checked={done}
            onChange={handleChangedCheckbox}
        ></input>

        <div className='task-container-description'>
            <div className='task-item-text'>
                {title}
            </div>
            <div className='task-item-description'>
                {description}
            </div>
            <div className='task-item-date'>{date}</div>
        </div>

        <div className='task-container-button'>

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="48" 
                viewBox="0 96 960 960" 
                width="48"
                onClick={() => OpenOptions(id)}
            >
                    <path d="M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z"/>
            </svg>

            {
                options &&
                <>
                    <div className='task-container-options'>
                        <div onClick={() => handleClickOptionsEdit(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill='#0075ff'>
                                <path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/>
                            </svg>
                            editar
                        </div>
                        <div onClick={() => onDeleteTodo(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill='#94030b'>
                                <path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/>
                            </svg>
                            eliminar
                        </div>
                    </div>
                </>
            }

        </div>

        <EditTask 
            id={id} 
            titleTask={title} 
            descriptionTask={description} 
            date={date} 
            modal={modal} 
            OpenModal={OpenModal} 
            UpdateTodo={UpdateTodo} 
        />
    </>
  )
}
