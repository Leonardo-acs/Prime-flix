import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Filme from "./Pages/Movie/movie";
import Home from "./Pages/Home/home";
import Erro from "./Pages/Erro/erro";
import Favorites from "./Pages/Favorites/favorites";


export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme/:id' element={<Filme />} />
                <Route path='/favoritos' element={<Favorites />} />


                <Route path="*" element={<Erro />}></Route>
            </Routes>
        </BrowserRouter>
    )
}