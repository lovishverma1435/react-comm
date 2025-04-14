import React from 'react'

const Bestseller = ({ image, title, offprice, price, offer, ratting, hot }) => {
    return (
        <>
            <div className="flex flex-col justify-center relative rounded ">
                <div className="group">
                <img className='hover:opacity-30' src={`/public/assets/Images/${image}`} alt="image" />
                    <div className="absolute flex  gap-2 top-[121px] left-[100px] group-hover:w-[113px] w-0 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in ">
                        <img className='bg-light-white  border-2 border-light-blue  rounded-4xl p-2' src="/public/assets/Icon/hearts.svg" alt="heart" />
                        <img className='bg-light-white border-2 border-light-blue rounded-4xl p-2' src="/public/assets/Icon/cart2.svg" alt="heart" />
                    </div>
                    </div>
                <div className="flex flex-col gap-1.5 pt-2.5 border-[3px] border-border-gray border-t-0">
                    <h1 className='flex justify-center font-poppins font-bold text-lg leading-[150%] tracking-[0.5px]'>{title}</h1>
                    <div className="flex justify-center">
                        <img className=' max-w-[123.6px] w-full' src={`/public/assets/Icon/${ratting}`} alt="image" />
                    </div>
                    { hot !== undefined &&
                    <div className={`flex bg-secondary-red pt-2 pb-1.5 px-3.5 items-center justify-center absolute top-0 left-0 rounded`} >
                        <h2 className='flex font-proxima font-normal text-lg leading-[100%] text-white'>{hot}</h2>
                    </div>}
                    <div className="flex items-center justify-center gap-[13px]">
                        <h4 className=' font-poppins font-bold text-lg leading-[180%] tracking-[0.5px] text-primary-blue'>{price}</h4>
                        <div className="flex items-center gap-2">
                            <h4 className='font-poppins font-normal text-sm leading-[150%] tracking-[0.5px] text-shadow-light-gray'>{offprice}</h4>
                            <h4 className='font-poppins font-bold text-sm leading-[150%] tracking-[0.5px] text-primary-red'>{offer}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bestseller
