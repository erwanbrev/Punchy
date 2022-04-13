import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Register } from "./components/account/register"
import { Login } from "./components/account/login"
import { Profil } from "./components/account/profil"
import "../public/assets/css/main.css"
import { Event } from "./pages/event";
import { Carpool } from "./pages/carpooling";
import { Housing } from "./pages/housing";
import { Friends } from "./pages/friends";
import { Register } from "./components/account/register";
import { Navbar } from "./components/menu";
import { Article } from "./components/article";


const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* les chemin d'accès des pages + le composent qui va avec */}
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Article />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/carpool" element={<Carpool />} />
                    <Route path="/housing" element={<Housing />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/register" element={<Register />} />
                    <Route element={<Navbar />} />
                    <Route path="/login" element={<Login/>}></Route>            
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/profil" element={<Profil/>}></Route>            
                    <Route path="/reserveCar" element={<ReserveCar/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Main />, document.getElementById("root"))