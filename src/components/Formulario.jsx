import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const Formulario = () => {
  const [tarea, setTarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { agregarTarea } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea({ tarea, descripcion });
    setTarea("");
    setDescripcion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Agregue una nueva tarea</h1>
      <input
        type="text"
        placeholder="Ingrese una tarea"
        onChange={(e) => setTarea(e.target.value)}
        value={tarea}
        autoFocus
      />
      <textarea
        placeholder="Agrega una descripcion"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
      ></textarea>
      <button>Agregar</button>
    </form>
  );
};
