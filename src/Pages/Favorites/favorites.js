import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favorites.scss';
import { toast } from 'react-toastify';

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem('@movies')
        setMovies(JSON.parse(myList) || [])
    }, [])

    function handleDeleteMovie(id) {
        let filterMovies = movies.filter((item) => {
            return (
                item.id !== id
            )
        })
        console.log(filterMovies);
        setMovies(filterMovies);
        localStorage.setItem("@movies", JSON.stringify(filterMovies))
        toast.success("Filme removido com sucesso")
    }

    return (
        <div className='myMovies'>
            <h1>Meus filmes</h1>
            {
                movies.length === 0 && <span>Lista vazia</span>
            }
            <ul>
                {movies.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => handleDeleteMovie(item.id)}>Remover da lista</button>
                            </div>
                        </li>

                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;