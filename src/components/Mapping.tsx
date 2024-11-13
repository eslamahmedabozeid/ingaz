/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";

import { TFunction } from "i18next";

type MappingProps = {
  t: TFunction;
};


const Mapping = ({ t }: MappingProps) => {
  return (
    <div className="">
      <div className="bg-[url(/images/VectorMapping.png)] min-h-[727px] bg-no-repeat flex flex-col items-center">
        <a
          href=""
          className="flex flex-col justify-center items-center bg-[#093735] rounded-[8px] relative mx-auto my-0 pt-[12px] pr-[16px] rtl:pb-[12px] ltr:pb-[33px] pl-[16px] mt-[12%]"
        >
          <div className="w-[24px] h-[24px] shrink-0 bg-[url(/images/SA.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[1]" />
          <div className="flex flex-col gap-[4px] items-center shrink-0 flex-nowrap rounded-[8px] relative z-[2]">
            <span className="h-[25px] self-stretch shrink-0 basis-auto font-['29LT_Bukra'] text-[14px] font-semibold leading-[25px] text-[#fff] relative text-center whitespace-nowrap z-[3]">
            {t('الرياض')}
            </span>
            <span className="flex w-[104px] h-[40px] justify-center items-start shrink-0 font-['29LT_Bukra'] text-[12px] font-normal leading-[20px] text-[#fff] tracking-[0.24px] relative text-center z-[4]">
            {t('شارع الملك فيصل، الرياض، حي الحمراء')}
            </span>
          </div>
        </a>
      </div>

      <div className="container mt-16">
        <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 gap-[32px]">
          <div className="pt-[44px] pr-[24px] pb-[32px] pl-[24px] flex-col gap-[32px] items-center flex-nowrap bg-[#093735] rounded-[16px] relative mx-auto my-0 text-center">
            <img
              src="/images/FeaturedPhone.svg"
              className="absolute -top-6 left-[44%]"
            />
            <h2 className="text-[20px] font-semibold leading-[36px] text-[#fff] tracking-[0.4px] relative mx-auto my-0">
            {t('الاتصال الهاتفي')}
            </h2>
            <p className="text-[16px] font-normal leading-[29.12px] text-[#94969c] tracking-[0.32px] relative text-center py-6">
            {t('ساعات العمل: من الأحد إلى الخميس، من 9 صباحًا حتى 5 مساءً.')}
            </p>
            <a
              href="#"
              className="font-semibold leading-[29px] text-[#cecfd2] tracking-[0.32px] relative text-center underline whitespace-nowrap"
            >
              +1 (555) 000-0000{" "}
            </a>
          </div>

          <div className="pt-[44px] pr-[24px] pb-[32px] pl-[24px] flex-col gap-[32px] items-center flex-nowrap bg-[#093735] rounded-[16px] relative mx-auto my-0 text-center">
            <img
              src="/images/FeaturedMail.svg"
              className="absolute -top-6 left-[44%]"
            />
            <h2 className="text-[20px] font-semibold leading-[36px] text-[#fff] tracking-[0.4px] relative mx-auto my-0">
            {t('البريد الإلكتروني')}
            </h2>
            <p className="text-[16px] font-normal leading-[29.12px] text-[#94969c] tracking-[0.32px] relative text-center py-6">
            {t('الرد خلال 24 ساعة. لا تتردد في مراسلتنا لمزيد من المعلومات أو الدعم.')}
            </p>
            <a
              href="#"
              className="font-semibold leading-[29px] text-[#cecfd2] tracking-[0.32px] relative text-center underline whitespace-nowrap"
            >
              info@enjaz.com
            </a>
          </div>

          <div className="pt-[44px] pr-[24px] pb-[32px] pl-[24px] flex-col gap-[32px] items-center flex-nowrap bg-[#093735] rounded-[16px] relative mx-auto my-0 text-center">
            <img
              src="/images/FeaturedAddresicon.svg"
              className="absolute -top-6 left-[44%]"
            />
            <h2 className="text-[20px] font-semibold leading-[36px] text-[#fff] tracking-[0.4px] relative mx-auto my-0">
            {t('موقعنا')}

            </h2>
            <p className="text-[16px] font-normal leading-[29.12px] text-[#94969c] tracking-[0.32px] relative text-center py-6">
            {t('أوقات الزيارة: من الأحد إلى الخميس، من 9 صباحًا حتى 5 مساءً.')}
            </p>
            <a
              href="#"
              className="font-semibold leading-[29px] text-[#cecfd2] tracking-[0.32px] relative text-center underline whitespace-nowrap"
            >
              {t('الموقع على الخريطة')}
              </a>
          </div>
        </div>
        <div className="container w-full flex text-center pt-16">
          <span className=" bg-[#15b86c] rounded-[45px]  mx-auto my-0 flex justify-center items-start shrink-0 basis-auto font-['29LT_Bukra'] text-[12px] font-normal leading-[21.84px] text-[#303239] relative text-center whitespace-nowrap px-16 py-2">
          {t('تواصل معنا')}
          </span>
        </div>
      </div>

      <div className="lg:py-[200px] max-sm:pt-[8px]">
        <div className="">
          <div className="p-16 bg-[#093735]  rounded-[16px]">
            <div className="grid lg:grid-cols-2 max-sm:grid-cols-1">
              <div className="flex flex-col justify-center">
                <h1 className="max-xs:text-[25px] lg:text-[36px] font-semibold leading-[44px] text-[#fff] tracking-[0.72px] relative mx-auto my-0">
                {t('انضم إلى أكثر من 3000 شريك ناجح!')}
                </h1>
                <p className="max-sm:text-[12px] lg:text-[20px] font-normal leading-[36.4px] text-[#b2babf] tracking-[0.4px] relative mx-auto my-5">
                {t('سجّل الآن واحصل على حلول تدريبية واستشارية مخصصة لدعم نموك المؤسسي وتعزيز الكفاءات. نحن هنا لنساعدك على تحقيق أهدافك.')}
                </p>
                <div className="pt-10">
                  <span className=" bg-[#15b86c] rounded-[45px]  mx-auto my-0 items-start shrink-0 basis-auto font-['29LT_Bukra'] text-[12px] font-normal leading-[21.84px] text-[#303239] relative text-center whitespace-nowrap px-16 py-2">
                  {t('تسجيل')}
                  </span>
                </div>
              </div>
              <img src="/images/Vectorfooter.svg" className='w-full'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapping;
