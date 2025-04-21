import React, { Fragment, useState } from 'react'
import Adidasshoes from '../../component/cards/Adidasshoe'
import data1 from "../../json/adidasshoe.json"
import hotdeals from "../../json/hotdeal.json"
import color from "../../json/color.json"
import brand from "../../json/brand.json"
import bagcard from "../../component/cards/Bestseller"
import { Link, NavLink } from 'react-router-dom'
import Bestseller from '../../component/cards/Bestseller'
import bestsellig from "../../json/bestsellimg.json"


const Bannertwo = () => {
  const [price, setPrice] = useState(13.99);
  const [isborder, setIsborder] = useState(false);
  const [isgrid, setisgrid] = useState(true)
  const [isrow, setisrow] = useState(false)
  const [data,setdata] = useState(false)



const onrow =()=>{

  setisgrid(false)
 setisrow(true)
}
const grid=()=>{
  setisrow(false)
  setisgrid(true)
}
  return (
    <>
      <div className="flex py-[14.5px] gap-2 justify-center bg-border-gray opacity-70">
        <h4 className='font-proxima font-normal text-lg text-primary-blue'>Home</h4>
        <span className='font-proxima font-normal text-lg text-light-gray'>/</span>
        <h4 className='font-proxima font-normal text-lg'>Hot Deal</h4>
      </div>
      <div className="container">
        <div className="flex gap-[31.32px] mt-[52px]">
          <div className="flex flex-col max-w-[270px] w-full gap-4">
            <div className="flex flex-col max-w-[270px] w-full bg-border-gray p-[19px_15px_26px_20px] rounded ">
              {
                hotdeals.heading.map((item, index) => (
                  <div key={index}>
                    <Link to={item.path}>
                      <div className="flex flex-col gap-[25px]">
                        <div className="font-poppins font-medium text-lg text-primary">{item.title}</div>
                        <div className="flex flex-col gap-5">
                          {
                            hotdeals.titles.map((item, index) => (
                              <div className='flex justify-between items-center ' key={index}>
                                <h4 onClick={() => setdata(index)} className={`font-proxima font-normal text-lg text-primary ${data === index && "text-primary-blue"}`}>{item.name}</h4>
                                <h4 className='font-proxima font-normal text-lg text-primary opacity-35'>{item.count}</h4>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col max-w-[270px] w-full bg-border-gray p-[19px_15px_26px_20px] rounded gap-5">
              <h1 className='font-poppins font-medium text-lg text-primary'>Prices</h1>
              <div className="flex w-full justify-between">
                <h4 className='font-proxima font-normal text-lg text-primary'>Range:</h4>
                <span>${price.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="13.99"
                max="25.99"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                className="
    w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:bg-blue-500
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:shadow-md
    [&::-webkit-slider-thumb]:transition
    [&::-webkit-slider-thumb]:duration-300

    [&::-moz-range-thumb]:w-4
    [&::-moz-range-thumb]:h-4
    [&::-moz-range-thumb]:bg-blue-500
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:border-none
  "
              />
            </div>
            <div className="flex flex-col max-w-[270px] w-full bg-border-gray p-[19px_15px_26px_20px] rounded gap-5">
              <h1 className='font-poppins font-medium text-lg text-primary'>Color</h1>
              <div className="flex gap-2">
                {
                  color &&
                  <div className="flex gap-5 pt-2">
                    {color.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className="flex items-center w-5 h-5 justify-center rounded-full"
                          style={{ border: `2px solid  ${isborder === index ? item?.color : "transparent"}` }}
                        >
                          <button
                            style={{ background: item.color }}
                            onClick={() => setIsborder(index)}
                            className={`${isborder === index ? "w-3 h-3" : "h-4 w-4"
                              } rounded-full`}
                          ></button>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                }
              </div>
            </div>
            <div className="flex flex-col max-w-[270px] w-full bg-border-gray p-[19px_15px_26px_20px] rounded gap-5">
              <h1 className='font-poppins font-medium text-lg text-primary'>Brand</h1>

              <div className="flex flex-col gap-5">
                {
                  brand.map((item, index) => (
                    <Fragment key={index}>
                      <Link to={item.path}>
                        <div className="flex w-full justify-between">
                          <h4 className='font-proxima font-normal text-lg text-primary'>{item.name}</h4>
                          <h4 className='font-proxima font-normal text-lg text-primary opacity-35'>{item.count}</h4>
                        </div>
                      </Link>
                    </Fragment>
                  ))
                }
              </div>
            </div>
            <div className="flex flex-col max-w-[270px] w-full bg-border-gray p-[19px_15px_16px_20px] rounded ">
              <h1 className='font-poppins font-medium text-lg text-primary flex justify-center items-center'>More</h1>
            </div>
          </div>
          <div className="flex flex-col gap-[26px] pb-12">
            <div className="flex max-w-[961px] w-full h-[298px] bg-primary-blue">
              <div className="">
                {
                  data1.map((item, index) => (
                    <div key={index}>
                      <Link to={item.path}>
                        {
                          <Adidasshoes image={item.image} title={item.title} details={item.details} shop={item.shop} titleclass={"font-poppins font-medium text-[30px] text-white"} imageclass={"absolute right-[-400px] -top-[35px]  max-w-[398px] w-full "} detailsclass={"font-poppins font-normal text-sm  text-white"} sizeclass={"flex flex-col max-w-[430px] w-full py-[58px] gap-6 pl-[110px]"} />
                        }
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="flex bg-border-gray rounded">
              {
                hotdeals.types.map((item, index) => (
                  <div key={index}>
                    <Link to={item.path}>
                      <div className="flex  w-[961.50px]">
                        <div className="flex gap-12 pt-[11px] pb-[9px] pl-[13px] items-center">
                          <div className="flex gap-1.5">
                            <h4 className='font-proxima font-normal text-base'>{bestsellig.data2.length}</h4>
                            <h1 className='font-proxima font-normal text-base'>{item.title}</h1>
                          </div>
                          <div className="flex justify-between items-center w-[421px]">
                            <div className="flex items-center gap-3 w-[192px]">
                              <h1 className='font-proxima font-normal w-[55px] text-base'>{item.sort}</h1>
                              <div className="flex gap-11 p-[10px_18px]">
                                <h1 className='font-proxima font-normal text-base'>{item.name}</h1>
                                <img src={`public/assets/Icon/${item.image}`} alt="grid" />
                              </div>
                            </div>
                            <div className="flex gap-1 items-center">
                              <h1 className='font-proxima font-normal text-base'>{item.show}</h1>
                              <div className="flex gap-11 p-[10px_18px]">
                                <h4 className='font-proxima font-normal text-base'>{bestsellig.data2.length}</h4>
                                <img src={`public/assets/Icon/${item.image}`} alt="grid" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full justify-end">
                          <button onClick={grid}>
                          <img className='p-[19px_17px]' src={`/public/assets/Icon/${item.grid}`} alt="" />
                          </button>
                          <button onClick={onrow}>
                          <img className='p-[19px_17px]' src={`/public/assets/Icon/${item.bar}`} alt="" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </div>
            <div className={`${isgrid ? "block " :"hidden"} grid grid-cols-3 gap-5 `}>
              {
                bestsellig.data2.map((item, index) => (
                  <Bestseller image={item.image}
                    title={item.title}
                    offprice={item.offprice}
                    price={item.price}
                    offer={item.offer}
                    ratting={item.ratting}
                    hot={item.hot}
                    varirent={false} />
                ))
              }
            </div>
            <div className={`${isrow ? "block z-50" : "hidden -z-10"} flex flex-col` }>
              {
                bestsellig.data3.map((item, index) => (
                  <div className={`max-w-[870px] w-full border-border-gray pt-[30px] pb-[26px] flex  ${index <= 2 ? "border-b-2 " :"border-none"}`} key={index}>
                    <Link to={item.path}>
                      <div className="flex gap-[14px]">
                        {<> <Link to={"/nikeairmax"}>
                          <img src={`/public/assets/Images/${item.image}`} alt="image" />
                        </Link></>
                        }
                        
                        <div className="flex flex-col">
                          <h1 className='font-poppins font-medium text-2xl text-primary'>{item.title}</h1>
                          <div className="flex items-center pt-[14px] pb-5 border-b-2 border-border-gray max-w-[470px] w-full gap-[15px]">
                            <img className='max-w-[72px] w-full' src={`/public/assets/Icon/${item.ratting}`} alt="image" />
                            <h4 className='font-proxima font-normal text-sm text-light-gray'>{item.review}</h4>
                            <h4 className='font-proxima font-normal text-sm text-primary-blue'>{item.submitreview}</h4>
                          </div>
                          <div className="flex pt-[10px] pb-5 items-center gap-[9px]">
                            <h4 className='font-poppins font-bold text-xl tracking-[0.5px] text-primary-blue leading-[180%]'>{item.offprice}</h4>
                            <h4 className='font-poppins font-medium text-sm tracking-[0.5px] text-natural-gray leading-[150%] line-through'>{item.price}</h4>
                            <h4 className='font-poppins font-bold text-sm tracking-[0.5px] text-primary-red leading-[150%]'>{item.offer}</h4>
                          </div>
                          <h4 className='font-poppins font-medium text-sm text-primary max-w-[652px] w-full'>{item.description}</h4>
                          <div className="flex items-center gap-4">
                          <button className="flex items-center gap-2 bg-bg-blue  max-w-[150px] w-full py-[15px] justify-center rounded">
                            <img src={`/public/assets/Icon/${item.cart}`} alt="image" />
                            <h4 className='font-poppins font-medium text-sm text-primary-blue'>{item.addtocart}</h4>
                          </button>
                          <div className="flex bg-bg-blue p-[15px_26px_15px_20px]  rounded">
                            <img src={`/public/assets/Icon/${item.wishlist}`} alt="image" />
                          </div>
                          </div>
                        </div>
                      </div>
                      
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bannertwo
