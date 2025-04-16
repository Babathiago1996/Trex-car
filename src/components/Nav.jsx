import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const links=[{title:"Home", to: "#"},
    {title:"Gallery", to: "#gallery"},
        {title:"Service", to: "#"},
            {title:"How it work", to: "#"}]
const Nav = () => {
const [isMenuOpen, setIsMenuOpen]=useState(false)

//   return (
//     <nav className="bg-[#090909AB] relative">
//       <div className="layout flex items-center justify-between h-[105px]">
// <div>
//     <img src={logo} alt="trex-logo" />
//         </div>
// <div className=" hidden lg:flex gap-[49px] text-[16px] font-bold text-[#fcfcfc]">
//           {
//           links.map((link, index) => {
//             return (
//               <a key={index} href={link.to}>
//                 {link.title}
//               </a>
//             );
//           })
//           }
//             </div>
// <div className="hidden lg:block">
//           <button className="bg-[#fdfdfd] w-[138px] h-[42px] rounded-[44px] text-[#1d1d1d] font-bold text-[16px]">
//             Contact Us
//           </button>
//         </div>
// <div className="block lg:hidden">
//           <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className="text-white">
//             {isMenuOpen ? <IoMenuSharp size={40} /> : <IoClose  size={40}/>}
//           </button>
//         </div>
//         {/* mobile screen menu */}
//         {
// isMenuOpen && (
//     <div className=' lg:hidden bg-black absolute top-[105px] w-1/2 left-0 p-2.5'>
//                <div className=" flex flex-col gap-[49px] text-[16px] font-bold text-[#fcfcfc]">
//           {links.map((link, index) => {
//             return (
//               <a key={index} href={link.to}>
//                 {link.title}
//               </a>
//             );
//           })}
//         </div> 
//         <button className='bg-[#fdfdfd] mt-[49px] w-[138px] h-[42px] rounded-[44px]'>Contact Us</button>
//             </div>
//         )}
//       </div>
//     </nav>
//   );
// }
return (
  <nav className="bg-[#090909AB] relative">
    <div className="layout flex justify-between items-center h-[105px]">
      <div>
        <img src={logo} alt="trex" />
      </div>
      <div className=" hidden lg:flex  lg:gap-[49px] items-center font-bold text-[16px] text-[#fcfcfc]">
        {links.map((link, index) => {
          return (
            <a key={index} href={link.to}>
              {link.title}
            </a>
          );
        })}
      </div>
      <div className="hidden lg:block">
        <button className="w-[138px] h-[42px] font-satoshi font-bold text-16px text-[#1d1d1d] rounded-[44px] bg-[#fdfdfd]">
          Contact Us
        </button>
      </div>
      <div className="lg:hidden block ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          {isMenuOpen ? <IoMenuSharp size={40} /> : <IoClose size={40} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden block absolute bg-black w-1/2 left-0 top-[105px] bg-black p-2.5 ">
          <div className="flex flex-col text-[16px] font-bold text-[#fcfcfc] gap-[49px] ">
            {links.map((link, index) => {
              return (
                <a key={index} href={link.to}>
                  {link.title}
                </a>
              );
            })}
          </div>
          <button className="bg-[#fdfdfd] mt-[49px] w-[138px] h-[42px] rounded-[44px]">Contact Us</button>
        </div>
      )}
    </div>
  </nav>
);
}

export default Nav