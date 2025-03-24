import React from 'react';
import footerImg from "../../assets/logo-footer.png"
const Footer = () => {
    return (
        <div className='bg-black '>
            <div className='flex justify-center pt-40'>
                <img src={footerImg} alt="" />
            </div>


            <footer className="footer sm:footer-horizontal text-white p-10">

                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p className='font-extralight'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <div className='font-extralight flex flex-col gap-2'>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                    </div>
                </nav>

                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label className='font-extralight'>Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item font-extralight">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;