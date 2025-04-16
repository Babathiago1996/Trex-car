import React from 'react'

const Experience = () => {
  return (
    <div className>
      <div className="layout h-[456px] ">
        <div className="max-w-[396px] h-[120px] mt-[20px] text-[20px] font-satoshi font-[700] text-[#1d1d1d]">
          <h1>Experience luxury </h1>
          <p>without compromises</p>
        </div>

        <div className="flex gap-[40px] layout items-center h-[298px]">
          <div className="shadow-lg w-full h-full  py-5 px-2 mx-auto ">
            <h2 className="mb-[20px]">Confort</h2>
            <p className=" mb-[30px]  max-w-[349px] text-[18px] font-[500px]">
              Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit.
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          <div className="shadow-lg shadow-red-500 w-full h-full  py-5 px-2 mx-auto">
            <h2 className="mb-[20px]">Insurance</h2>
            <p className="mb-[30px] max-w-[349px] text-[18px] font-[500px]">
              Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit.
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          <div className="shadow-lg w-full h-full  py-5 px-2 mx-auto">
            <h2 className="mb-[20px]">Commitment</h2>
            <p className=" mb-[30px] max-w-[349px] text-[18px] font-[500px]">
              Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit.
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center layout h-[97px] mb-[15px] ">
        <div className="px-2">
          <h2>Trusted by customers since 1990</h2>
        </div>

        <div className="flex items-center gap-[40px] px-2">
          <div >
            <p className="mb-2">Trusted customers 2000+</p>
            <h1 className="text-[18px] font-bold">2000+</h1>
          </div>
          <div>
            <p className="mb-2">Available cars</p>
            <h1 className="text-[18px] font-bold"> 134+</h1>
          </div>
          <div>
            <p className="mb-2">Total reservation</p>
            <h1 className="text-[18px] font-bold">134+</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience