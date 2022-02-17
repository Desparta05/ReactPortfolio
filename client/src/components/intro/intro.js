import './intro.css';
import profilePic from "../../assets/Images/profileImage2.PNG"


const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hi, This is...</h2>
                    <h1 className="i-name">Dennis Sacaza</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Lover</div>
                            <div className="i-title-item">Fighter</div>
                            <div className="i-title-item">Gamer</div>
                            <div className="i-title-item">Tester</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    I have worked in the IT industry for the past several years. I
                    am a driven individual with a keen interest in learning more and
                    advancing my career in technology. My skills as of recently have
                    been in HTML, CSS & Javascript. Currently, I am attending Rice
                    University's Coding Boot Camp, where I am honing and expanding my
                    skills in coding. My 3+ Years in the Oil/Gas Field as well as my
                    5+ Years in the Technical/Customer Service field have prepared
                    me for my future endeavors.
                    </p>
                </div>
            </div>

            <div className="i-right">
                <div className="i-bg"></div>
                <img src={profilePic} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro;