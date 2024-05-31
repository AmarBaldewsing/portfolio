import useDocumentTitle from "../hooks/useDocTitle";
import { Link } from "react-router-dom";

import Footer from '../components/Footer';
import Nav from '../components/Nav';

import '../style/project.css';

const Project = () => {
    useDocumentTitle("Projecten");
    return ( 
        <div className="Projecten">
            <Nav></Nav>
            <section>
                <div className="wrapper con-web">
                    <h1>Mijn Webdevelopment Projecten</h1>
                    <div className="con-webItems">
                        <Link to={'/Projecten/1'} className="item-web">
                            <div className="img-item whey"></div>
                            <p>WheyTooFun - Gym artikel webshop</p>
                        </Link>
                        <Link to={'/Projecten/2'} className="item-web">
                            <div className="img-item crud"></div>
                            <p>Crud Agenda app</p>
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="wrapper con-3d">
                    <h1>Mijn 3D Models Projecten</h1>
                    <div className="con-webItems">
                        <div className="item-web">
                            <div className="img-item room"></div>
                            <p>Sematric Room</p>
                        </div>
                        <div className="item-web">
                            <div className="img-item river"></div>
                            <p>Riverside</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="wrapper con-game">
                    <div className="info">
                        <div className="img-info"></div>
                        <div className="txt-info">
                            <h2>Mijn eigen Roblox game geschreven in LUA</h2>
                            <p>Dit is mijn allereerste, en tot nu toe, de enige game die ik zelf heb gemaakt. Mijn doel voor dit project was om een beetje bekend te worden met het game development systeem van Roblox. Ik wilde met de kennis die ik had opgedaan, een grotere project starten. Dit is tot heden nog niet gebeurt, sinds ik zelf er nog niet aan toe ben gekomen.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
     );
}
 
export default Project;