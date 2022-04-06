import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';
import App from './App';

import Home from "./page/Home";
import About from "./page/About";
import Menu from "./page/Menu";
import Where from "./page/Where";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/where" element={<Where />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
