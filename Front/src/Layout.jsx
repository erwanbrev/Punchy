import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./components/footer";
import { Navbar } from "./components/menu";
import { Outlet } from "react-router-dom";
import { ButtonAdd } from "./components/buttonAdd";
import { Authentification } from "./components/account/auth";


export const Layout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        console.log('authLayout', Authentification.isAuthenticated());
        if(!localStorage.getItem('token')) {
            Authentification.authenticated = false
        }
        
    }, [navigate])

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}