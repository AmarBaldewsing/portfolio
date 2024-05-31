import '../style/skill-bar.css';

const FrontEnd = () => {
    return (
        <div className="con-skill Front-End">
            <div className="bar-fld-con">
                <div className="fld">
                    <p>HTML</p>
                    <div className="bar-con"><div className="bar html"></div></div>
                </div>
                <div className="fld">
                    <p>CSS</p>
                    <div className="bar-con"><div className="bar css"></div></div>
                </div>
                <div className="fld">
                    <p>Javascript</p>
                    <div className="bar-con"><div className="bar js"></div></div>
                </div>
                <div className="fld">
                    <p>React</p>
                    <div className="bar-con"><div className="bar react"></div></div>
                </div>
                <div className="fld">
                    <p>SCSS</p>
                    <div className="bar-con"><div className="bar scss"></div></div>
                </div>
            </div>
            <p>Overige Kennis: <span className="dark">Bootstrap</span>, <span className="dark">Tailwind</span></p>
        </div>
    );
}
 
export default FrontEnd;