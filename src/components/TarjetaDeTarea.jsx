import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const Tarjeta = ({ item }) => {
  const { eliminarTarea } = useContext(TaskContext);

  return (
    <div className="tarjeta">
      <h1>{item.titulo}</h1>
      <p>{item.descripcion}</p>
      <button onClick={() => eliminarTarea(item.id)}>Eliminar tarea</button>
    </div>
  );
};
