import {Link} from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username.tsx';

function Header() {
    return (
        <header className="bg-yellow-500 uppercase">
            <Link to="/" className="tracking-widest">Big Mamma Pizza</Link>
            <SearchOrder/>
            <Username/>
        </header>
    );
}

export default Header;
