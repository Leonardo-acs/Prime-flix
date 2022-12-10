import axios from "axios";
//BASE URL: https://api.themoviedb.org/3/
//URL API:https://api.themoviedb.org/3/movie/now_playing?api_key=325569409dad7e5378064326222cf539&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});


export default api;
