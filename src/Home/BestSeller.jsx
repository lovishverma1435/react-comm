import React from 'react'
import Bestsell from "../component/cards/Bestseller"
import bestselling from "../json/bestseeling.json"
import selling from "../json/bestsellimg.json"
import { NavLink } from 'react-router-dom'


const BestSeller = ({ info }) => {
    return (
        <>
            <div className="container">
                <div className="flex mt-80 flex-col gap-6">
                    <div className="flex flex-col items-center gap-[26px]">
                        <h1 className='font-poppins font-semibold text-[35px] leading-[100%]'>{info}</h1>
                        <div className="flex max-w-[627px] w-full justify-between">
                            {
                                bestselling.map((item, index) => (
                                    <NavLink key={index} to={item.path}>
                                        <h2 className='font-poppins font-normal text-[22px] leading-[100%] cursor-pointer'>{item.menu}</h2>
                                    </NavLink>
                                ))
                            }
                        </div>

                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        {
                            selling.dtaa.map((item, index) => (
                                <Bestsell key={index + Date.now() + item}
                                    image={item.image}
                                    title={item.title}
                                    offprice={item.offprice}
                                    price={item.price}
                                    offer={item.offer}
                                    ratting={item.ratting}
                                    hot={item.hot}
                                    varirent={true}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="flex items-center  border-b-2 border-primary-blue pt-6 max-w-[115px] w-full m-auto">
                    <span className=' text-primary-blue font-medium  text-xl leading-[100%] pb-[3px]'>LOAD MORE</span>
                </div>
            </div>
        </>
    )
}
export default BestSeller


