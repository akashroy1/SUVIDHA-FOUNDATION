import React, {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import '../css/offerletter.css';
import {useLocation} from 'react-router-dom';

import logo from '../images/logo.png';


function OfferLetter() {

    const user = JSON.parse(localStorage.getItem('user'));
    const name = user.name;
    const email = user.email;

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: ()=> componentRef.current,
        documentTitle: `OfferLetter-${name}`,
        // onAfterPrint: ()=> alert('Successful')
    });

    const location = useLocation();
    const formData = location.state && location.state.formData;
    const {doj, duration} = formData;


    return (
    <>
    <div className='offerLetter'>
        <div className='letter' ref={componentRef}>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <h2 className='heading'>Internship Offer Letter</h2>
            <div className='body'>
                <div>
                    Date – {new Date().toLocaleDateString()} <br/>
                    {name} <br/>
                    {email} <br/>
                </div>
                <br/>
                <span>Dear {name},<br/></span>
                <span>
                &nbsp; We are pleased to confirm your acceptance of an internship position as Web Developer Intern at Suvidha Foundation from {doj} for next {duration} months. Your duties and assignments for this position will be those described to you in your orientation meeting.
                </span>
                <span>
                If you have any questions, please feel free to contact your recruiter or mail your queries to dummy@example.com. We are looking forward to seeing you on the date of joining and offer a warm welcome.<br/>
                </span>
                <br />
                <br />
                <br />
                <span>
                Sincerely,<br/>
                    Rahul Sharma<br/>
                    HR, Suvidha Foundation<br/>
                </span>
            </div>
        </div>
        <button
            onClick={handlePrint}
        >
            Print</button>
    </div>
    </>
  )
}

export default OfferLetter;