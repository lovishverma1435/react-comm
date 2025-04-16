import React, { useState } from 'react';
import arrowdown from "../../../public/assets/Icon/arrowdown.svg";
import profileicon from "../../../public/assets/Icon/profileclose2.svg"
import carticon from "../../../public/assets/Icon/cart.svg"
import searchicon from "../../../public/assets/Icon/searchicon.svg"
import appicon from "../../../public/assets/Icon/appicon.svg"
import arrow from "../../../public/assets/Icon/arrowlightwhite.svg"
import menutags from "../../json/menutags.json"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpenlang, setIsOpenlang] = useState(false);
    const [isOpencountry, setIsOpencountry] = useState(false);
    const [homedata, sethomedata] = useState(false)
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
                <section>
        <div className="container pb-[26.26px]">
          <div className="flex pt-[26.26px] justify-between">
            <div className="flex w-[134.32px] justify-between items-center">
              <img src={appicon} alt="icon" />
              <h4 className=' font-poppins font-bold text-[18px]  text-primary-dark'>E-comm</h4>
            </div>
            <div  className="flex w-[815.49px] relative justify-between items-center font-poppins font-medium text-2xl  text-primary">
              {
                menutags.path.map((item, index) => (
                  <div  className='' key={Date.now() + item + index}>
                    <NavLink className="" to={item.path}>
                      {

                        index === 0 ? (<>
                          <h4 onMouseEnter={() => sethomedata(true)} className={""}>
                            {item.menu}
                          </h4>
                          <div onMouseLeave={() => sethomedata(false)} className={` transition-all duration-300  ${homedata ? "block z-50" : "hidden z-0"} w-[1029px]    absolute  mx-auto left-[-290px] top-[55px] border-t-2 border-lightgray  h-[360.51px] bg-white text-primary  p-[38.82px_32.7px_3.7px_84.14px]`}>
                      <img className='absolute top-[-11px] left-[315px]' src={arrow} alt="arrowlightwhite" />
                      <div className="flex w-full justify-between">
                        <div className="flex flex-col gap-[12.94px]">
                          
                          <h1 className='font-poppins font-[500] text-lightgray-white text-[22px]'>Category</h1>
                          <div className="flex flex-col gap-6">
                            {
                              menutags.datacatogry.map((item, index) => (
                                <div key={index}>
                                  <Link to={"/Error"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4></Link>

                                </div>
                              ))
                            }

                          </div>

                        </div>
                        <div className="flex flex-col gap-[12.94px]">
                          <div className="flex flex-col gap-6 mt-[43.55px]">
                            {
                              menutags.datacatogry.map((item, index) => (
                                <div key={index}>
                                  <Link to={"/Error"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4></Link>

                                </div>
                              ))
                            }

                          </div>

                        </div>
                        <div className="flex flex-col gap-[12.94px]">
                          <h1 className='font-poppins font-[500] text-lightgray-white text-[22px]'>Category</h1>
                          <div className="flex flex-col gap-6">
                            {
                              menutags.datacatogryhotdeal.map((item, index) => (
                                <div key={index}>
                                   {
                                    index === 0 ? (<><Link to={"/Hotdeal"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                                  </Link>
                                    </>):<Link to={"/Error"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                                  </Link>
                                  }
                                </div>
                              ))
                            }

                          </div>

                        </div>
                        <div className="flex flex-col gap-[12.94px]">
                          <div className="flex flex-col gap-6 mt-[43.55px]">
                            {
                              menutags.datacatogryhotdeal.map((item, index) => (
                                <div key={index}>
                                  {
                                    index === 0 ? (<><Link to={"/Hotdeal"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                                  </Link>
                                    </>):<Link to={"/Error"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                                  </Link>
                                  }
                                  

                                </div>
                              ))
                            }

                          </div>

                        </div>
                        <div className="flex flex-col gap-[12.94px]">
                          <h1 className='font-poppins font-[500] text-lightgray-white text-[22px]'>Category</h1>
                          <div className="flex flex-col gap-6">
                            {
                              menutags.datacatogry.map((item, index) => (
                                <div key={index}>
                                  <Link to={"/Error"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4></Link>

                                </div>
                              ))
                            }

                          </div>

                        </div>
                      </div>
                    </div>



                        </>) : <h4>{item.menu}</h4>
                      }
                    </NavLink>
                  
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </section>
            </div>
        </>
    );
}



export default Header;
