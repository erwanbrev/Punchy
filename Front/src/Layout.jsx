import react from "react";
import { Article } from "./components/article";
import { Footer } from "./components/footer";
import { Navbar } from "./components/menu";

export const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Article />
            <Footer />
        </div>
    )
}