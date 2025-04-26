import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
const Banner = () => {
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
            <div className="bg-[url('public/assets/Images/PromotionImage.png')] bg-cover bg-no-repeat" data-aos="fade-down-right">
                <div className="container">
                    <div className="flex max-w-[573px] w-full pt-[259px] pb-[166px]" data-aos="fade-down-right">
                        <h1 className='font-poppins font-bold text-[64px] leading-[150%] tracking-[0.5px] text-white'>Super Flash Sale 50% Off</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
