import useDocumentTitle from "../hooks/useDocTitle";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import '../style/contact.css';

const Contact = () => {
    useDocumentTitle('Contact Mij');
    return ( 
        <div className="contact">
            <Nav></Nav>
            <main>
                <div className="wrapper con-contact">
                    <div className="img-ik"></div>
                    <div className="txt-contact">
                        <h1>Laten we in contact komen!</h1>
                        <ul>
                            <li>Naam: Amar Baldewsing</li>
                            <li>Email: 088681@glr.nl</li>
                            <li className="Button">CV</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
     );
}
 
export default Contact;