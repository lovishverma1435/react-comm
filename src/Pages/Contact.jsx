import React from 'react'
import contact from "../json/contact.json"
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <div className="flex py-[14.5px] gap-2 justify-center bg-border-gray opacity-70">
                <h4 className='font-proxima font-normal text-lg text-primary-blue'>Home</h4>
                <span className='font-proxima font-normal text-lg text-light-gray'>/</span>
                <h4 className='font-proxima font-normal text-lg'>Hot Deal</h4>
            </div>
            <div className="container py-[135px]">
                <div className="flex border-2 border-border-gray">
                    <div className="flex max-w-[646px] h-[716px] w-full bg-primary-blue relative ">
                        <span className="w-[130px] h-[130px]  bg-primary-blue top-[291px] -right-5 absolute z-10 rounded-full"></span>
                        {
                            contact.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                        <div className="">
                                            <div className="absolute top-[40px] -left-28">
                                                <img src={`/public/assets/Images/${item.image}`} alt="image" />
                                            </div>
                                            <div className=" flex flex-col">
                                                <h1 className='font-poppins font-semibold text-[40px] text-white absolute top-[90px] right-[158px] max-w-[156px] w-full'>{item.title}</h1>
                                                <h4 className='absolute top-1/2 right-[158px] text-white font-medium text-sm font-poppins'>{item.contact}</h4>
                                                <h4 className='absolute top-96 right-[178px] text-white font-medium text-sm font-poppins'>{item.phone}</h4>
                                                <h4 className='absolute bottom-64 right-[112px] max-w-[200px] w-full text-white font-medium text-sm font-poppins'>{item.address}</h4>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col pl-10 gap-[22px]">
                            <div className="flex flex-col pt-24 gap-1">
                                <h4 className='font-poppins font-medium text-sm text-primary'>Full Name</h4>
                                <input className='outline-0 border-2 border-border-gray w-[510px] pt-6 pb-5 pl-7 font-poppins font-medium text-base text-primary' type="text" placeholder='Your Name' />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className='font-poppins font-medium text-sm text-primary'>E-mail</h4>
                                <input className='outline-0 border-2 border-border-gray w-[510px] pt-6 pb-5 pl-7 font-poppins font-medium text-base text-primary' type="email" placeholder='E-mail' />
                            </div>
                            <div className="flex flex-col gap-1">
                            <h4 className='font-poppins font-medium text-sm text-primary'>Message</h4>
                                <textarea className='outline-0 border-2 border-border-gray w-[510px] pt-12 pl-7 font-poppins font-medium text-base text-primary' placeholder='Type Your Message' rows={"10"}></textarea>
                            </div>
                    </div>
                </div>
                <div className="max-w-[635px] w-full flex h-16 mt-[134px]  border border-primary-blue rounded justify-between items-center m-auto">
                    <input className='font-proxima font-normal text-lg text-primary flex pl-[21px] outline-0' type="text" placeholder='Search query...' />
                    <button className='max-w-[127px] w-full bg-primary-blue h-16 rounded-r font-poppins font-semibold text-xl  text-light-white'>Search</button>
                </div>
            </div>
        </>
    )
}

export default Contact
