import './about.css'
import stock from '../../assets/Images/sayan-ghosh-y0-dzC6KQGE-unsplash.jpg'


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card-bg"></div>
                <div className="a-card">
                    <img 
                        src={stock} 
                        alt="" 
                        className="a-img"
                    />
                </div>
            </div>
            
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
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
    )
}

export default About;