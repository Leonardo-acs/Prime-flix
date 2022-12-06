import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filme from "./Pages/Filme/filme";
import Home from "./Pages/Home/home";


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme/:id' element={<Filme />} />
            </Routes>
        </BrowserRouter>
    )
}