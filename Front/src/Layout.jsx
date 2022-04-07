import react from "react";
import { Footer } from "./components/footer";
import { Navbar } from "./components/menu";

export const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Footer/>
        </div>
    )
}