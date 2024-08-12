import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import TicTacToe from '../Pages/TicTacToe';
import Minesweeper from '../Pages/Minesweeper';

const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/tic-tac-toe',
        element: <TicTacToe/>
    },
    {
        path: '/minesweeper',
        element: <Minesweeper/>
    },
]   
const AppRoutes = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
     );
}
 
export default AppRoutes;

