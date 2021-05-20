import Header from '../components/Header';
import Resume from '../assets/Files/ResumePDF.pdf';

export function Contact() {
    return (
        <>
            <Header heading="Contact Me" />
            <div className="row">
                <div className="col-5 linkBox m-auto mb-3">
                    <h4 className="text-center">Ways to contact me:</h4>
                    <p><i className="fas fa-keyboard" /> Github:
            <a href="https://github.com/Desparta05" target="_blank" rel="noreferrer"> https://github.com/Desparta05</a>
                    </p>
                    <p><i className="fas fa-user-tie"></i> LinkedIn:
            <a href="https://www.linkedin.com/in/dennis-sacaza-06627b145/" target="_blank" rel="noreferrer"> https://www.linkedin.com/in/dennis-sacaza-06627b145/</a>
                    </p>
                    <p><i className="fas fa-envelope"></i> Email:
            <a href="mailto:Desparta05@gmail.com"> Desparta05@gmail.com</a>
                    </p>
                </div>
            </div>
            <Header heading="My Resume" />
            <div className="row">
                <div className="col-5 linkBox m-auto mb-3 text-center">
                    <a id="download" target="_blank" rel="noreferrer" href={Resume}>My Updated Resume</a>
                </div>
            </div>
        </>
    )
}

export default Contact;