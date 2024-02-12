import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Home from "./components/Home.jsx";
import Email from "./components/Email.jsx";
import Sms from "./components/Sms.jsx";

const App = () => {
    return (
        <>
            <div>
                <BrowserRouter>
                    <div className="Nav">
                        <img
                            src="../public/images/images (2).jpeg"
                            alt="logo"
                        />
                    </div>

                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/Sms" element={<Sms />} />

                        <Route path="/Email" element={<Email />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
