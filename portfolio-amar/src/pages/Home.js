import useDocumentTitle from "../hooks/useDocTitle";
import { Link } from "react-router-dom";
import { useState } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FrontEnd from "../components/Front-End";
import BackEnd from "../components/Back-End";
import Overig from "../components/Overig";

import '../style/home.css';

const Home = () => {
    useDocumentTitle('Home');

    const data = [
        <h1>Kies een optie</h1>,
        <FrontEnd/>,
        <BackEnd/>,
        <Overig/>
    ];

    const [Toggle, setToggle] = useState('0');

    return (
        <div id="Home-page">
            <Nav></Nav>
            <header>
                <div className="wrapper con-header">
                    <div className="img"></div>
                    <div className="txt">
                        <h1>"Mijn naam is Amar Baldewsing, en ik ben een Front-end webdeveloper!"</h1>
                        <Link className="Button" to={'/About'}>Over Mij</Link>
                    </div>
                </div>
            </header>
            <main>
                <div className="wrapper con-main">
                    <div className="content-main">
                        <h1>Mijn Vaardigheden</h1>
                        <div className="items-main">
                            <div className="card card1">
                               <div className="shadow-card">
                                    Web Development
                                </div>                            
                            </div>
                            <div className="card card2">
                               <div className="shadow-card">
                                    Game Development
                                </div> 
                            </div>
                            <div className="card card3">
                               <div className="shadow-card">
                                    3D Models       
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section id="skills">
                <div className="con-skills wrapper">
                    <h1>Mijn Programmeer Kennis</h1>
                    <div class="radio-inputs">
                        <label class="radio">
                            <input type="radio" name="radio" onClick={() => setToggle(1)}/>
                            <span class="name">Front-End</span>
                        </label>
                        <label class="radio">
                            <input type="radio" name="radio" onClick={() => setToggle(2)}/>
                            <span class="name">Back-End</span>
                        </label> 
                        <label class="radio">
                            <input type="radio" name="radio" onClick={() => setToggle(3)}/>
                            <span class="name">Overig</span>
                        </label>
                    </div>
                {data[Toggle]}
                </div>
            </section>
            <Footer/>
        </div>
    );
}
 
export default Home;