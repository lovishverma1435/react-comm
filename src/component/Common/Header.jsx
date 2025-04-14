import React, { useState } from 'react';
import arrowdown from "../../../public/assets/Icon/arrowdown.svg";
import profileicon from "../../../public/assets/Icon/profileclose2.svg"
import carticon from "../../../public/assets/Icon/cart.svg"
import searchicon from "../../../public/assets/Icon/searchicon.svg"
import appicon from "../../../public/assets/Icon/appicon.svg"
import menutags from "../../json/menutags.json"
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpenlang, setIsOpenlang] = useState(false);
    const [isOpencountry, setIsOpencountry] = useState(false);
    return (
        <>
            <div className="container">
                <div className=" flex justify-between items-center border-b-2 pt-2.5 border-border-white">
                    <div className="flex gap-[13px] items-center">
                        <button
                            onClick={() => {
                                setIsOpenlang(!isOpenlang);
                                setIsOpencountry(false);
                              }} className="flex gap-1.5 items-center" >
                            <h2 className='font-proxima font-normal text-xl leading-[100%] text-primary'>EN</h2>
                            <img className={`${isOpenlang ? "rotate-180" : ""} duration-500 transition-transform ease-in-out`} src={arrowdown} alt="dropdown arrow" />
                        </button>
                        {
                            isOpenlang && (
                                <div className="absolute top-12 z-1 mt-2 bg-light-gray text-black text-sm w-32 flex flex-col items-start py-2 px-4 rounded ">
                                    <h5>IND</h5>
                                    <h5>PBI</h5>
                                    <h5>FRN</h5>
                                    <h5>CHINA</h5>
                                </div>
                            )}

                        <div className="">
                            <button
                                onClick={() => {
                                    setIsOpencountry(!isOpencountry);
                                    setIsOpenlang(false);
                                  }} className="flex gap-1.5 items-center" >
                                <h2 className='font-proxima font-normal text-xl leading-[100%] text-primary'>USD</h2>
                                <img className={`${isOpencountry ? "rotate-180" : ""} duration-500 transition-transform ease-in-out`} src={arrowdown} alt="dropdown arrow" />
                            </button>
                            {
                                isOpencountry && (
                                    <div className="absolute top-12 z-1 mt-2 bg-light-gray text-black text-sm w-32 flex flex-col items-start py-2 px-4 rounded ">
                                        <h5>RUP</h5>
                                        <h5>TOK</h5>
                                        <h5>FRN</h5>
                                        <h5>CHINA</h5>
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="flex gap-1.5">
                            <img src={profileicon} alt="profileicon" />
                            <h5 className='font-proxima font-normal text-xl leading-[100%] text-primary cursor-pointer'>My profile</h5>
                        </div>
                        <div className="">
                            <img className='pt-4 pr-[25px] pb-[19px] pl-[26px] cursor-pointer' src={carticon} alt="carticon" />
                        </div>
                        <div className="flex items-center gap-8">
                            <h5 className='font-proxima font-normal text-xl leading-[100%] text-primary cursor-pointer'>items</h5>
                            <h5 className='font-proxima font-normal text-xl leading-[100%] text-primary cursor-pointer'>$ 0.00</h5>
                        </div>
                        <div className="cursor-pointer">
                            <img src={searchicon} alt="searchicon" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between py-[26px]">
                    <div className="flex items-center gap-1.5">
                        <img src={appicon} alt="appicon" />
                        <h2 className='font-poppins font-bold text-lg leading-[100%] text-primary cursor-pointer'>E-Comm</h2>
                    </div>
                    <div className="flex items-center gap-[98px] ">
                        {
                            menutags.map((item,index) => (
                                <NavLink key={index} to={item.path}>
                                    <h2 className='font-poppins font-medium text-2xl leading-[100%] cursor-pointer'>{item.menu}</h2>

                                </NavLink>

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}



export default Header;
