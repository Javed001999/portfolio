import React from 'react';
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
// import pic from "../../public/photo.avif";
import pic from "../../public/javedFinal.jpg";
import pdf from "../pdf/resume.pdf";

function Home() {
    return (
        <>
            <div name="Home"
                className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-3xl'>
                            <h1>Hello, I'm a </h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Frontend Developer","Web Developer", "MERN Developer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>
                            Passionate and detail-oriented Frontend Developer, Proficient in React.js along with HTML, CSS, and JavaScript, with a strong foundation in responsive design and user experience principles.
                        </p>
                        <br />
                        <br />
                        <a
                            href={pdf}
                            download="Javed_Ansari_Resume.pdf"
                            target="_blank"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                        >
                            Download Resume
                        </a>

                        <br />
                        <br />
                        <br />
                        {/* Social Media Icons */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available On</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href='https://www.linkedin.com/in/javed-ansari-5bb986209/' target='_blank'>
                                            <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href='https://github.com/Javed001999' target='_blank'>
                                            <ImGithub className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently Working On</h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 mt-8 md:ml-48 md:mt-20 order-1'>
                        <img
                            src={pic}
                            className='rounded-full md:w-[350px] md:h-[350px] shadow-red border-2 border-red-500 border-animate'
                            alt=''
                        />
                    </div>

                </div>
            </div>
            <hr className='my-8 border-t-2 border-gray-300' />
        </>
    )
}
export default Home;



