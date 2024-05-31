import { useParams } from "react-router-dom";
import Footer from '../components/Footer'; 
import Nav from '../components/Nav';

import '../style/ProjectSub.css';

const ProjectSub = () => {
    const params = useParams();
    const ProjectID = params.ProjectID - 1;

    const data = [
        {
            img: '../img/Portfolio.png',
            title: 'WheyToo Fun webshop Met PHP',
            text: 'Dit is een groepsopdracht die ik moest maken voor school. Voor deze opdracht hebben we besloten een webshop website te maken. Sinds het groepje waarmee ik werkte allemaal geinterreseerd waren in de sportschool, dachten we de webshop een gym achtige thema te geven. Ik zat in een groepje van 3. Ik zelf deed de Front-End en de rest deed de Back-End met PHP.',
            video: '../img/whey-vid.mp4'
        },
        {
            img: '../img/agenda.png',
            title: 'CRUD Agenda applicatie',
            text: 'Dit is een Back-End Project van mij geweest. Dit was wederom een project van school. De opdracht was om een Crud applicatie te maken met php. Ik heb er zelf voor gekozen om een agenda applicatie te maken. Zelf heb ik er ook voor gekozen om Bootstrap ervoor te gebruiken',
            video: '../img/crud-vid.mp4'
        }
    ];

    const projectInfo = data[ProjectID];
    let img = projectInfo.img;
    let title = projectInfo.title;
    let text = projectInfo.text;
    let video = projectInfo.video;

    return (
        <div className="Projecten">
            <Nav></Nav>
            <main>
                <div className="wrapper con-ProjectSub">
                    <img src={img} alt="Foto Project" width='500'/>
                    <div className="txt-project">
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </main>
            <div className="video">
                <div className="wrapper con-vid">
                    <video src={video} controls width='500'></video>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
 
export default ProjectSub;