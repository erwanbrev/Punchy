import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "./Menu"
import { Index } from "./layout";
// import { Menu } from "./Menu";

const Main = () => {
    return (
        
        <BrowserRouter>
        <Routes>
            {/* les chemin d'accès des pages + le composent qui va avec */}
            <Route path="/" element={<Index/>}>
                
                <Route element={<Menu/>} />
                
            </Route>
                {/* <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>             */}
        </Routes>
        </BrowserRouter>

    )
}

ReactDOM.render(<Main />, document.getElementById("root"))