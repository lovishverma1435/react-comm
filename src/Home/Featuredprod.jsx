import React, { useEffect } from 'react'
import featured from "../json/featured.json"
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";
const Featuredprod = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            offset: 0,
        });

        const handleScroll = () => {
            Aos.refresh();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="container">
                <div className="" data-aos="zoom-in">
                    <div className="flex w-full justify-center pb-[72px] pt-[110px]">
                        <h1 className='font-poppins font-semibold text-[34px]'>FEATURED PRODUCTS</h1>
                    </div>
                    <div className="flex justify-between">
                        {
                            featured.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                        <div className="flex gap-10">
                                            <img src={`/public/assets/Images/${item.image}`} alt="" />
                                            <div className="flex flex-col gap-4">
                                                <h1 className='font-proxima font-normal text-[22px] text-primary'>{item.title}</h1>
                                                <img className='max-w-[86px] w-full' src={`/public/assets/Icon/${item.ratting}`} alt="" />
                                                <div className="flex gap-2">
                                                    <h4 className='font-poppins font-medium text-xl text-primary-red'>{item.offprice}</h4>
                                                    <h4 className='font-proxima font-normal text-xl line-through text-light-gray'>{item.price}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="max-w-[635px] w-full flex h-16 mt-[110px] mb-[95px] border border-primary-blue rounded justify-between items-center m-auto">
                        <input className='font-proxima font-normal text-lg text-primary flex pl-[21px] outline-0' type="text" placeholder='Search query...' />
                        <button className='max-w-[127px] w-full bg-primary-blue h-16 rounded-r font-poppins font-semibold text-xl  text-light-white'>Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featuredprod
