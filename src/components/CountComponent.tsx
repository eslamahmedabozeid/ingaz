"use client";
import React from "react";
import CountUp from "react-countup";

const CountComponent = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className="borderground p-[32px] rounded-lg mx-4 hover:bg-[#093735] box-width">
        <p className="font-bold text-[#fff] text-[48px]">
          <CountUp end={3000} duration={2} prefix="+" />
        </p>
        <p className="mt-2 font-bold text-[#fff] text-[14px]">العملاء الراضين</p>
      </div>
      <div className="borderground p-[32px] rounded-lg">
        <p className="font-bold text-[#fff] text-[48px]">
          <CountUp end={200} duration={2} prefix="+" />
        </p>
        <p className="mt-2 font-bold text-[#fff] text-[14px]">دورة تدربية</p>
      </div>
      <div className="mx-4 my-[28px] flex items-center">
        <p className="mt-2 font-bold text-[#fff] text-[22px]">نبني الثقة من خلال جودة لا تضاهى وتجارب متميزة</p>
      </div>
      <div className="borderground p-[32px] rounded-lg my-[28px] box-width">
        <p className="font-bold text-[#fff] text-[48px]">
          <CountUp end={500} duration={2} prefix="+" />
        </p>
        <p className="mt-2 font-bold text-[#fff] text-[14px]">المشاريع المنجزة</p>
      </div>
      <div className="borderground p-[32px] rounded-lg mx-4 box-width">
        <p className="font-bold text-[#fff] text-[48px]">
          <CountUp end={6000} duration={2} prefix="+" />
        </p>
        <p className="mt-2 font-bold text-[#fff] text-[14px]">وظيفة</p>
      </div>
      <div className="borderground p-[32px] rounded-lg box-width">
        <p className="font-bold text-[#fff] text-[48px]">
          <CountUp end={700} duration={2} prefix="+" />
        </p>
        <p className="mt-2 font-bold text-[#fff] text-[14px]">مدربين خبراء</p>
      </div>
    </div>
  );
};

export default CountComponent;
