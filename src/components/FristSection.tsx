import React from 'react'
import { TFunction } from "i18next";

type FristSectionProps = {
    t: TFunction;
  };
  
const FristSection = ({ t }: FristSectionProps) => {
  return (
    <div className="main-container h-[1037px] relative mx-auto my-0 overflow-hidden">
    <div className="max-sm:small_width w-[600.966px] h-[600.966px] bg-[url(/images/ac37745d-e459-4a81-8c23-a5fc334008ee.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[-238px] left-[1431px] z-[5]" />
    <div className="max-sm:small_width w-[425px] h-[425px] bg-[url(/images/0120d748-23da-4186-8e7d-0f4164a8fe35.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[-174px] left-[-279px] z-[4]" />
    <div className="max-sm:small_width w-[1100.95px] h-[1040.681px] bg-[url(/images/5f85de9e-ecd0-4605-93f5-82fce750037d.png)] bg-cover bg-no-repeat absolute top-[-114.999px] left-[-519.001px] z-[3]" />

    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/Video.mp4"
      autoPlay
      loop
      muted
    ></video>

    <div className="max-sm:small_width w-[957.924px] h-[921.962px] bg-[url(/images/354ae75d-e0ca-4e7b-95e8-cd4ba2205a4a.png)] bg-cover bg-no-repeat absolute top-[115.001px] left-[1088px] z-[2]" />
    <div className="max-sm:small_width w-[310px] h-[310px] bg-[url(/images/d16625af-e260-44a7-a0cd-64a97964166c.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[388px] left-[187px] z-[6]" />
    <div className="max-sm:small_width flex w-[814px] h-[306px] flex-col gap-[40px] items-center flex-nowrap absolute top-[463px] left-1/2 translate-x-[-50.12%] translate-y-0 z-[7]">
      <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[8]">
        <div className="max-sm:small_size max-sm:small_size  max-md:small_size lg:lg_size shrink-0 font-bold leading-[85px] tracking-[1.2px] relative text-center whitespace-nowrap z-[9]">
          <span className="max-sm:small_size  max-md:small_size lg:lg_size font-bold leading-[85px] text-[#fff] tracking-[1.2px] relative text-center inline-block">
            
            {t("ارتقِ بمهاراتك إلى آفاق")}
          </span>
          <span className="max-sm:small_size  max-md:small_size lg:lg_size font-bold leading-[85px] text-[#15b86c] tracking-[1.2px] relative text-center">
            جديدة
          </span>
        </div>
        <div className=" max-sm:small_size lg:lg_size shrink-0 text-[23px] font-normal leading-[64px] tracking-[0.46px] relative text-center z-10">
          <span className="text-[23px] font-normal leading-[64px] text-[#fff] tracking-[0.46px] relative text-center inline-block">
            مع
          </span>
          <span className="text-[28px] font-semibold leading-[64px] text-[#15b86c] tracking-[0.56px] relative text-center inline-block">
            مركز إنجاز المتحدة للتدريب
          </span>
          <span className="text-[23px] font-normal leading-[64px] text-[#fff] tracking-[0.46px] relative text-center">
            حيث يلتقي الإبداع بالتميز.
            <p>اكتشف إمكانياتك وحقق أهدافك</p>
          </span>
        </div>
      </div>
      <button className="max-sm:small_width flex w-[172px] h-[45px] pt-[11px] pr-[46px] pb-[11px] pl-[46px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#07170f] rounded-[45px] border-solid border border-[#15cf79] relative z-[11] pointer">
        <span className="max-sm:small_width flex w-[52px] h-[22px] justify-center items-start shrink-0 basis-auto text-[12px] font-normal leading-[21.84px] text-[#15b86c] relative text-center whitespace-nowrap z-[12]">
          إقرأ المزيد
        </span>
      </button>
    </div>
    <div className="max-sm:small_width w-[316.057px] h-[14.096px] bg-[url(/images/ef2aea87-650c-4b05-a805-9e916c7536e4.png)] bg-cover bg-no-repeat absolute top-[620.853px] left-[779.998px] z-[1]" />
    <div className="w-[56px] h-[56px] bg-[url(/images/2deff829bc5993445fe9cb9f12a2f0bac3023cc2.png)] bg-cover bg-no-repeat absolute top-[965px] left-1/2 translate-x-[-51.79%] translate-y-0 z-[13]" />
  </div>
  )
}

export default FristSection
