import React from 'react';
import './Footer.css';
import logo from './logo.png';
import { FaLinkedin } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

const Footer = () => {
    return (
      <>
        <footer className=" text-white " id='footerbg' >
            <div className="container mx-auto flex flex-col gap-7 justify-between px-6">
            
                <br/>
                <div className=' flex flex-wrap mb-3 justify-around'>
                    <div className=' flex flex-col align-middle items-center '>
                    <div className=" ">
                    <img src={logo} className=' h-24 w-44'/>
                </div>
                <div className=' flex gap-2 '>
                <FaLinkedin className=' w-7 h-7' />
                <SiYoutubeshorts className=' w-7 h-7' />
                </div>
                
                    </div>
                
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Brand Resume</h2>
                    <ul>
                        <li><a href="#" className="hover:text-orange-400">About Us</a></li>
                        <li><a href="#" className="hover:text-orange-400">Careers</a></li>
                        <li><a href="#" className="hover:text-orange-400">Placement Support</a></li>
                        <li><a href="#" className="hover:text-orange-400">Resources</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Support</h2>
                    <ul>
                        <li><a href="#" className="hover:text-orange-400">Contact</a></li>
                        <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
                    </ul>
                </div>
                
                </div>
            </div>
            
                
                <div className="container border-t-2 border-t-white mx-auto py-10 text-base text-center">
                &copy; Copyright By BrandResume.com All Rights Reserved
            </div>
                
            
        </footer>
        </>
    );
}

export default Footer;
