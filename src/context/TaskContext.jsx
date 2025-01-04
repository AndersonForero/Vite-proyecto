import { useState, useEffect, createContext } from "react";
import { lista as listaJS } from "../data/lista";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [listaState, setListaState] = useState([]);

    useEffect(() => {
        setListaState(listaJS);
    }, []);

    const agregarTarea = (nuevaTarea) => {
        setListaState([
        ...listaState,
        {
            id: listaState.length,
            titulo: nuevaTarea.tarea,
            descripcion: nuevaTarea.descripcion,
        },
        ]);
    };

    const eliminarTarea = (itemID) => {
        setListaState(listaState.filter((tarea) => tarea.id !== itemID));
    };

    return (
        <TaskContext.Provider value={{
            listaState,
            agregarTarea,
            eliminarTarea
        }}>
            {props.children}
        </TaskContext.Provider>
    );
};