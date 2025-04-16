import React from 'react'
import Rectangle from "../assets/Rectangle 2079.png"
import footer from "../assets/footer.png"

const links=[
    {title:"home", to:"#"},
    {title:"Contact Us", to:"#"},
    {title:"Gallery", to:"#"},
    {title:"Service", to:"#"},
    {title:"How it works", to:"#"},
    {title:"Privacy", to:"#"},
    {title:"Term & Service", to:"#"}
]

const Footer = () => {
  return (
    <div className="layout h-[118.57px] mb-[20px]">
      <div className="flex justify-between items-center my-[20px]">
        <div className="flex items-start gap-0 flex-col w-[85.69px] h-[28.57px]">
          <img src={Rectangle} alt="rec" />
          <div className="flex items-center gap-0">
            <img src={footer} alt="foot" />
            <p className="text-[9.08px]">Trex cars</p>
          </div>
        </div>
        <div className='flex gap-6 items-center capitalize font-[500] text-[16px] text-[#2f2f2f] font-satoshi'>
          {links.map((link, index) => {
            return (
              <a key={index} href={link.to} className="underline">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
      <p className="text-[15px] font-[400] font-satoshi text-[#2f2f2f] text-justify ">
        This website is owned and operated by Masref Ltd., incorporated in the
        United Kingdom The information provided is not legally binding and does
        not constitute an offering, endorsement, recommendation or solicitation
        to enter into any type of financial transaction in this or in any other
        jurisdiction in which such solicitation or offer would be unlawful under
        the laws of such jurisdiction.
      </p>
    </div>
  );
}

export default Footer