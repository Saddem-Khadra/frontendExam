import React from 'react';
import {Routes, Route, Navigate,HashRouter,BrowserRouter} from "react-router-dom";
import './App.css';
import {Main} from "./pages/Main";
import {Friends} from "./pages/Friends";
import {User} from "./pages/User";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={"/main"} element={<Main/>}/>
                    <Route path={"/friends"} element={<Friends/>}/>
                    <Route path={"/user/:id"} element={<User/>}/>
                    <Route path="*" element={<Navigate replace to="/main"/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
