import {  NavLink } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PortraitIcon from "@mui/icons-material/Portrait";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./AppBar.css";
const setActive = ({ isActive }) => (isActive ? "isActive" : "");



export const AppBar = () => {
    return (
        <div className={"navigation"}>
            <nav className="links">
                <NavLink className={setActive} to="/records">
                    Учетные записи
                </NavLink>
                <NavLink className={setActive} to="/users">
                    Пользователи
                </NavLink>
                <NavLink className={setActive} to="/">
                    Объекты
                </NavLink>
                <NavLink className={setActive} to="/drivers">
                    Водители
                </NavLink>
                <NavLink className={setActive} to="/noftifications">
                    Уведомления
                </NavLink>
                <NavLink className={setActive} to="/objectsInDevelopment">
                    Задания в разработке
                </NavLink>
            </nav>

            <div className="user">
                <NotificationsNoneIcon />
                <div><PortraitIcon /></div>
                <div className="email">gogoleffc@yandex.ru</div>
                <KeyboardArrowDownIcon />
            </div>
        </div>
    );
};