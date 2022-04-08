import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import "../public/assets/css/main.css"

const Main = () => {
    return (

        <BrowserRouter>
            <Routes>
                {/* les chemin d'accès des pages + le composent qui va avec */}
                <Route path="/" element={<Layout />} />
                <Route path="/event" element={<Layout />} />
                <Route path="/covoit" element={<Layout />} />
                <Route path="/geoloc" element={<Layout />} />
                <Route path="/amis" element={<Layout />} />
                <Route path="/connexion" element={<Layout />} />
                {/* <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>             */}
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Main />, document.getElementById("root"))