import React from 'react'

const Adidasshoe = ({ image, title, details, shop }) => {
    return (
        <>
            <div className="flex justify-between items-center relative">
                <div className="flex flex-col max-w-[592px] w-full py-[163px] gap-3">
                    <div className="flex flex-col gap-[23px]">
                        <h1 className='font-poppins font-medium text-[55px]  text-white'>{title}</h1>
                        <h5 className='font-poppins font-normal text-2xl  text-white'>{details}</h5>
                    </div>
                    <div className="flex justify-start border-b-2 border-white max-w-[111px] w-full">
                        <button className=' font-poppins font-semibold text-xl  text-white pb-[3px]'>{shop}</button>
                    </div>
                </div>
                <div className="absolute -top-[91px] -right-28 max-w-[794px] w-full">
                    <img className='' src={`/public/assets/Images/${image}`} alt="" />
                </div>
            </div>
        </>
    )
}

export default Adidasshoe
