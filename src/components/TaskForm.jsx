import { useState, useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export const TaskForm = () => {
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");

     const { createTask } = useContext(TasksContext);

     const handleTitleChange = (e) => {
          const value = e.target.value.toLowerCase();
          setTitle(value);
     };

     const handleDescriptionChange = (e) => {
          const value = e.target.value.toLowerCase();
          setDescription(value);
     };

     const clearForm = () => {
          setTitle("");
          setDescription("");
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          createTask({ title, description });
          clearForm();
     };

     return (
          <div className="max-w-md mx-auto">
               <form
                    action=""
                    onSubmit={handleSubmit}
                    className="bg-slate-800 p-10 mb-4"
               >
                    <h1 className="text-2xl font-bold text-white mb-3">Agregar Tarea</h1>
                    <input
                         className="bg-slate-300 p-3 w-full mb-2"
                         minLength={1}
                         maxLength={100}
                         onChange={handleTitleChange}
                         placeholder="Titulo"
                         type="text"
                         value={title}
                         autoFocus
                         required
                    />
                    <textarea
                         className="bg-slate-300 p-3 w-full mb-2"
                         maxLength={255}
                         onChange={handleDescriptionChange}
                         placeholder="Descripcion"
                         value={description}
                    ></textarea>
                    <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
               </form>
          </div>
     );
};
