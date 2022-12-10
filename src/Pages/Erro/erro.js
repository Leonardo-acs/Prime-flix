import { Link } from "react-router-dom";
import './erro.scss';

function Erro(){
    return(
        <div className="notFound">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to={'/'}>Veja a lista de filmes</Link>
        </div>
    )
}

export default Erro;