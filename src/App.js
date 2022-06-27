import "./App.css";
import Main from "./components/Main";
import { NavBar } from "./components/NavBar";
import React from "react";
import { Services } from "./components/Services";
import { MiniNavbar } from "./components/MiniNavbar";

function App() {
    return (<div className="App" >
        <NavBar />
        <Services />
        <MiniNavbar />
        <Main />
    </div>
    );
}

export default App;