import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';

const Pages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};
export default Pages;