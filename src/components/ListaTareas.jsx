import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Tarjeta } from "./TarjetaDeTarea";

export const MostrarLista = () => {
  const { listaState } = useContext(TaskContext);

  if (!listaState.length) {
    return <h1 className="sin-elementos">No hay elementos en la lista</h1>;
  }

  return (
    <section className="lista-de-tareas">
      {listaState.map((item) => {
        return <Tarjeta key={item.id} item={item} />;
      })}
    </section>
  );
};
