import react from "react";
import { Navbar } from "./components/menu";
import { Outlet } from "react-router-dom";


export const Layout = () => {

    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}