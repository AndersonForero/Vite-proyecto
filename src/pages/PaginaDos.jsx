import { Link, Outlet } from "react-router-dom";

export const PaginaSecundaria = () => {
    return (
        <div className="pagina-dos">
            <h1>
                Pagina secundaria
            </h1>
            <ul>
                <li><Link to="item-one">itemOne</Link></li>
                <li><Link to="item-two">itemTwo</Link></li>
                <li><Link to="item-three">itemThree</Link></li>
                <li><Link to="item-four">itemFour</Link></li>
            </ul>
            <Outlet />
        </div>
    ) 
};