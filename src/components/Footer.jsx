import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const alertNotImplemented = () =>{
        alert("Not implemented yet :)")
      }
    return (
       <section id='footer'>
        <div className="footer__content">
            <ul className="footer__lists">
                <li className="footer__list">
                    <Link className='footer__link' onClick={alertNotImplemented} to="">
                        BMW © 2022
                    </Link>
                </li>
                <li className="footer__list">
                    <Link className='footer__link' onClick={alertNotImplemented} to="">
                        Privacy & Legal
                    </Link>
                </li>
                <li className="footer__list hide">
                    <Link className='footer__link' onClick={alertNotImplemented} to="">
                        Contact
                    </Link>
                </li>
                <li className="footer__list hide">
                    <Link className='footer__link' onClick={alertNotImplemented} to="">
                        Vehicle Recalls
                    </Link>
                </li>
                <li className="footer__list hide">
                    <Link className='footer__link' onClick={alertNotImplemented} to="">
                        Careers
                    </Link> 
                </li>

                <li className="footer__list hide">
                    <Link className='footer__link' onClick={alertNotImplemented} to="">
                        News
                    </Link>
                </li>
            </ul>
        </div>
       </section>
    );
}

export default Footer;
