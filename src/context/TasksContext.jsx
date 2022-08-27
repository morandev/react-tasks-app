import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TasksContext = createContext();

export const TaskContextProvider = (props) => {
     const [tasks, setTasks] = useState([]);

     const createTask = ({ title = "", description = "" }) => {
          const newTask = {
               id: tasks.length,
               title,
               description,
          };

          setTasks([...tasks, newTask]);
     };

     const deleteTask = (taskID) => {
          setTasks(tasks.filter((val) => val.id != taskID));
     };

     useEffect(() => {
          setTasks(data);
     }, []);

     return (
          <TasksContext.Provider
               value={{
                    tasks,
                    createTask,
                    deleteTask,
               }}
          >
               {props.children}
          </TasksContext.Provider>
     );
};
