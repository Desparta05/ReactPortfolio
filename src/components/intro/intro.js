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
                        Something short and sweet.
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