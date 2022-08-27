import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext';
import TaskCard from "./TaskCard";


const TaskList = () => {
     const { tasks } = useContext(TasksContext);
      
     if (!tasks.length) {
          return <h1 className='text-white text-4xl text-center font-bold'>No hay tareas!</h1>;
     }

     return (
          <div className='grid grid-cols-4 gap-2'>
               {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
               ))}
          </div>
     );
};

export default TaskList;
