import React from 'react'
import logo from '../img/logo.svg'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center relative p-10 bg-black">
        <div className="md:absolute md:top-10 relative flex justify-center"><img className="w-36 mb-6" src={logo} alt="logo" /></div>
        <div className="flex justify-between flex-col md:flex-row">
            <ul className="text-white mb-6 flex gap-5 xl:mb-0 xl:items-end md:mb-0 md:flex-row md:items-end flex-col items-center">
                <li className="py-2 text-sm font-Alata tracking-widest font-extralight text-white relative">
                    <div className="group">
                    <div className="group-hover:border-b-2  absolute w-1/2 h-0 bottom-0 left-1/2 -translate-x-1/2"></div>
                    <a className="z-10" href="#">About</a>
                    </div>
                </li>
                <li className="py-2 text-sm font-Alata tracking-widest font-extralight text-white relative">
                    <div className="group">
                    <div className="group-hover:border-b-2  absolute w-1/2 h-0 bottom-0 left-1/2 -translate-x-1/2"></div>
                    <a className="z-10" href="#">Contact</a>
                    </div>
                </li>
                <li className="py-2 text-sm font-Alata tracking-widest font-extralight text-white relative">
                    <div className="group">
                    <div className="group-hover:border-b-2  absolute w-1/2 h-0 bottom-0 left-1/2 -translate-x-1/2"></div>
                    <a className="z-10" href="#">Events</a>
                    </div>
                </li>
                <li className="py-2 text-sm font-Alata tracking-widest font-extralight text-white relative">
                    <div className="group">
                    <div className="group-hover:border-b-2  absolute w-1/2 h-0 bottom-0 left-1/2 -translate-x-1/2"></div>
                    <a className="z-10" href="#">Products</a>
                    </div>
                </li>
                <li className="py-2 text-sm font-Alata tracking-widest font-extralight text-white relative">
                    <div className="group">
                    <div className="group-hover:border-b-2  absolute w-1/2 h-0 bottom-0 left-1/2 -translate-x-1/2"></div>
                    <a className="z-10" href="#">Support</a>
                    </div>
                </li>
            </ul>
            <div className="flex flex-col items-center justify-center xl:items-end">
                <ul className="flex text-white text-2xl mb-6 gap-8">
                    <li><a className="hover:pb-1 hover:border-b-2 hover:border-white" href="#"><i className="fa-brands fa-square-facebook"></i></a></li>
                    <li><a className="hover:pb-1 hover:border-b-2 hover:border-white" href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a className="hover:pb-1 hover:border-b-2 hover:border-white" href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                    <li><a className="hover:pb-1 hover:border-b-2 hover:border-white" href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
                <p className="text-loopVeryDarkGray"> © 2021 Loopstudios. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
