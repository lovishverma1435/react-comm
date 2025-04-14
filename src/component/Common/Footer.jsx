import React from "react";
import footerjson from "../../json/footer.json";
import Westernunion from "../../../public/assets/Icon/Westernunion.svg";
import mastercard from "../../../public/assets/Icon/Mastercard.svg";
import Paypal from "../../../public/assets/Icon/Paypal.svg";
import visa from "../../../public/assets/Icon/visa.svg";
import visaname from "../../../public/assets/Icon/visaname.svg";
import visaclr from "../../../public/assets/Icon/visaclr.svg";

const Footer = () => {
  return (
    <footer className="pt-[100px] pb-[40px] bg-light-blue">
      <main>
        <div className="max-w-[1200px] w-full mx-auto flex flex-col px-4">
          <div className="w-full pb-16">
            <div className="flex flex-wrap justify-between gap-6">
              {footerjson.data.map((item, index) => (
                <div key={item + index + Date.now()} className="w-full sm:w-[48%] md:w-[30%] lg:w-auto">
                  <div className={`flex flex-col ${item.width || ''} ${item.gap || 'gap-3'}`}>
                    <div className="flex items-center gap-3">
                      {item.img && (
                        <img
                          className="w-[39px] h-[39px]"
                          src={item.img}
                          alt="icon"
                        />
                      )}
                      {item.heading ? (
                        <h4 className="font-poppins font-bold text-[18px] text-primary-dark">
                          {item.heading}
                        </h4>
                      ) : (
                        <div className="font-poppins font-[500]  text-[18px] text-primary-dark">{item.data}</div>
                      )}
                    </div>

                    {item.tittle ? (
                      <p className="font-proxima font-[500] text-[12px] text-primary-dark">
                        {item.tittle}
                      </p>
                    ) : (
                      <p className="font-proxima font-[400] text-[14px] text-primary-dark">
                        E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                      </p>
                    )}

                    {item.facebook && (
                      <div className="flex gap-6 ">
                        <img src="../../../public/assets/Icon/facebook.svg" alt="facebook" />
                        <img src="../../../public/assets/Icon/twitter.svg" alt="twitter" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-6 pb-12">
            {footerjson.information.map((item, index) => (
              <div key={Date.now() + item + index} className="w-full sm:w-[48%] md:w-auto">
                <div className="flex flex-col gap-4">
                  <h1 className="font-poppins font-normal text-[18px] text-primary-dark">
                    {item.heading}
                  </h1>
                  <div className="flex flex-col gap-1">
                    <p className="font-poppins font-[400] text-[14px] text-primary-dark">About Us</p>
                    <p className="font-poppins font-[400] text-[14px] text-primary-dark">Information</p>
                    <p className="font-poppins font-[400] text-[14px] text-primary-dark">Privacy Policy</p>
                    <p className="font-poppins font-[400] text-[14px] text-primary-dark">Terms & Conditions</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <span className="w-full h-[1px] bg-[#F6F7F8] mb-8"></span>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h1 className="text-lightgray-white font-poppins font-[400] text-[14px] text-center md:text-left">
              © 2018 Ecommerce theme by www.bisenbaev.com
            </h1>

            <div className="relative flex items-center gap-3 flex-wrap">
              <img src={Westernunion} alt="Westernunion" />
              <img src={mastercard} alt="mastercard" />
              <img src={Paypal} alt="Paypal" />

              <div className="relative w-[50px] h-[30px] flex justify-center items-center">
                <img className="absolute w-full h-full" src={visa} alt="visa" />
                <img className="absolute " src={visaname} alt="visa-name" />
                <img className="absolute top-[11px] left-[11px]" src={visaclr} alt="visa-sidebar" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
