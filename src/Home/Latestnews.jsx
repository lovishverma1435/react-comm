import React from 'react'
import latest from "../json/latestnews.json"
import { Link } from 'react-router-dom'
const Latestnews = () => {
    return (
        <>
            <div className="container">
                <div className="flex w-full justify-center pb-[72px] ">
                    <h1 className='font-poppins font-semibold text-[34px]'>LATEST NEWS</h1>
                </div>
                <div className="flex justify-between">
                    {
                        latest.map((item, index) => (
                            <div key={index}>
                                <Link to={item.path}>
                                    <div className="flex items-center gap-4">
                                        <img src={`/public/assets/Icon/${item.image}`} alt="" />
                                        <div className="flex flex-col max-w-[198px] w-full ">
                                            <h4 className='font-poppins font-normal text-lg text-light-gray'>{item.date}</h4>
                                            <h4 className='font-poppins font-semibold text-[22px] text-primary-dark'>{item.title}</h4>
                                            <h4 className='font-proxima font-normal text-lg text-primary-dark'>{item.details}</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Latestnews
