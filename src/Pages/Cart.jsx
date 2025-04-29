import React, { useState } from 'react'
import cart from "../json/cart.json"
import { Link } from 'react-router-dom'
import Popupcart from '../component/UI/Popus'

const Cart = () => {
    const [Count, setCount] = useState(1)
    const [isCount, setisCount] = useState(1)
    const [isCheck, setCheck] = useState(false)
    return (
        <>
            <div className="flex py-[14.5px] gap-2 justify-center bg-border-gray opacity-70">
                <h4 className='font-proxima font-normal text-lg text-primary-blue'>Home</h4>
                <span className='font-proxima font-normal text-lg text-light-gray'>/</span>
                <h4 className='font-proxima font-normal text-lg text-primary-blue'>Hot Deal</h4>
                <span className='font-proxima font-normal text-lg text-light-gray'>/</span>
                <h4 className='font-proxima font-normal text-lg text-primary'>Nike Airmax 270 React</h4>
            </div>
            <div className="container">
                <div className={`pt-[47px] pb-[156px] relative `}>
                    <div className=" border-b-2 border-border-gray">
                        {
                            cart.data1.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                        <div className="flex justify-between w-full mb-10">
                                            <h2 className='font-poppins font-medium text-xl'>{item.product}</h2>
                                            <div className="flex">
                                                <h2 className='font-poppins font-medium text-xl'>{item.price}</h2>
                                                <h2 className='font-poppins font-medium text-xl pl-[116px] pr-[156px]'>{item.quantity}</h2>
                                                <h2 className='font-poppins font-medium text-xl'>{item.unitprice}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col pb-[90px]">
                        {
                            cart.cartprod.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                        <div className="border-b-2 border-border-gray w-full pb-[40px] pt-[55px]">
                                            <div className="relative flex justify-between gap-10 ">
                                                <div className="flex items-center gap-7 ">
                                                    <div className="group">
                                                        <img className='' src={`/assets/Images/${item.image}`} alt="" />
                                                        <img className='absolute -top-3 -left-3  hidden group-hover:block' src={`/assets/Icon/del.svg`} alt="" />
                                                    </div>
                                                    <h1 className='font-poppins font-normal text-lg'>{item.title}</h1>
                                                </div>
                                                <div className="flex items-center">
                                                    {
                                                        index === 0 ? (<>

                                                            <h1 className='font-poppins font-normal text-lg pr-[110px]'>${item.price * Count}</h1>
                                                        </>)
                                                            :
                                                            (<>
                                                                <h1 className='font-poppins font-normal text-lg pr-[110px]'>${item.price * isCount}</h1>

                                                            </>)
                                                    }
                                                    {
                                                        index === 0 ? (<div className='flex gap-7 max-w-[125px] w-full bg-border-gray items-center h-[46px] py-3 px-[18px] rounded '>
                                                            <button onClick={() => setCount(Count > 1 ? Count - 1 : 1)}> <img className='cursor-pointer' src="/public/assets/Icon/minus.svg" alt="" /> </button>
                                                            <h1 className='font-poppins font-normal text-lg w-3'>{Count}</h1>
                                                            <button onClick={() => setCount(Count < 9 ? Count + 1 : 9)}> <img src="/public/assets/Icon/plus.svg" alt="" /> </button>
                                                        </div>) : (<div className='flex gap-7 max-w-[125px] w-full bg-border-gray items-center h-[46px] py-3 px-[18px] rounded '>
                                                            <button onClick={() => setisCount(isCount > 1 ? isCount - 1 : 1)}> <img className='cursor-pointer' src="/public/assets/Icon/minus.svg" alt="" /> </button>
                                                            <h1 className='font-poppins font-normal text-lg w-3'>{isCount}</h1>
                                                            <button onClick={() => setisCount(isCount < 9 ? isCount + 1 : 9)}> <img src="/public/assets/Icon/plus.svg" alt="" /> </button>
                                                        </div>)
                                                    }
                                                    <h1 className='font-poppins font-normal text-lg pl-[150px]'>${item.unitprice}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex w-full items-start justify-between">
                        <div className="flex max-w-[370px] w-full items-center">
                            <input className='flex pt-[18px] pb-[18px] pl-5 outline-0 border-2 border-[#f1f3f4] border-r-0 font-poppins font-normal text-base text-primary border-l-rounded' type="text" placeholder='Voucher code' />
                            <button className='flex pt-[18px] pb-[18px] px-[21px] border-2 border-[#F1F3F4] bg-primary-blue font-poppins font-medium text-lg text-white border-r-rounded'>Redeem</button>
                        </div>
                        <div className="flex flex-col max-w-[377px] w-full  p-3 rounded">
                            {
                                cart.checklist.map((item, index) => (
                                    <Link key={index} to={item.path}>
                                        {index === 0 ? (<>
                                            <div className="flex items-center justify-between pb-[23px]">
                                                <h1 className='font-poppins font-normal text-lg'>{item.title}</h1>
                                                <h1 className='text-end font-poppins font-normal text-lg'>{item.data}</h1>
                                            </div>

                                        </>) :
                                            index === 2 ? (<>
                                                <div className="flex items-center justify-between border-b-2 pb-6 mb-7 border-border-gray ">
                                                    <h1 className='font-poppins font-normal text-lg'>{item.title}</h1>
                                                    <h1 className='text-end font-poppins font-normal text-lg'>{item.data}</h1>
                                                </div>
                                            </>) : (<>
                                                <div className="flex items-center justify-between ">
                                                    <h1 className='font-poppins font-normal text-lg'>{item.title}</h1>
                                                    <h1 className='text-end font-poppins font-normal text-lg'>{item.data}</h1>
                                                </div>
                                                <div className="flex items-center justify-between pb-[23px]">
                                                    <h1 className='font-poppins font-medium text-3xl'>{item.total}</h1>
                                                    <h1 className='text-end font-poppins font-medium text-3xl'>{item.totalprice}</h1>
                                                </div>
                                            </>)
                                        }

                                    </Link>
                                ))
                            }
                            <div className="bg-primary-blue flex items-center cursor-pointer justify-center py-4 rounded ">

                                <button onClick={() => setCheck(true)} className='font-poppins  font-medium text-lg text-white  cursor-pointer '>Check out</button>

                            </div>
                            {
                                isCheck && (<>
                                    <div className="fixed  inset-0 bg-[#2222224D] z-40"></div>

                                    {/* Popup */}
                                    <div className="fixed inset-0 flex justify-center items-center z-50">
                                        <Popupcart data={() => setCheck(false)}  />
                                    </div>
                                </>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
