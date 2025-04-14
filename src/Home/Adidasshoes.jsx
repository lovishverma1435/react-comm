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

                                        <Adidasshoe image={item.image} title={item.title} details={item.details} shop={item.shop} />
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
