import React from 'react'
// import cart from "../../json/cart.json"
import { Link } from 'react-router-dom'


const Popus = ({ ondata, data }) => {
    return (
        <>
            <div className=" max-w-[1024px] w-full z-10 bg-light-blue rounded">
                <div className="flex justify-between w-full ">
                    <img onClick={ondata} className='pt-[42px] pl-[68px] cursor-pointer' src="/assets/Icon/leftarrow.svg" alt="svg" />
                    <img onClick={ondata} className='pt-[42px] pr-[68px] cursor-pointer' src="/assets/Icon/times.svg" alt="svg" />
                </div>
                <div className="flex justify-center pb-11">
                    <h1 className='font-poppins font-semibold text-[32px] text-primary-blue'>Make Payment</h1>
                </div>
                <div className="flex justify-center gap-4 items-center cursor-pointer relative ">
                    <div className="flex w-9 h-9 bg-[#DFDEDE] hover:bg-primary-blue rounded-full ">
                        <p className='m-auto font-poppins font-bold text-white text-lg tracking-[-2%]'>1</p>
                    </div>
                    <div className="flex w-9 h-9 bg-[#DFDEDE] hover:bg-primary-blue rounded-full">
                        <p className='m-auto  font-poppins font-bold text-white text-lg tracking-[-2%]'>2</p>
                    </div>
                    <div className="flex w-9 h-9 bg-[#DFDEDE] hover:bg-primary-blue rounded-full">
                        <p className='m-auto  font-poppins font-bold text-white text-lg tracking-[-2%]'>3</p>
                    </div>
                    <span className='border-b-2 border-[#DFDEDE] max-w-[122px] w-full absolute top-1/2 -z-10'></span>
                </div>
                <div className="flex justify-between pt-10 px-[72px]" >
                    <input className='outline-0 border-2 border-border-gray  py-[14px] px-4  max-w-[381px] w-full text-primary rounded' type="text" placeholder='first Name' />
                    <input className='outline-0 border-2 border-border-gray py-[14px] px-4  max-w-[381px] w-full text-primary rounded' type="text" placeholder='Last Name' />
                </div>
                <div className="flex justify-between pt-10 px-[72px]" >
                    <div className="flex flex-col  max-w-[381px] w-full  gap-10">
                        <input className='outline-0 border-2 border-border-gray py-[14px] px-4  text-primary rounded' type="text" placeholder='Email Address' />
                        <h1 className='text-primary-blue font-poppins font-semibold text-xl '>Select Method Of Payment</h1>
                    </div>
                    <div className="max-w-[381px] w-full flex">
                        <textarea className='outline-0 border-2 border-border-gray py-[26px] px-4 w-full text-primary rounded ' type="text" placeholder='Address for Delivery' />
                    </div>
                </div>
                <div className="flex flex-col max-w-[378px] w-full mt-4 pl-[72px] ">
                    {
                        data.map((item, index) => (
                            <Link key={index + item - Date.now()} to={item.path}>
                                <div className="flex justify-between p-4">
                                    <div className="flex gap-4 items-center">
                                        <img src={`/public/assets/icon/${item.image}`} alt="" />
                                        <h5 className='font-poppins font-bold text-xs leading-[150%] tracking-[0.5px]'>{item.title}</h5>
                                    </div>
                                    <input className='cursor-pointer' type="checkbox" />
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className=" flex  w-full  rounded justify-center pt-7 pb-20 ">
                    <button className='flex bg-primary-blue py-2 justify-center max-w-[300px] tracking-[-2%] w-full font-bold font-poppins text-lg text-white rounded cursor-pointer'>Go to Payment</button>
                </div>
            </div>
        </>
    )
}

export default Popus
