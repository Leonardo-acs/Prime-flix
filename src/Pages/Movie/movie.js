import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../Services/api";
import './movie.scss';
import { toast } from 'react-toastify';

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "325569409dad7e5378064326222cf539",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setMovie(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Filme não encontrado');
                    navigate('/', { replace: true })
                })
        }

        loadMovie();

        return () => {
            <></>
        }
    }, [id, navigate]);

    function saveMovie() {
        const list = localStorage.getItem("@movies");
        let saveMovies = JSON.parse(list) || [];
        const hasMovie = saveMovies.some((saveMovies) => saveMovies.id === movie.id);

        if (hasMovie) {
            toast.warn('O filme já está salvo na lista')
            return;
        }

        saveMovies.push(movie);
        localStorage.setItem("@movies", JSON.stringify(saveMovies));
        toast.success("Filme salvo com sucesso!!!")
    }

    if (loading) {
        return (
            <div className="movieInfo">
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return (
        <div className="movie">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}></img>
            <h3>Sinopse:</h3>
            <span>{movie.overview}</span>
            <strong>Avaliação: {movie.vote_average.toFixed(1)} / 10</strong>
            <div className="buttonsArea">
                <button onClick={saveMovie}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
                        target="blank"
                        rel="external">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;