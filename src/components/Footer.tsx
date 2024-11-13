"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");


  return (
    <div>
      <div className="bg-[#041919] relative mx-auto my-0 py-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 max-sm:grid-cols-1 items-center">
            <div className="">
              <h1 className="text-[25px] font-bold leading-[45.5px] text-[#fff] relative mx-auto my-0">
              {t('newsletterTitle')}
              </h1>
              <p className="text-[12px] font-normal leading-[21.84px] text-[#9eafc3] relative mx-auto my-0 max-sm:my-5">
              {t('ابق علي اطلاع بآخر الخدمات والاخبار والفعاليات عبر لاشتراك')}
              </p>
            </div>
            <div className="">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <img src="/images/VectorMails.svg" />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="footer_input"
                    placeholder={t('سجل هنا بريدك الالكتروني')}
                  />
                </div>
                <button className="marge bg-green-500 text-white rtl:rounded-l-lg ltr:rounded-r-lg px-4 py-[12px] text-sm max-xs:text-[6px] hover:bg-green-600 focus:ring-2 focus:ring-green-400 ">
                {t('اشترك الان')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#093735] relative mx-auto my-0 py-5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 items-center">
            <div className="link">
              <ul className="flex">
                <li>
                  <a
                    href="#"
                    className="text-[12px] font-medium leading-[21.84px] text-[#fff] relative mx-auto my-0"
                  >
                    {t('الشروط والأحكام')}
                    </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[12px] font-medium leading-[21.84px] text-[#fff] relative mx-auto my-0"
                  >
                    {t('سياسة الخصوصية')}
                    </a>
                </li>
              </ul>
            </div>
            <div className="social max-sm:my-5">
              <ul className="flex justify-center">
                <li>
                  <a href="#">
                    <img src="/images/instagram.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/linkedin-02.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/new-twitter.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/snapchat.svg" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="text-[12px] font-medium leading-[21.84px] text-[#fff] relative mx-auto my-0 max-sm:text-center rtl:lg:text-left ltr:lg:text-right">
              {t('جميع الحقوق محفوظة لمركز إنجاز المتحدة للتدريب 2024')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
