import "./SearchBar.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import FilterListIcon from "@mui/icons-material/FilterList";

interface SearchBarProps {
    searchValue: string,
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = ({searchValue,handleOpen,setSearchValue}:SearchBarProps) => {
    return (
        <div className="searchBar">
            <div className="searchBarLeft">
                <div className="searchField">
                    <Paper
                        component="form"
                        sx={{
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                            width: 300,
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Поиск"
                            inputProps={{ "aria-label": "Поиск" }}
                            value={searchValue}
                            onChange={(event) => {
                                setSearchValue(event.target.value);
                            }}
                        />

                        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <button className="button objbutton">
                    Объекты
                </button>
                <button
                    className="button groupbutton"
                    id={"button groupbutton"}
                    variant="outlined"
                >
                    Группы
                </button>
                <div className="icons">
                    <CalendarViewWeekIcon />
                    <FilterListIcon />
                    <DownloadIcon />
                </div>
            </div>
            <div className="searchBarRight">
                <select
                    onChange={(event) => {
                        if (event.target.value === "Добавить данные") {
                            event.target.value = "Действия";
                            handleOpen();
                        }
                    }}
                    className="buttonAction"
                >
                    <option value="Действия">Действия</option>
                    <option value="Добавить данные">Добавить данные</option>
                </select>
            </div>
        </div>
    );
};