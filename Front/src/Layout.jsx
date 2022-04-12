import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { Navbar } from "./components/menu";
import { Outlet } from "react-router-dom";
import { ButtonAdd } from "./components/buttonAdd";


export const Layout = () => {

    return (
        <div>
            <Navbar />
            <Outlet />
            <ButtonAdd />
            <Footer />
        </div>
    )
}