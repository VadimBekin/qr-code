import {Link} from "react-router-dom";
import styleNavigation from "./styleNavigation.module.css";

export const Navigation = () => {
    return (
        <nav className={styleNavigation.container}>
            <Link to='/generate'>Генерировать QR код</Link>
            <Link to='/scan'>Сканировать QR код</Link>
            <Link to='/generateHistory'>История генерирования</Link>
            <Link to='/scanHistory'>История сканирования</Link>
        </nav>
    )
}