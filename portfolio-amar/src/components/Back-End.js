import '../style/skill-bar.css';

const BackEnd = () => {
    return (
        <div className="con-skill Back-End">
            <div className="bar-fld-con">
                <div className="fld">
                    <p>PHP</p>
                    <div className="bar-con"><div className="bar php"></div></div>
                </div>
                <div className="fld">
                    <p>SQL</p>
                    <div className="bar-con"><div className="bar sql"></div></div>
                </div>
                <div className="fld">
                    <p>Javascript</p>
                    <div className="bar-con"><div className="bar js-end"></div></div>
                </div>
            </div>
            <p>Overige Kennis: <span className="dark">MongoDB </span>, <span className="dark">JSON </span>, <span className="dark">Node.JS Server</span>, <span className="dark">MySql DB</span>, <span className="dark">CRUD</span></p>
        </div> 
    );
}
 
export default BackEnd;