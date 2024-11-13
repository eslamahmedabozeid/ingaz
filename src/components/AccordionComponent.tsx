/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AccordionComponent = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      {/* Accordion Item 1 */}
      <div className="border-b border-gray-700 rounded-t-lg overflow-hidden">
        <button
          onClick={() => toggleAccordion(0)}
          className="flex items-center justify-between w-full p-4 rounded-t-lg"
          style={{
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.06) 100%)",
          }}
        >
          {openIndex === 0 ? (
            <img src="/images/Frame43570.svg" alt="Open Icon" />
          ) : (
            <span className="text-white font-semibold">
              {t("التعلم الإلكتروني المتقدم")}
            </span>
          )}
          <span className="text-white">
            <img
              src={
                openIndex === 0
                  ? "/images/elementsclose.svg"
                  : "/images/elements.svg"
              }
              alt="Toggle Icon"
              className="w-5 h-5"
            />
          </span>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out ${
            openIndex === 0 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {openIndex === 0 && (
            <div
              className="p-4 text-gray-300"
              style={{
                background:
                  "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.06) 100%)",
              }}
            >
              <h1 className="text-[16px] font-black text-[#fff]">
                {t("التعلم الإلكتروني المتقدم")}
              </h1>
              <p className="text-[12px] font-black text-white-40 mt-4">
                {t(
                  "التعلم الإلكتروني المتقدم، يستخدم منصات تفاعلية ومحاكاة ليوفر تجربة تدريب مرنة ومخصصة. يسهل على المتدربين من الوصول إلى الدورات واكتساب المهارات العملية في بيئة تفاعلية مشابهة للواقع."
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b border-gray-700 rounded-t-lg overflow-hidden">
        <button
          onClick={() => toggleAccordion(1)}
          className="flex items-center justify-between w-full p-4 rounded-t-lg"
          style={{
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.06) 100%)",
          }}
        >
          {openIndex === 1 ? (
            <img src="/images/Frame43570.svg" alt="Open Icon" />
          ) : (
            <span className="text-white font-semibold">
              {t("التدريب الذكي على الأجهزة المحمولة")}
            </span>
          )}
          <span className="text-white">
            <img
              src={
                openIndex === 1
                  ? "/images/elementsclose.svg"
                  : "/images/elements.svg"
              }
              alt="Toggle Icon"
              className="w-5 h-5"
            />
          </span>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out ${
            openIndex === 1 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {openIndex === 1 && (
            <div
              className="p-4 text-gray-300"
              style={{
                background:
                  "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.06) 100%)",
              }}
            >
              <h1 className="text-[16px] font-black text-[#fff]">
                {t("نظام التدريب الذكي على الأجهزة المحمولة")}
              </h1>
              <p className="text-[12px] font-black text-white-40 mt-4">
                {t(
                  "تتيح التفاعلية ويتيح للمتدربين الوصول إلى المحتوى أينما كانوا لاكتساب مهارات جديدة بشكل فعال ومباشر."
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border-b border-gray-700 rounded-t-lg overflow-hidden">
        <button
          onClick={() => toggleAccordion(2)}
          className="flex items-center justify-between w-full p-4 rounded-t-lg"
          style={{
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.06) 100%)",
          }}
        >
          {openIndex === 2 ? (
            <img src="/images/Frame43570.svg" alt="Open Icon" />
          ) : (
            <span className="text-white font-semibold">
              {t("التدريب الذكي على الأجهزة المحمولة")}
            </span>
          )}
          <span className="text-white">
            <img
              src={
                openIndex === 2
                  ? "/images/elementsclose.svg"
                  : "/images/elements.svg"
              }
              alt="Toggle Icon"
              className="w-5 h-5"
            />
          </span>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out ${
            openIndex === 2 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {openIndex === 2 && (
            <div
              className="p-4 text-gray-300"
              style={{
                background:
                  "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.06) 100%)",
              }}
            >
              <h1 className="text-[16px] font-black text-[#fff]">
                {t("نظام التدريب الذكي على الأجهزة المحمولة")}
              </h1>
              <p className="text-[12px] font-black text-white-40 mt-4">
                {t(
                  "تتيح التفاعلية ويتيح للمتدربين الوصول إلى المحتوى أينما كانوا لاكتساب مهارات جديدة بشكل فعال ومباشر."
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
