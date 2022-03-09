import './contact.css'
import Phone from "../../assets/Images/phoneIcon.png"
import Email from "../../assets/Images/emailIcon.png"
import Github from "../../assets/Images/githubIcon.png"
import Linkedin from "../../assets/Images/linkedinIcon.png"
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () =>{
        const formRef = useRef()
        const [done, setDone] = useState(false) 

        const handleSubmit = (e)=>{
            e.preventDefault()
            console.log("Button Pushed")
            emailjs.sendForm('service_6g2sgas', 'template_035nqhj', formRef.current, 'NRh6JlZ4420tv452h')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
        }

    return(
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>I'd love to talk with you!</h1>
                    <div className='c-info'>                    
                        <div className='c-info-item'>
                            <img src={Phone} alt='' className='c-icon'/>              
                            281-509-2532
                        </div>
                        <div className='c-info-item'>
                            <img src={Email} alt='' className='c-icon'/>              
                            Dennisjsacaza@gmail.com
                        </div>
                        <div className='c-info-item'>
                            <img src={Github} alt='' className='c-icon'/>              
                            https://www.linkedin.com/in/dennis-sacaza-06627b145/
                        </div>
                        <div className='c-info-item'>
                            <img src={Linkedin} alt='' className='c-icon'/>              
                            https://github.com/Desparta05
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>Contact Me!</b> I'm looking for the right job. 
                        But I'm always up for a new project.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name='user_name'/>
                        <input type="text" placeholder="Subject" name='user_subject'/>
                        <input type="text" placeholder="Email" name='user_email'/>
                        <textarea rows="5" placeholder='Message' name='message'/>
                        <button>Submit</button>
                        {done && "Message Sent"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact