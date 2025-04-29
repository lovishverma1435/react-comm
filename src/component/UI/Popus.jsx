import React, { useState } from "react";
import backimg from "../../../public/assets/Icon/leftarrow.svg";
import cross from "../../../public/assets/Icon/times.svg";
import cartjson from "../../json/cart.json"
import Carddetails from "./Carddetails";
import Confirm from "./Confirm";
import Input from "./Input";
const Popupcart = ({ data }) => {
  const [button,setbutton]=useState(0)
        const [click, setclick] = useState(false);
  
  return (
    <>
      <section>
        <main>
          <div className="w-[1021px]  bg-white p-[41.19px_97.59px_78.34px_68.23px] rounded">
            <div className="flex flex-col">
              <div className="flex w-full justify-between items-center pb-0.5">
                <div onClick={()=>(button === 1 ? setbutton(false)  : button ===2  ?  setbutton(1) : setbutton(false))} className="w-[40px] h-[40px] cursor-pointer flex justify-center items-center">
                  <img  src={backimg} alt="back" />
                </div>
                <div
                  onClick={data}
                  className="w-[40px] h-[40px] cursor-pointer  flex justify-center items-center"
                >
                  <img src={cross} alt="cross" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[43.22px] justify-center items-center pb-[40px]">
              <h4 className="flex justify-center items-center text-primary-blue font-Raleway font-[600] text-[32px]">
                Make Payment
              </h4>
              <div className="flex justify-between relative  w-[155px]  items-center font-Nunito font-bold text-[18px] tracking-[-2%] text-white">
                <div className={`${ button ===2 ? "bg-primary-blue" :"bg-[#dfdede]"} w-[50px] h-[2px] absolute right-6 bg-[#dfdede]`}></div>
                <div className={`${button===1 ? "bg-primary-blue" : button ===2 ? "bg-primary-blue" :"bg-[#dfdede]"} w-[50px] h-[2px] absolute left-6 bg-[#dfdede]`}></div>
                <div className="bg-primary-blue z-10 w-[36px] h-[36px] rounded-full flex justify-center items-center">
                  <h4>1</h4>
                </div>
                <div className={`${button===1 ? "bg-primary-blue" : button ===2 ? "bg-primary-blue" :"bg-[#dfdede]"} bg-[#dfdede] z-10 w-[36px] h-[36px] rounded-full flex justify-center items-center`}>
                  <h4>2</h4>
                </div>
                <div className={`${ button ===2 ? "bg-primary-blue" :"bg-[#dfdede]"} bg-[#dfdede] z-10   w-[36px] h-[36px] rounded-full flex justify-center items-center`}>
                  <h4>3</h4>
                </div>
              </div>
            </div>

            {

                // ///////////////////////////////////////////////////////////////////////////
            button === 1 ?
            
            
            <Carddetails valuesec={()=>setbutton(2)}/>
            
            //////////////////////////////////////////////////////////////////////
            
            : button === 2 ?  
          <Confirm data={data}/>
            
            :
            // <Paymenydetails valuefirst={()=>setbutton(1)}/>

            (<>
            
              <div className="flex justify-between pl-[20px] pb-[27px]">
                 <div className="flex flex-col max-w-[380px] w-full">
                   <div className="flex flex-col gap-[33px] mb-[24px]">
                     <Input
                       classname={" w-full "}
                       placeholder={"First Name"}
                       type={"text"}
                     />
                     <Input
                       classname={" w-full "}
                       placeholder={"Email Address"}
                       type={"email"}
                     />
                   </div>
                   <div className="flex flex-col gap-[14.25px]">
                     <h4 className="font-Raleway font-[600] text-xl text-primary-blue">
                       Select Method of Payment
                     </h4>
                     <div className="flex flex-col">
                       {cartjson.makepayment.map((item, index) => (
                         <div key={Date.now() + item + index}>
                           <div
                             onClick={() => setclick(index)}
                             className={`${
                               click === index ? "bg-[#EBF0FF]" : "bg-white"
                             } p-[16px_13px_16px_16.16px] flex transition-all cursor-pointer duration-200 rounded justify-between items-center `}
                           >
                             <div className="flex items-center gap-[19px]">
                               <img src={`/public/assets/Icon/${item.image}`} alt="image" />
                               <h4 className="font-poppins font-bold text-[12px] leading-[150%] tracking-[0.5px] text-natural-blue">
                                 {item.title}
                               </h4>
                             </div>
                             <div
                               className={`${
                                 click === index ? "bg-[#EBF0FF]" : "bg-white"
                               } transition-all duration-200 w-[24px] h-[24px] flex justify-center items-center border-[1px] border-buttongray rounded cursor-pointer`}
                             >
                               {click === index ? (
                                 <>
                                   <img
                                     src={"../../../public/assets/Icon/trueicon.svg"}
                                     alt="imagestrue"
                                   />
                                 </>
                               ) : (
                                 ""
                               )}
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
                   <div className="w-[383px]">
                   <Input
                       classname={" w-full mb-[39.41px] "}
                       placeholder={"Last Name"}
                       type={"text"}
                     />
                      <Input
                       classname={" w-full p-[26px_0_75px_14px] mb-[27.49px] "}
                       placeholder={"Address for Delivery"}
                       type={"text"}
                     />
                     <Input
                       classname={" w-full  "}
                       placeholder={"Mobile Phone"}
                       type={"number"}
                     />
                   </div>
               </div>
               <button onClick={()=>setbutton(1)}  className={` w-[338px] flex justify-center m-auto font-Nunito font-[800] text-2xl tracking-[-2%] items-center bg-skyblue  rounded text-white cursor-pointer h-[70px]`}>Go to Payment</button>
              
              </>)
      
            ////////////////////////////////////////////////////
           }
           
        
          </div>
        </main>
      </section>
    </>
  );
};

export default Popupcart;
