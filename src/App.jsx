import { Formulario } from "./components/Formulario";
import { MostrarLista } from "./components/ListaTareas";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout"
import { PaginaSecundaria } from "./pages/PaginaDos";
import { Details } from "./pages/PaginaDosDetails";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<><Formulario /><MostrarLista /></>} />
          <Route path="*" element={<><Formulario /><MostrarLista /></>} />
          <Route path="pagina-dos" element={<PaginaSecundaria />}>
            <Route path=":item" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
