import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <section id='footer'>
        <div className="footer__content">
            <ul className="footer__lists">
                <li className="footer__list">
                    <Link className='footer__link' to="">
                        BMW © 2022
                    </Link>
                </li>
                <li className="footer__list">
                    <Link className='footer__link' to="">
                        Privacy & Legal
                    </Link>
                </li>
                <li className="footer__list">
                    <Link className='footer__link' to="">
                        Contact
                    </Link>
                </li>
                <li className="footer__list">
                    <Link className='footer__link' to="">
                        Vehicle Recalls
                    </Link>
                </li>
                <li className="footer__list">
                    <Link className='footer__link' to="">
                        Careers
                    </Link>
                </li>
                <li className="footer__list hide">
                    <Link className='footer__link' to="">
                        News
                    </Link>
                </li>
            </ul>
        </div>
       </section>
    );
}

export default Footer;
