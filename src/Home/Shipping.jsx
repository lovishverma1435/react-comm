import React, { useEffect } from 'react'
import shipping from "../json/shipping.json"
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";
const Shipping = () => {
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
        <div className="flex mt-[97px] mb-[121px]" data-aos="flip-left">
            <div className="flex w-full justify-evenly">
                {
                    shipping.map((item,index) => (
                        <div key={index}>
                            <Link to={item.path}>
                            <div className="flex items-center flex-col  max-w-[194px] w-full">
                                <img className='pb-[54px]' src={`/public/assets/Icon/${item.image}`} alt="" />
                                <div className="flex flex-col gap-3">
                                <h1 className='font-poppins font-medium text-[27px]'>{item.title}</h1>
                                <h1 className='font-proxima font-normal text-lg text-center'>{item.details}</h1>
                            </div>
                            </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
        </div> 
    </>
  )
}

export default Shipping
