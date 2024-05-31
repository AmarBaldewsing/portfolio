import '../style/nav.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper con-footer">
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
        </footer>
    );
}
 
export default Footer;