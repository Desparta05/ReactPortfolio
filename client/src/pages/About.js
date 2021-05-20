import Header from './componets/Header';
import ImgCard from './components/ImgCard';
import Pic from '../assets/Images/A_0531.JPG';
// import List from '../components/List';

function About() {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Header heading="About Me" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Header heading="Quick Introduction" />
                    <div className="row">
                        <p>
                        I have worked in the IT industry for the past several years. I am a driven individual with a keen interest in learning more and advancing my career in technology. My skills as of recently have been in HTML, CSS & Javascript. Currently, I am attending Rice Univerity's Coding Boot Camp, where I am honing and expanding my skills in coding. My 3+ Years in the Oil/Gas Field as well as my 5+ Years in the Technical/Customer Service field have prepared me for my future endeavors.
                        </p>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <ImgCard
                        src={Pic}
                        alt="Portfolio Picture"
                    />
                </div>

            </div>
        </>

    )
}

export default About;