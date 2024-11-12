/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import Swiper modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className="relative">
    <Swiper
      spaceBetween={12} 
      slidesPerView={1} 
      loop={true} 
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Autoplay, Navigation]} 
    >
      {[...Array(5)].map((_, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="bg-[url(/images/Groupz.png)] text-white p-10 rounded-lg shadow-lg max-w-sm text-center custom-bg">
            <p className="text-[14px] font-normal leading-[25.48px] text-[#fff] relative mx-auto my-0 text-right">
            لقد كانت تجربتنا مع إنجاز مذهلة! من تحليل الاحتياجات التدريبية إلى تنفيذ البرامج، كل شيء تم بشكل احترافي. لقد ساعدونا في تطوير مهارات فريقنا بشكل ملحوظ، ونحن نرى نتائج إيجابية في الأداء.
            </p>
            <div className="flex mt-4 pt-[43px]">
              <img
                src="/images/Ellipse822.svg"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div className="px-4">
                <p className="text-[17px] font-medium leading-[30.94px] text-[#fff] relative mx-auto my-0">اسم المستخدم</p>
                <p className="text-[12px] font-normal leading-[21.84px] text-[rgba(255,255,255,0.4)] relative mx-auto my-0 text-justify">طالب</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="flex justify-center mt-6 space-x-4 ltr">
        <button className="swiper-button-prev">
          <img src="/images/fi-rr-angle-small-left.svg" alt="Previous" className="w-8 h-8" />
        </button>
        <button className="swiper-button-next">
          <img src="/images/fi-rr-angle-small-right.svg" alt="Next" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
