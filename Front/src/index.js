import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/menu"
import { Layout } from "./Layout";
import "../public/assets/css/main.css"

const Main = () => {
    return (

        <BrowserRouter>
            <Routes>
                {/* les chemin d'accès des pages + le composent qui va avec */}
                <Route path="/" element={<Layout />}>
                    <Route element={<Navbar />} />
                </Route>
                {/* <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>             */}
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Main />, document.getElementById("root"))