import useDocumentTitle from "../hooks/useDocTitle";
import { useState } from "react";

import '../style/about.css';

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const About = () => {
    useDocumentTitle('Over Mij');

    const [Toggle, setToggle] = useState('1');

    const data = [
        {
            id: 1,
            title: "Er is toch maar 1 club de beste in de wereld...",
            text: "Zelf ben ik een hele grote liverpool fan. Ik ben met een andere vriend al is een keer langs gegaan bij een wedstrijd van Liverpool tegen Sheffield Utd. Natuurlijk heeft liverpool gewonnen met 3-1.",
            img: '../img/img1.jpg',
        },
        {
            id: 2,
            title: "We blijven energiek!",
            text: "Zelf ben ik een sport fanaat. Ik kijk het liefst naar sport op tv, al is het motorsport of voetbal. Maar daar blijft het niet bij. Sporten doe ik zelf ook met alle liefde. Doordeweeks ga ik minimaal 3x naar de sportschool. Daarnaast zit ik ook op de sport Kickboksen wat ik 2x per week doe.",
            img: '../img/img2.jpg',
        },
        {
            id: 3,
            title: "Niet 1, Niet 2, maar 2 baantjes!",
            text: "Sinds ik veel wil genieten van het leven, moeten er daarvoor ook meerdere inkomes voor hebben. Gelukkig heb ik daarom op dit moment ook 2 baantjes. 1 bij de New York Pizza als bezorger, en 1 bij de Hoogvliet als vakkenvuller. Dit doe ik met liefde en veel energie. Het begon allemaal bij de Hoogvliet, maar sinds ik mijn rijbewijs B heb gehaald en gratis rijbewijs A erbij heb gekregen, wilde ook scooter rijden. Daarom bij de New York Pizza.",
            img: '../img/img3.jpg',
        },
        {
            id: 4,
            title: "Een paar biertjes ,en door...",
            text: "Genieten in het leven, dat is toch wel mijn levensmotto. Daarom ga ik zelf ook veel naar feestjes. al is het een huis feestje, of een festival. Ik ben daar te vinden in mijn vrije tijd.",
            img: '../img/img4.jpg',
        }
    ];

    return ( 
        <div className="About">
            <Nav></Nav>
            <header className="header-about">
                <div className="darken">
                    <h1>"Programmeren is niet het enige wat ik doe in mijn leven..."</h1>
                </div>
            </header>
            <main>
                <div className="wrapper con-about">
                    <h1 className="title">Kies een optie om meer over mij te weten komen!</h1>
                    <div className="options">
                        <div className="item-info liv" onClick={() => setToggle(1)}>
                            <div className="darken">
                                <h1>Liverpool</h1>
                            </div>
                        </div>
                        <div className="item-info klm"  onClick={() => setToggle(2)}>
                            <div className="darken">
                                <h1>Sporten</h1>
                            </div>
                        </div>
                        <div className="item-info werk"  onClick={() => setToggle(3)}>
                            <div className="darken">
                                <h1>Werken</h1>
                            </div>
                        </div>
                        <div className="item-info fissa"  onClick={() => setToggle(4)}>
                            <div className="darken">
                                <h1>Feesten</h1>
                            </div>
                        </div>
                    </div>
                    {
                        data.map(({id, title, text, img}) => {
                            return(
                                <>
                                {Toggle === id ?  (
                                    <div className="info" key={id}>
                                        <img src={img} alt="Foto voor info" width="500" height="500"/>
                                        <div className="txt-info">
                                            <h1>{title}</h1>
                                            <p>{text}</p>
                                        </div>
                                    </div>
                                ) : null}
                                </>
                            )
                        })
                    }
                </div>
            </main>
            <Footer></Footer>
        </div>
     );
}
 
export default About;