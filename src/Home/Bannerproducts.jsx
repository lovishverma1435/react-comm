import React from 'react'
import bag from "../../public/assets/Images/bagproduct.png"
import shoe from "../../public/assets/Images/shoeproduct.png"
import redshoe from "../../public/assets/Images/redshoeproduct.png"

const Bannerproducts = () => {
    return (
        <>
            <div className="container relative">
                <div className="flex absolute -top-[90px] bg-light-white rounded">
                    <div className="relative rounded-[5px] ">
                        <h1 className='absolute font-poppins font-bold text-xl leading-[150%] tracking-[0.5px] top-[29px] left-[52px] max-w-[202px] w-full'>FS - QUILTED MAXI CROSS BAG</h1>
                        <div className="">
                            <img src={bag} alt="" />
                        </div>
                        <div className="absolute flex bottom-14 left-[52px] gap-2 items-center">
                            <h4 className='font-poppins font-normal text-lg leading-[150%] tracking-[0.5px] line-through'>$534,33</h4>
                            <h4 className='font-poppins font-bold text-xl leading-[150%] tracking-[0.5px] text-primary-red'>24% Off</h4>
                        </div>
                        <h2 className='absolute flex font-proxima font-bold text-3xl leading-[180%] tracking-[0.5px] text-primary-blue bottom-4 right-[52px]'>$299,43</h2>
                    </div>
                    <div className="relative rounded-[5px]">
                        <div className="flex items-center">
                            <h1 className='absolute font-poppins font-bold text-xl leading-[150%] tracking-[0.5px] top-[29px] left-[52px] max-w-[202px] w-full'>FS - Nike Air Max 270 React...</h1>
                            <h1 className='absolute flex font-proxima font-bold text-3xl leading-[180%] tracking-[0.5px] text-primary-blue top-[29px] right-[52px]'>$299,43</h1>
                        </div>
                        <div className="absolute flex bottom-6 left-36 gap-2 items-center ">
                            <h4 className='font-poppins font-normal text-lg leading-[150%] tracking-[0.5px] line-through'>$534,33</h4>
                            <h4 className='font-poppins font-bold text-xl leading-[150%] tracking-[0.5px] text-primary-red'>24% Off</h4>
                        </div>
                        <div className="">
                            <img src={shoe} alt="" />
                        </div>
                    </div>
                    <div className="relative rounded-[5px]">
                        <div className="flex flex-col">
                        <h1 className='absolute font-poppins font-bold text-xl leading-[150%] tracking-[0.5px] top-[29px] left-[52px] max-w-[202px] w-full'>FS - Nike Air Max 270 React...</h1>
                        <div className="absolute flex top-24 left-[52px] gap-2 items-center ">
                            <h4 className='font-poppins font-normal text-lg leading-[150%] tracking-[0.5px] line-through'>$534,33</h4>
                            <h4 className='font-poppins font-bold text-xl leading-[150%] tracking-[0.5px] text-primary-red'>24% Off</h4>
                        </div>
                        </div>
                        <h2 className='absolute flex font-proxima font-bold text-3xl leading-[180%] tracking-[0.5px] text-primary-blue bottom-4 right-[52px]'>$299,43</h2>
                        <div className="">
                            <img src={redshoe} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bannerproducts
