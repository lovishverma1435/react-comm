import React, { Fragment, useState } from 'react'
import nikepro from "../json/nikepromax.json"
import { Link } from 'react-router-dom'
import bestselling from "../json/bestsellimg.json"
import BestNikeJson from "../component/cards/Bestseller"

const NikeAirMax = ({ info }) => {
    const [isborder, setIsborder] = useState(false);
    const [isrotate, setisrotate] = useState(false)
    const [iscount, setiscount] = useState(1)
    const [isindex, setindex] = useState(0)
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
                                            <div className="flex items-center pt-[14px] pb-5 border-b-2 border-border-gray w-[500px]  gap-[15px]">
                                                <img className='max-w-[72px] w-full' src={`/public/assets/Icon/${item.ratting}`} alt="ratting" />
                                                <h4 className='font-proxima font-normal text-sm text-light-gray'>{item.review}</h4>
                                                <h4 className='font-proxima font-normal text-sm text-primary-blue'>{item.submitreview}</h4>
                                            </div>
                                            <div className="flex pt-[10px] pb-5 items-center gap-[9px]">
                                                <h4 className='font-poppins font-bold text-xl tracking-[0.5px] text-primary-blue leading-[180%]'>{item.offprice}</h4>
                                                <h4 className='font-poppins font-medium text-sm tracking-[0.5px] text-natural-gray leading-[150%] line-through'>{item.price}</h4>
                                                <h4 className='font-poppins font-bold text-sm tracking-[0.5px] text-primary-red leading-[150%]'>{item.offer}</h4>
                                            </div>
                                            <div className="grid grid-cols-2 gap-x-[70px] gap-y-4 pb-5 border-b-2 border-border-gray w-[500px]">
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
                        <div className="flex pt-[22px] gap-24 items-center relative  border-b-2 border-border-gray w-[500px] pb-[22px]">
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
                                        <div className='flex flex-col w-16  bg-border-gray rounded py-2 px-4 absolute text-start'>
                                            <h4>M</h4>
                                            <h4>S</h4>
                                            <h4>XL</h4>
                                            <h4>XXL</h4>
                                        </div>
                                    )
                                }
                            </button>
                        </div>
                        <div className="flex items-center py-5 gap-[151px] ">
                            <div className="flex items-center gap-[30px] max-w-[124px] w-full p-[13px_18px_16px_18px] bg-light-white rounded ">
                                <button onClick={() => setiscount(iscount > 1 ? iscount - 1 : 1)}> <img src="/public/assets/Icon/minus.svg" alt="svg" /> </button>
                                <h4>{iscount}</h4>
                                <button onClick={() => setiscount(iscount < 9 ? iscount + 1 : 9)}> <img src="/public/assets/Icon/plus.svg" alt="svg" /> </button>
                            </div>
                            <div className="flex gap-[17px] items-center">
                                <button className='flex max-w-[160px] w-full gap-4 p-[16px_16px_16px_21px] bg-bg-blue rounded'>
                                    <img src="/public/assets/Icon/cart2.svg" alt="cart" />
                                    <h2 className='font-proxima font-normal text-base text-primary-blue'>Add To Cart</h2>
                                </button>
                                <div className="flex bg-bg-blue p-[21px_21px_21px_21px]    rounded">
                                    <img src="/public/assets/Icon/hearts.svg" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t-2 border-border-gray w-[500px] pt-[22px] gap-[11px] ">
                            <button className='flex max-w-[245px] w-full bg-fb-blue rounded gap-3 p-[14px_30px_17px_34px]'>
                                <img src="/public/assets/Icon/facebook1.svg" alt="" />
                                <h4 className='font-poppins font-medium text-base text-white'>Share on Facebook</h4>
                            </button>
                            <button className='flex max-w-[245px] w-full bg-primary-blue rounded gap-3 p-[14px_30px_17px_34px]'>
                                <img src="/public/assets/Icon/twitter1.svg" alt="" />
                                <h4 className='font-poppins font-medium text-base text-white'>Share on Twitter</h4>
                            </button>
                        </div>
                    </div>
                    <div className="flex pl-8 ">
                        {
                            nikepro.nextshoe.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                        <h2 className='font-proxima font-normal text-lg text-light-gray pb-[35px]'>{item.title}</h2>
                                        <img src={`/public/assets/Images/${item.image}`} alt="image" />
                                        <div className="border-2 border-border-gray rounded max-w-[287px] w-full  pt-[54px]">
                                            <div className="flex flex-col max-w-[77px] w-full mx-auto">
                                                <img src={`/public/assets/Icon/${item.ratting}`} alt="svg" />
                                            </div>
                                            <div className="flex max-w-[94px] w-full mx-auto pb-[34px] gap-3 pt-3">
                                                <h4 className='font-proxima font-normal text-base text-primary-red'>{item.offprice}</h4>
                                                <h4 className='font-proxima font-normal text-base line-through text-light-gray'>{item.price}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="bg-border-gray rounded relative flex flex-col  max-w-[930px] w-full mt-[49px] mb-[78px]">
                    <div className=" flex gap-[79px] pl-[31.82px] z-50 pt-[34.29px] border-b-4 border-bg-white ">
                        {
                            nikepro.infromation.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                        <div onClick={() => setindex(item.value)} className={` ${index === 0 ? "174.82px" : index === 1 ? "87.44px" : "109.92px"} flex   h-[55px] `} >
                                            <h1 className='font-poppins font-normal text-lg hover:border-b-4  hover:border-primary-blue hover:text-primary-blue'>{item.info}</h1>
                                            {
                                                index === 1 && (<>
                                                    <p className='font-poppins font-normal leading-[180%] text-neutral-gray tracking-[0.5px] pl-0.5 pt-[0.3px]'>0</p>
                                                </>)
                                            }
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    {
                        isindex == 0 && (
                            nikepro.info.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                        <div className="max-w-[765px] w-full pl-[31px] pt-[21px] pb-[44px] gap-[15px] flex flex-col">
                                            <h4 className='font-poppins font-normal text-[12px] leading-[180%] text-neutral-gray tracking-[0.5px]'>{item.firstinfo}</h4>
                                            <h4 className='font-poppins font-normal text-[12px] leading-[180%] text-neutral-gray tracking-[0.5px]'>{item.secondinfo}</h4>
                                            <h4 className='font-poppins font-normal text-[12px] leading-[180%] text-neutral-gray tracking-[0.5px]'>{item.thirdinfo}</h4>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        )
                    }{
                        isindex == 1 && (
                            <h1>Coming Soon</h1>
                        )
                    }{
                        isindex == 2 && (
                            <h1>Not available</h1>
                        )
                    }
                </div>
                <div className="flex flex-col items-center gap-[26px]">
                    <h1 className='font-poppins font-semibold text-[35px] leading-[100%]'>{info}</h1>
                    <div className="grid grid-cols-4 gap-5">
                        {
                            bestselling.nikejson.map((item, index) => (
                                <BestNikeJson key={index + Date.now() + item}
                                    image={item.image}
                                    title={item.title}
                                    offprice={item.offprice}
                                    price={item.price}
                                    offer={item.offer}
                                    ratting={item.ratting}
                                    hot={item.hot}
                                    varirent={true}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NikeAirMax
