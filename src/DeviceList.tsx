import { Checkbox } from "@mui/material";
import axios from "axios";
// import style from "./DeviceList.module.css";
import { useEffect, useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const apiUrl = "https://gps.autotracker.group/api/devices";
interface PersonParameters {
    id: number,
    person:object,
    name: string,
    photo: string,
}



const token =
    "RzBFAiEA92qN8JvTQ6BIgvjSTke8iQltj3SJf9vhkqyf5zcuUL4CIF1GRd1vLuSJrzzDqv80AF_BAiF91tCWPMvlhuRNrI0DeyJ1IjozLCJlIjoiMjAyMy0xMi0zMVQyMTowMDowMC4wMDArMDA6MDAifQ";
export const DeviceList = (searchValue:string) => {
    const [appState, setAppState] = useState([]);
    const filtredAppState = appState.filter((spisok) => {
        const filterWord = Math.abs(spisok.id).toString();
        return filterWord.includes(searchValue);
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const menuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        axios
            .get(apiUrl, { headers: { Authorization: `Bearer  ${token}` } })
            .then((resp) => {
                const allPersons = resp.data;
                setAppState(allPersons);
            });
    }, []);
    const deleteElement = (currentId: number) => {
        axios
            .delete(apiUrl + `/${currentId}`, {
                headers: { Authorization: `Bearer  ${token}` },
            })
            .then(() => {
                const newAppState = filtredAppState.filter((id: never) => currentId !== id.id);
                setAppState(newAppState);
            })
            .catch((error) => {
                if (
                    error.response.status === 400 &&
                    error.response.data.includes("Write access denied")
                ) {
                    alert(
                        `У вас нет прав для удаления данных! Ошибка ${error.response.status}`
                    );
                }
            });
    };

    return (
        <table className="table">
            <thead>
            <tr>
                <th>
                    <Checkbox />
                </th>
                <th>№</th>
                <th>Иконка</th>
                <th>Фотография</th>
                <th>Имя</th>
                <th>Создатель</th>
                <th>Учетная запись</th>
                <th>Категория</th>
                <th>Тип объекта</th>
                <th className="ids">ID</th>
                <th data-title="" className="empty"></th>
            </tr>
            </thead>
            <tbody>
            {appState.map((person : PersonParameters) => {
                return (
                    <tr>
                        <td data-title="checkbox">
                            <Checkbox />
                        </td>
                        <td data-title="№">{person.id}</td>
                        <td data-title="Иконка">
                            <LocalShippingIcon />
                        </td>
                        <td data-title="Фотография">
                            {person.photo === undefined ? (
                                <AccountCircleIcon />
                            ) : (
                                person.photo
                            )}
                        </td>
                        <td data-title="Имя">{person.name}</td>
                        <td data-title="Создатель"></td>
                        <td data-title="Учетная запись"></td>
                        <td data-title="Категория">truck</td>
                        <td data-title="Тип объекта"></td>
                        <td data-title="ID" className="ids">
                            {person.id}
                        </td>
                        <td
                            data-title="Удаление"
                            className="movert empty"
                        >
                            <div onClick={menuOpen}>
                                <MoreVertIcon />
                            </div>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={menuClose}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                            >
                                <MenuItem
                                    onClick={() => {
                                        menuClose();
                                        deleteElement(person.id);
                                    }}
                                >
                                    Удалить
                                </MenuItem>
                            </Menu>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};