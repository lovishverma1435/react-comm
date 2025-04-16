import React from 'react'
import Adidasshoe from "../component/cards/Adidasshoe"
import { Link } from 'react-router-dom'

const Adidasshoes = ({ data }) => {
    return (
        <>
                <div className="flex max-w-[1920px] w-full mt-[92px] bg-primary-blue">
            <div className="container">
                    <div className="">
                        {
                            data.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.path}>
                                    {

                                        <Adidasshoe image={item.image} max={"592px"} title={item.title} details={item.details} shop={item.shop} titleclass={"font-poppins font-medium text-[55px] text-white"} imageclass={"absolute -top-[91px] -right-28 max-w-[794px] w-full "} detailsclass={"font-poppins font-normal text-2xl  text-white"} sizeclass={"flex flex-col max-w-[592px] w-full py-[163px] gap-3 "}/>
                                    }
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

export default Adidasshoes
