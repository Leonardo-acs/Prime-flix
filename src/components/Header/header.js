import { Link } from 'react-router-dom';
import './header.scss';

function Header() {

    return (
        <header>
            <div className='headerContainer'>
                <Link className='logo' to='/'>Prime Flix</Link>
                <Link className='favorites' to='/favoritos'>Meus Favoritos</Link>
            </div>
        </header>
    )
}

export default Header;