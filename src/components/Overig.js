import '../style/skill-bar.css';

const Overig = () => {
    return (
        <div className="con-skill Overig">
            <div className="bar-fld-con">
                <div className="fld">
                    <p>Python</p>
                    <div className="bar-con"><div className="bar py"></div></div>
                </div>
                <div className="fld">
                    <p>Lua</p>
                    <div className="bar-con"><div className="bar lua"></div></div>
                </div>
                <div className="fld">
                    <p>C#</p>
                    <div className="bar-con"><div className="bar c"></div></div>
                </div>
                <p>Overige Kennis: <span className="dark">Typescript</span>, <span className="dark">NPM</span></p>
            </div>
        </div>
    );
}
 
export default Overig;