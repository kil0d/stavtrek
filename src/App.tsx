import { useState } from 'react'
import './App.css'
import {AppBar} from "./AppBar/AppBar.tsx";
import {Sidebar} from "./SideBar/SideBar.tsx";
import {SearchBar} from "./SearchBar/SearchBar.tsx";
import {ModalDialog} from "./ModalDialog/ModalDialog.tsx";
import {DeviceList} from "./DeviceList.tsx";

function App() {
    const [searchValue, setSeacrhValue] = useState("");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
      <div className="App">
          <Sidebar/>
          <div className="content">
              <AppBar/>
              <SearchBar
                  searchValue={searchValue}
                  handleOpen={handleOpen}
                  setSearchValue={setSeacrhValue}
              />
              <div className="modal">
                  <ModalDialog handleClose={handleClose} open={open}/>
              </div>
              <DeviceList searchValue={searchValue}/>
          </div>
      </div>
  )
}

export default App
