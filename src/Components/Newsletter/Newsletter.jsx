import React from 'react';
import backg from "../../assets/bg-shadow.png"

const Newsletter = () => {
    return (
        <div className="absolute -top-30   w-full outline-1 outline-offset-6 rounded-2xl outline-white h-60 bg-white bg-cover " style={{backgroundImage : `url(${backg})`}}>
            <footer className="footer sm:footer-horizontal  text-base-content p-10 w-full rounded-2xl">
                <div className='flex justify-center w-full'>
                    <form>
                        <h6 className="text-4xl font-bold mb-5">Subscribe to our Newsletter</h6>
                        <fieldset className="flex flex-col text-center justify-center items-center">
                            <label>Get the latest updates and news right in your inbox!</label>
                            <div className="join mt-5">
                                <input
                                    type="text"
                                    placeholder="Your Email"
                                    className="input input-bordered join-item rounded-xl" />
                                <button className="btn btn-primary join-item ml-5 rounded-xl">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>


            </footer>

        </div>
    );
};

export default Newsletter;