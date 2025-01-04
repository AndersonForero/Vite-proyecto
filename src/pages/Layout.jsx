import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pagina-dos">Pagina secundaria</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};