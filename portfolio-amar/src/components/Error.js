import Nav from "./Nav";
import Footer from "./Footer";

import '../style/error.css';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error">
            <Nav></Nav>
            <main className="error-con">
                <div>
                    <h1 className="title-Error">Error code: 404</h1>
                    <p>De pagina die u probeert te zoeken, bestaat niet! Keer terug naar de home pagina.</p>
                    <Link className="Button" to={'/'}>Home</Link>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
 
export default Error;