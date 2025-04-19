import React, { Fragment, useState } from 'react'
import nikepro from "../json/nikepromax.json"
import { Link } from 'react-router-dom'

const NikeAirMax = () => {
    const [isborder, setIsborder] = useState(false);
    const [isrotate,setisrotate] = useState(false)
    return (
        <>
            <div className="flex py-[14.5px] gap-2 justify-center bg-border-gray opacity-70">
                <h4 className='font-proxima font-normal text-lg text-primary-blue'>Home</h4>
                <span className='font-proxima font-normal text-lg text-light-gray'>/</span>
                <h4 className='font-proxima font-normal text-lg text-primary-blue'>Hot Deal</h4>
                <span className='font-proxima font-normal text-lg text-light-gray'>/</span>
                <h4 className='font-proxima font-normal text-lg text-primary'>Nike Airmax 270 React</h4>
            </div>
            <div className="container ">
                <div className="flex pt-[42px]">
                    <div className="flex flex-col ">
                        {
                            nikepro.data.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                        <div className="flex flex-col gap-[134px]">
                                            <img src={`/public/assets/Images/${item.image}`} alt="Image" />
                                            <div className="flex gap-[15.50px]">
                                                <img src={`/public/assets/Images/${item.gridone}`} alt="Image" />
                                                <img src={`/public/assets/Images/${item.gridtwo}`} alt="Image" />
                                                <img src={`/public/assets/Images/${item.gridthree}`} alt="Image" />
                                                <img src={`/public/assets/Images/${item.gridfour}`} alt="Image" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col pl-9">
                        {
                            nikepro.data1.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                        <div className="">
                                            <h1 className='font-poppins font-medium text-2xl text-primary'>{item.title}</h1>
                                            <div className="flex items-center pt-[14px] pb-5 border-b-2 border-border-gray w-[470px]  gap-[15px]">
                                                <img className='max-w-[72px] w-full' src={`/public/assets/Icon/${item.ratting}`} alt="ratting" />
                                                <h4 className='font-proxima font-normal text-sm text-light-gray'>{item.review}</h4>
                                                <h4 className='font-proxima font-normal text-sm text-primary-blue'>{item.submitreview}</h4>
                                            </div>
                                            <div className="flex pt-[10px] pb-5 items-center gap-[9px]">
                                                <h4 className='font-poppins font-bold text-xl tracking-[0.5px] text-primary-blue leading-[180%]'>{item.offprice}</h4>
                                                <h4 className='font-poppins font-medium text-sm tracking-[0.5px] text-natural-gray leading-[150%] line-through'>{item.price}</h4>
                                                <h4 className='font-poppins font-bold text-sm tracking-[0.5px] text-primary-red leading-[150%]'>{item.offer}</h4>
                                            </div>
                                            <div className="grid grid-cols-2 gap-x-[70px] gap-y-4 pb-5 border-b-2 border-border-gray w-[470px]">
                                                <h6>{item.Availability}</h6>
                                                <h6>{item.instock}</h6>
                                                <h6>{item.Category}</h6>
                                                <h6>{item.Accessories}</h6>
                                                <h6>{item.Freeshipping}</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                        <div className="flex items-center gap-5 pt-6">
                            <h4 className='font-poppins font-normal text-base text-primary pr-8'>Select Color :</h4>
                            {
                                nikepro.colors.map((item, index) => (
                                    <Fragment key={index}>
                                        
                                        <div
                                            className="flex items-center w-5 h-5 justify-center rounded-full"
                                            style={{ border: `2px solid  ${isborder === index ? item?.color : "transparent"}` }}
                                        >
                                            <button
                                                style={{ background: item.color }}
                                                onClick={() => setIsborder(index)}
                                                className={`${isborder === index ? "w-3 h-3" : "h-4 w-4"
                                                    } rounded-full`}
                                            ></button>
                                        </div>
                                    </Fragment>
                                ))
                            }
                        </div>
                        <div className="flex pt-[22px] gap-24 items-center relative  border-b-2 border-border-gray w-[470px] pb-[22px]">
                            <h4 className='font-poppins font-normal text-base'>Size :</h4>
                            <button >
                            <div className="flex gap-11 border-2 border-lightborder-gray p-[10px_18px_11px_16px] rounded">
                                <h4 className='font-proxima font-normal text-sm'>XS</h4>
                                <button onClick={() => (
                                    setisrotate(!isrotate)
                                )}>
                                <img className={`${isrotate ? "rotate-180" : ""} duration-500 transition-transform ease-in-out`} src="/public/assets/Icon/arrowdown.svg" alt="arrow" />
                                </button>
                            </div>
                                {
                                    isrotate && (
                                        <div className='flex flex-col w-16  bg-border-gray rounded py-2 px-4 absolute'>
                                            <h4>M</h4>
                                            <h4>S</h4>
                                            <h4>XL</h4>
                                            <h4>XXL</h4>
                                        </div>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NikeAirMax
