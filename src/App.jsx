import * as React from "react";
import { Routes, Route} from "react-router-dom";

import Navbar from "./components/page/Navbar";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Menu from "./components/page/Menu";
import Where from "./components/page/Where";
import NoMatch from "./components/page/NoMatch";

export default function App() {
    return (
        <>
            
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="where" element={<Where />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </>
    );
}


