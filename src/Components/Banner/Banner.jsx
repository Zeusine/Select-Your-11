
import logo from "../../assets/banner-main.png";
import banner from "../../assets/bg-shadow.png"
import { ToastContainer, toast } from 'react-toastify';

const Banner = ({ handleCoin }) => {

    const notify = () => toast.success('Credit Added To Your Account');





    return (
        <div className='pt-40'>
            <div className='flex flex-col  bg-black h-130 rounded-2xl   items-center text-center space-y-4' style={{ backgroundImage: `url(${banner})` }}>
                <img className='mt-15 h-52 w-60 ' src={logo} alt="" />
                <div className='text-white space-y-4'>
                    <h1 className='font-bold text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-2xl text-gray-300'>Beyond Boundaries Beyond Limits</p>
                    <div className=''><button className='btn bg-[#E7FE29] text-black outline-1 outline-[#E7FE29] outline-offset-4 p-4' onClick={() => {
                        handleCoin();
                        notify();
                    }}>Claim Free Credit</button>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            className="mt-8"
                            
                        />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;