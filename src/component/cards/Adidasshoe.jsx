import React from 'react'

const Adidasshoe = ({ image, title, details, shop,titleclass,imageclass,detailsclass,sizeclass }) => {
    return (
        <>
            <div className="flex justify-between items-center relative">
                <div className={`${sizeclass}`}>
                    <div className="flex flex-col gap-[23px]">
                        <h1 className={`${titleclass}`}>{title}</h1>
                        <h5 className={`${detailsclass}`}>{details}</h5>
                    </div>
                    <div className="flex justify-start border-b-2 border-white max-w-[111px] w-full">
                        <button className=' font-poppins font-semibold text-xl  text-white pb-[3px]'>{shop}</button>
                    </div>
                </div>
                <div className={`${imageclass}`}>
                    <img className='' src={`/public/assets/Images/${image}`} alt="" />
                </div>
            </div>
        </>
    )
}

export default Adidasshoe
