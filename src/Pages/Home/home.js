import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './home.scss';

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovies() {
            // const response = axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=325569409dad7e5378064326222cf539&language=pt-BR&page=1")
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "325569409dad7e5378064326222cf539",
                    language: "pt-BR",
                    page: 1,
                }
            })

            // console.log(response.data.results.slice(0, 10));
            setMovies(response.data.results)
            setLoading(false);
        }

        loadMovies();
    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="moviesList">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong className="title">{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title}></img>
                            <Link to={`/filme/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;