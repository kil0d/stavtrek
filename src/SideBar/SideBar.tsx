import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import  "./SideBar.css";

import { NavLink } from "react-router-dom";
const setActive = ({ isActive }) => (isActive ? "isActive" : "");
export const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="nav">
                <NavLink className={setActive} to={"/menu"}>
                    <DensityMediumIcon />
                </NavLink>
                <NavLink className={setActive} to={"/location"}>
                    <ShareLocationIcon />
                </NavLink>
                <NavLink className={setActive} to={"/"}>
                    <ManageAccountsIcon />
                </NavLink>
            </nav>

            <div className="logout">
                <NavLink className={setActive} to={"/logout"}>
                    <LogoutIcon />
                </NavLink>
            </div>
        </div>
    );
};