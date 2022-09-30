import { Link } from 'react-router-dom';
import HomeImage from '../home.png'

function Header() {
    return (
        <div>
            <Link to="/">
                <img src={HomeImage} alt='home' />
            </Link>
        </div>
    );
}

export default Header;