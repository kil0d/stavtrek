import { NavLink } from "react-router-dom";
import { Sidebar } from "../SideBar/SideBar";
import { AppBar } from "../AppBar/AppBar";
import  "./NotFound.css";
export const NotFound = () => {
    return (
        <div className="notFound">
            <Sidebar />
            <div className="notFound-child">
                <AppBar />
                <div className="getBack">
                    <NavLink to={"/"}>Такой страницы нет. Вернуться обратно</NavLink>
                </div>
            </div>
        </div>
    );
};