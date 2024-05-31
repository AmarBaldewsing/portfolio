import '../style/nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className="wrapper con-nav">
                <div className="logo-con">
                    <Link className={'logo'} to={'/'}>Amar</Link>
                </div>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/About'}>Over Mij</Link></li>
                    <li><Link to={'/Projecten'}>Projecten</Link></li>
                    <li><Link to={'/Contact'}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Nav;