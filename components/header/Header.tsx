import {FC} from 'react';

interface Props {
    setTodosFilter: (todosFilter: number) => void;
    numberTask: number;
  }

export const Header: FC<Props> = ({ setTodosFilter, numberTask }) => {

    const handleOption = (e: any) => {

        if(e.target.value === 'Todas mis tareas'){
            setTodosFilter(0);
        }
        if(e.target.value === 'Mis tareas completadas'){
            setTodosFilter(1);
        }
        if(e.target.value === 'Mis tareas incompletas'){
            setTodosFilter(2);
        }
    }

  return (
    <div className='header'>

        <div>Task {`(${numberTask})`}</div>
        <select id="task" onChange={handleOption}>
            <option value="Todas mis tareas">Todas mis tareas</option>
            <option value="Mis tareas completadas">Tareas completadas</option>
            <option value="Mis tareas incompletas">Tareas incompletas</option>
        </select>

    </div>
  )
}
