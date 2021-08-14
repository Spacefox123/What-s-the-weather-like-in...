import React from 'react';

const Footer = () => {
    return(
        <div className='footer'>
            <p className="footer__text">
                © {`2019 - ${new Date().getFullYear()}`} - MyWeatherApp | Website developed by{' '}
                <a href="https://github.com/spacefox123" target="_blank" rel="noopener noreferrer">
                    Žan Rode
                </a>
            </p>
        </div>
    );
}


export default Footer;

