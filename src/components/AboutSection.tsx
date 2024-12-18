/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import CountUp from "react-countup";
import CountComponent from "./CountComponent";
import AccordionComponent from "./AccordionComponent";
import Testimonials from "./Testimonials";
import Trainingfields from "./Trainingfields";
import Mapping from "./Mapping";
import { TFunction } from "i18next";
import Link from 'next/link';


type AboutSectionProps = {
  t: TFunction;
};

const logos = [
  { src: "/images/logo1.png", alt: "Logo 1" },
  { src: "/images/logo2.png", alt: "Logo 2" },
  { src: "/images/logo3.png", alt: "Logo 3" },
  { src: "/images/logo4.png", alt: "Logo 4" },
  { src: "/images/logo5.png", alt: "Logo 5" },
  { src: "/images/logo6.png", alt: "Logo 6" },
  { src: "/images/logo7.png", alt: "Logo 7" },
  { src: "/images/logo8.png", alt: "Logo 8" },
  { src: "/images/logo9.png", alt: "Logo 9" },
  { src: "/images/logo10.png", alt: "Logo 10" }
];
const logoSecond = [
  { src: "/images/logo/logo.png", alt: "Logo" },
  { src: "/images/logo/logo1.png", alt: "Logo 1" },
  { src: "/images/logo/logo2.png", alt: "Logo 2" },
  { src: "/images/logo/logo3.png", alt: "Logo 3" },
  { src: "/images/logo/logo4.png", alt: "Logo 4" },
  { src: "/images/logo/logo5.png", alt: "Logo 5" },
  { src: "/images/logo/logo6.png", alt: "Logo 6" },
  { src: "/images/logo/logo7.png", alt: "Logo 7" },
  { src: "/images/logo/logo8.png", alt: "Logo 8" },
  { src: "/images/logo/logo9.png", alt: "Logo 9" },
  { src: "/images/logo/logo10.png", alt: "Logo 10" },
  { src: "/images/logo/logo11.png", alt: "Logo 11" },
  { src: "/images/logo/logo12.png", alt: "Logo 12" },
  { src: "/images/logo/logo13.png", alt: "Logo 13" },
  { src: "/images/logo/logo14.png", alt: "Logo 14" },
  { src: "/images/logo/logo15.png", alt: "Logo 15" },
  { src: "/images/logo/logo16.png", alt: "Logo 16" },
  { src: "/images/logo/logo17.png", alt: "Logo 17" },
  { src: "/images/logo/logo18.png", alt: "Logo 18" },
  { src: "/images/logo/logo19.png", alt: "Logo 19" },
  { src: "/images/logo/logo20.png", alt: "Logo 20" },
  { src: "/images/logo/logo21.png", alt: "Logo 21" },
  { src: "/images/logo/logo22.png", alt: "Logo 22" }
];
const AboutSection = ({ t }: AboutSectionProps) => {
  return (
    <div>
      <div className="main-container h-[358px] relative mx-auto my-0 pt-[65px]">
        <div className="container mx-auto relative bg-[#062120]">
          <div className="w-[197.753px] h-[313px] absolute top-0 right-[0] z-[1]">
            <div className="w-full h-[301px] absolute top-0 z-[17]">
              <div className="w-full h-[301px] bg-[url(/images/Group42806.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[1]" />
            </div>
            <div className="w-[127.781px] h-[26px] bg-[url(/images/0ae79d74-8688-41a9-a07f-2979e711ba70.png)] bg-cover bg-no-repeat absolute top-[287px] left-1 z-[21]" />
          </div>
          <div className="w-[197.753px] h-[313px] bg-[url(/images/0616458d-cfdd-4e93-a331-c1e8f3401f75.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[22]" />

          <div className="pt-[16px] md:pt-[57px]">
            <div className="flex w-full h-[188px] flex-col gap-[22px] items-end z-[3]">
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 relative z-[4]">
                <div className="flex sm:w-full flex-col  shrink-0 relative z-[5]">
                  <span className="text-[25px] font-bold leading-[45.5px] text-[#fff] tracking-[0.5px] lg:whitespace-nowrap z-[6]">
                    {t("تعرف علينا")}
                  </span>
                  <span className="text-[16px] font-medium leading-[29px] text-[#15b86c] tracking-[0.32px] lg:whitespace-nowrap z-[7]">
                    {t(
                      "إنجاز المتحدة للتدريب الرائدة في التدريب المؤسسي والتكنولوجيا التعليمية في منطقة الشرق الأوسط"
                    )}
                  </span>
                </div>
                <span className="flex w-full justify-end text-[12px] font-normal leading-[21.84px] text-[#fff] tracking-[0.24px] z-[8]">
                  {t(
                    "حيث نقدم أكثر الحلول شمولية في تطوير التعلم والتدريب في جميع الوظائف المؤسسية الاستراتيجية، بما في ذلك، الموارد البشرية، الموارد الرقمية والدورات المهنية والمتخصصة في جميع المجالات. من خلال جلسات تدريبية بقيادة مدربين، وتدريب داخل الشركات، والإرشاد، وأحدث الحلول التقنية في جميع أنحاء منطقة الشرق الأوسط نقدم لعملائنا الكرام مجموعة واسعة من الخدمات، بما في ذلك تحليل احتياجات التدريب"
                  )}
                </span>
              </div>

              <div className="w-full h-[39px] relative z-[9] mt-[22px]">
                <div className="flex w-full h-[39px] gap-[8px] items-center">
                  <div className="w-[39px] h-[39px] shrink-0 rounded-[99px] relative z-[11]">
                    <div className="flex w-[39px] h-[39px] p-[3px] bg-[#15b86c] rounded-full absolute top-0 left-0 z-[12]">
                      <div className="w-[35.575px] h-[32.785px] bg-[url(/images/82b499fe-f219-489a-9c2a-3a311eb7a5eb.png)] bg-cover relative z-[13]" />
                    </div>
                  </div>

                  <a
                    href="#"
                    className="flex w-[186.639px] h-[39px] px-[50px] justify-center items-center rounded-[45px] border border-[#15b86c] z-[14]"
                  >
                    <Link href="/About" className="text-[12px] font-normal leading-[21.84px] text-[#15b86c] z-[15]">
                      {t("إقرأ المزيد")}
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[358px] bg-[#062120] absolute top-0 left-0" />
      </div>

      {/* United Achievement */}
      <div className="pt-[200px] bg-custom-gradient">
        <div className="container mx-auto mt-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <img src="/images/Group43267.png" alt={t("صورة إنجاز")} />
            </div>
            <div>
              <h2 className="w-full text-[#fff] text-[30px] font-bold">
                {t("إنجاز المتحدة وجهتك لتنمية المهارات وتطوير المواهب")}
              </h2>
              <h3 className="w-full text-[#fff] text-[16px] font-bold mb-16">
                {t(
                  "حلول تدريبية مبتكرة تدعم النمو المؤسسي وتواكب متطلبات السوق"
                )}
              </h3>
              <p className="w-full text-white-40 text-[14px] mb-[52px]">
                {t(
                  "في مركز إنجاز المتحدة للتدريب، نركز على تقديم حلول تدريبية مبتكرة تعزز المهارات الشخصية، وتنمي المواهب من خلال برامج شاملة. نضمن جودة التدريب عبر استشارات مهنية واستراتيجية تدعم النمو المؤسسي. نلتزم بالتميز من خلال شراكات عالمية، ونطور منهجيات تدريبية مبتكرة تتماشى مع احتياجات السوق المتغيرة لتحقيق أفضل النتائج."
                )}
              </p>

              <div className="w-full h-[39px] relative z-[9] mt-[22px]">
                <div className="flex w-full h-[39px] gap-[8px] items-center">
                  <a
                    href="#"
                    className="flex w-[186.639px] h-[39px] pt-[8px] pr-[50px] pb-[8px] pl-[50px] gap-[8px] justify-center items-center rounded-[45px] border-solid border border-[#15b86c] relative z-[14]"
                  >
                    <span className="flex w-[52px] h-[22px] justify-center items-start text-[12px] font-normal leading-[21.84px] text-[#15b86c] text-center whitespace-nowrap z-[15]">
                      {t("إقرأ المزيد")}
                    </span>
                  </a>
                  <div className="w-[39px] h-[39px] rounded-[99px] relative z-[11]">
                    <div className="flex w-[39px] h-[39px] pt-[3px] pr-px pb-[3px] pl-px items-start bg-[#15b86c] rounded-[99px] absolute top-0 left-0 z-[12]">
                      <div className="w-[35.575px] h-[32.785px] bg-[url(/images/82b499fe-f219-489a-9c2a-3a311eb7a5eb.png)] bg-cover bg-no-repeat relative z-[13]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute lg:right-[-326px] z-0">
        <div className="lg:lg_absoulte rounded-large-circle bg-custom-circle blur-custom-blur"></div>
      </div>
      {/* Professional Accreditations */}
      <div className="lg:pt-[200px] max-sm:pt-[8px] bg-custom-gradient">
        <div className="container mx-auto mt-10 px-4">
          <h1 className="text-[25px] font-bold text-[#fff]">
            {t("الإعتمادات المهنية")}
          </h1>
          <p className="font-normal text-[12px] text-white-40">
            {t("شركاؤنا في الاعتماد المهني")}
          </p>
        </div>

        <div className="container mx-auto mt-10 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center transition-transform transform hover:scale-105 group"
              >
                <img
                  src={logo.src}
                  alt={t(logo.alt)}
                  className="max-w-full max-h-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-custom-logo rounded-full blur-custom-logo opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement in numbers */}
      <div className="absolute lg:left-[-326px] sm:left-[0] z-0">
        <div className="lg:lg_absoulte rounded-large-circle bg-custom-circle blur-custom-blur"></div>
      </div>
      <div className="lg:pt-[200px] max-sm:pt-[8px] bg-custom-gradient">
        <div className="container mx-auto mt-10 px-4">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <h1 className="text-[48px] font-bold tracking-[0.96px] text-[#FFF]">
              {t("إنــجاز فــي أرقــام")}
            </h1>
            <p className="text-[14px] font-normal text-white-40 w-[75%]">
              {t(
                "في مركز إنجاز المتحدة للتدريب، نركز على تقديم حلول تدريبية مبتكرة تعزز المهارات الشخصية، وتنمي المواهب من خلال برامج شاملة. نضمن جودة التدريب عبر استشارات مهنية واستراتيجية تدعم النمو المؤسسي. نلتزم بالتميز"
              )}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 bg-[url(/images/GroupCount.png)] bg-auto bg-no-repeat rtl:bg-[5%] ltr:bg-right pt-[61px] mt-[61px]">
          <CountComponent />
          </div>
        </div>
      </div>
      {/* Accordion */}
      <div className="pt-[200px] bg-custom-gradient">
        <div className="container-fluid mx-auto mt-10 px-4 relative">
          {/* Background Vector Image */}
          <img
            src="/images/Vector.png"
            alt="Background Vector"
            className="absolute top-[-158px] right-0 w-[54%] rtl:right-0 ltr:left-0"
          />

          <div className="container mx-auto mt-10 px-4">
            {/* Grid Layout for Accordion and Content */}
            <div className="grid  sm:grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Right Section: Image, Text, and Buttons */}
              <div className="flex flex-col space-y-6">
                {/* Image */}
                <div className="h-[337px] max-xs:h-[0]">
                  {/* <img src="/images/Vector.png" alt="Main Image" className="object-cover w-full h-full rounded-lg" /> */}
                </div>

                {/* Title and Description */}
                <h1 className="text-[#fff] font-bold text-[24px]">
                  {t("التكنولوجيا والابتكار في مركز إنجاز المتحدة للتدريب")}
                </h1>
                <p className="text-[12px] font-normal text-white opacity-70 w-[80%] mt-4">
                  {t(
                    "في مركز إنجاز المتحدة للتدريب، نعتبر التكنولوجيا والابتكار مفتاحاً لتحسين تجربة التعلم وتقديم حلول تدريبية متطورة. نحن ملتزمون بتوظيف أحدث التقنيات لرفع مستوى التدريب وتحقيق نتائج ملموسة. إليك كيف نستخدم التكنولوجيا والابتكار في تقديم خدماتنا."
                  )}
                </p>

                {/* Buttons Section */}
                <div className="flex items-center mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center w-[186px] h-[39px] rounded-full border border-[#15b86c] text-[#15b86c] text-[12px] font-normal"
                  >
                    {t("إقرأ المزيد")}
                  </a>
                  <div className="flex items-center justify-center w-[39px] h-[39px] bg-[#15b86c] rounded-full mx-4">
                    <div
                      className="w-[35px] h-[33px] bg-cover bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url(/images/82b499fe-f219-489a-9c2a-3a311eb7a5eb.png)"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Left Section: Accordion */}
              <div className="accordion">
                <AccordionComponent />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute lg:left-[-326px] sm:left-[0] z-0">
          <div className="lg:lg_absoulte rounded-large-circle bg-custom-circle blur-custom-blur"></div>
        </div>
      </div>

      {/* Service */}
      <div className="lg:pt-[200px] max-sm:pt-[8px] bg-custom-gradient">
        <div className="container mx-auto mt-10 px-4 relative">
          <div>
            <h1 className="text-[32px] font-bold text-[#fff]">
              {t("خدماتنا")}
            </h1>
            <img
              src="/images/Vector@2x.png"
              alt={t("خلفية المتجه")}
              className="absolute lg:top-[-249px] sm:right-0 lg:right-[119px] rtl:top-[-197px] rtl:max-xs:top-0 rtl:lg:right-[119px] rtl:sm:right-0 ltr:lg:right-[-114px] ltr:sm:right-0 ltr:top-[-240px] lg:w-full max-xs:relative"
            />
          </div>

          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-1 lg:w-[35%] mt-[19px]">
              <p className="font-normal text-[12px] text-white-40">
                {t(
                  "نقدم أكثر من 16 خدمة متكاملة لتطوير الأفراد والمؤسسات، تشمل التدريب المتخصص، التحليل الدقيق للاحتياجات، والتعلم الإلكتروني، وغيرها من الحلول المصممة لدعم النجاح المؤسسي."
                )}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center lg:mt-[140px] max-xs:mt-[50px]">
            <div className="p-[32px] borderground rounded-lg mx-4 hover:bg-[#093735] box-width lg:min-h-[378px]">
              <h4 className="text-[16px] text-[#fff] font-semibold">
                {t("تحليل الاحتياجات التدريبية")}
              </h4>
              <p className="text-[14px] text-[#fff] font-light mt-[32px]">
                {t(
                  "نقوم بتحليل دقيق للفجوات في المهارات والمعرفة لضمان تقديم حلول تدريبية مخصصة تحقق أهدافك بفاعلية"
                )}
              </p>
              <div className="mt-[89px]">
                <img
                  src="/images/Group17.svg"
                  alt={t("تحليل الاحتياجات التدريبية")}
                />
              </div>
            </div>

            <div className="p-[32px] borderground rounded-lg mx-4 hover:bg-[#093735] box-width lg:min-h-[378px]">
              <h4 className="text-[16px] text-[#fff] font-semibold">
                {t("تصميم وتنفيذ برامج مخصصة")}
              </h4>
              <p className="text-[14px] text-[#fff] font-light mt-[32px]">
                {t(
                  "نصمم برامج تدريبية شاملة ومتكاملة تتوافق مع احتياجاتك الاستراتيجية وتعزز من كفاءتك العملية"
                )}
              </p>
              <div className="mt-[89px]">
                <img
                  src="/images/Group18.svg"
                  alt={t("تصميم وتنفيذ برامج مخصصة")}
                />
              </div>
            </div>

            <div className="p-[32px] borderground rounded-lg mx-4 hover:bg-[#093735] box-width lg:min-h-[378px]">
              <h4 className="text-[16px] text-[#fff] font-semibold">
                {t("التعلم الإلكتروني")}
              </h4>
              <p className="text-[14px] text-[#fff] font-light mt-[32px]">
                {t(
                  "نمنحك فرصة التعلم في أي وقت ومن أي مكان عبر حلول تعليمية مرنة تتناسب مع جدولك"
                )}
              </p>
              <div className="mt-[89px]">
                <img src="/images/Group19.svg" alt={t("التعلم الإلكتروني")} />
              </div>
            </div>

            <div className="p-[32px] borderground rounded-lg mx-4 hover:bg-[#093735] box-width lg:min-h-[378px]">
              <h4 className="text-[16px] text-[#fff] font-semibold">
                {t("استشارات تحسين الأداء")}
              </h4>
              <p className="text-[14px] text-[#fff] font-light mt-[32px]">
                {t(
                  "نقدم استراتيجيات متقدمة لتحسين الأداء الفردي والمؤسسي، مما يضمن تحقيق أهدافك بكفاءة أعلى"
                )}
              </p>
              <div className="mt-[89px]">
                <img
                  src="/images/Group20.svg"
                  alt={t("استشارات تحسين الأداء")}
                />
              </div>
            </div>
          </div>

          <div className="absolute lg:left-[33%] z-0">
            <div className="lg:lg_absoulte rounded-large-circle bg-custom-circle blur-custom-blur"></div>
          </div>

          {/* Buttons Section */}
          <div className="flex items-center lg:mt-[111px] max-xs:mt-[28px]">
            <a
              href="#"
              className="flex items-center justify-center w-[186px] h-[39px] rounded-full border border-[#15b86c] text-[#15b86c] text-[12px] font-normal"
            >
              {t("عرض جميع الخدمات")}
            </a>
            <div className="flex items-center justify-center w-[39px] h-[39px] bg-[#15b86c] rounded-full mx-4">
              <div
                className="w-[35px] h-[33px] bg-cover bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/82b499fe-f219-489a-9c2a-3a311eb7a5eb.png)"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievement concept */}
      <div className="lg:pt-[200px] max-sm:pt-[8px] bg-custom-gradient">
        <div className="container  mx-auto mt-10 px-4 relative">
          <h1 className="text-[25px] font-bold text-[#fff]">
            {" "}
            {t("مفهوم إنجاز")}
          </h1>
          <p className="font-normal text-[12px] text-white-40 lg:w-[51%] max-xs:w-[100%] mt-[19px]">
            {t(
              "في مركز إنجاز المتحدة للتدريب، نركز على تقديم حلول تدريبية مبتكرة تعزز المهارات الشخصية، وتنمي المواهب من خلال برامج شاملة. نضمن جودة التدريب عبر استشارات مهنية واستراتيجية تدعم النمو المؤسسي. نلتزم بالتميز من خلال شراكات عالمية، ونطور منهجيات تدريبية مبتكرة تتماشى مع احتياجات السوق المتغيرة لتحقيق أفضل النتائج."
            )}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 mt-[80px]">
            <div className="">
              <div className="flex items-center">
                <h2 className="number_font">{t("إ")}</h2>
                <h2 className="title_font">{t("إبداع الحلول التدريبية")}</h2>
              </div>
              <div className="p-[19px]">
                <p className="X_font">
                  {t(
                    "نقدم حلولًا تدريبية مبتكرة لتعزيز المهارات الشخصية باستخدام منهجيات عالمية."
                  )}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h2 className="number_font">{t("ن")}</h2>
                <h2 className="title_font">{t("نماء المواهب")}</h2>
              </div>
              <div className="p-[19px]">
                <p className="X_font">
                  {t(
                    "ملتزمون بتطوير المواهب عبر برامج تدريبية شاملة تعزز المهارات وتفتح آفاقًا جديدة."
                  )}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h2 className="number_font">{t("ج")}</h2>
                <h2 className="title_font">{t("جودتنا في التدريب")}</h2>
              </div>
              <div className="p-[19px]">
                <p className="X_font">
                  {t("نقدم استشارات مهنية واستراتيجية تساهم في النمو المؤسسي.")}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h2 className="number_font">{t("ا")}</h2>
                <h2 className="title_font">{t("التزامنا بالتميز")}</h2>
              </div>
              <div className="p-[19px]">
                <p className="X_font">
                  {t(
                    "نقدم خدمات رائدة ونعمل بالتعاون مع القطاعات المهنية والشركات العالمية."
                  )}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h2 className="number_font">{t("ز")}</h2>
                <h2 className="title_font">{t("زوايا الابتكار")}</h2>
              </div>
              <div className="p-[19px]">
                <p className="X_font">
                  {t(
                    "نطور منهجيات تدريبية جديدة تتوافق مع احتياجات السوق المتغيرة."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute lg:left-[-326px] sm:left-[0] z-0">
        <div className="lg:lg_absoulte rounded-large-circle bg-custom-circle blur-custom-blur"></div>
      </div> */}

      {/* Testimonials */}
      <div className="lg:pt-[200px] max-sm:pt-[8px] bg-custom-gradient">
        <div className="container  mx-auto mt-10 px-4 relative">
          <div className="flex items-center max-xs:flex-col">
            <div className="max-xs:w-full">
              <h1 className="text-[25px] font-bold text-[#fff]">
                {t("قالوا عنا")}
              </h1>
              <h3 className="text-[17px] font-bold text-[#15B86C]">
                {t("اكتشف تجارب عملائنا المتميزة")}
              </h3>
            </div>
            <img
              src="/images/Rectangle357.svg"
              className="mx-14 max-sm:hidden"
            />
            <div className="">
              <p className="text-[14px] font-normal text-[rgba(255,255,255,0.3)] w-[79%]">
                {t(
                  "نحن في مركز إنجاز المتحدة للتدريب نفخر بتقديم تجارب تعليمية لا تُنسى. إليك ما قاله بعض عملائنا"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[94px]">
          <Testimonials />
        </div>
      </div>
      <div className="absolute lg:left-[-326px] sm:left-[0]  z-0">
        <div className="lg:lg_absoulte rounded-large-circle bg-custom-circle blur-custom-blur"></div>
      </div>
      {/* partner */}
      <div className="pt-[200px] bg-custom-gradient">
        <div className="container mx-auto px-4 relative">
          <div className="w-full lg:w-6/12 pb-12 md:pb-16 mx-auto text-center">
            <span className="font-['29LT_Bukra'] text-[24px] font-normal leading-[43.68px] text-[#b2babf] tracking-[0.48px] relative text-center inline-block">
              {t("نحظى بثقة أكثر من")}
            </span>
            <span className="font-['29LT_Bukra'] text-[26px] font-bold leading-[43.68px] text-[#fff] tracking-[0.48px] relative text-center inline-block">
              {t("3000 شريك")}
            </span>
            <span className="font-['29LT_Bukra'] text-[24px] font-normal leading-[43.68px] text-[#b2babf] tracking-[0.48px] relative text-center">
              {t("في تقديم حلول متكاملة لتعزيز الكفاءات وتحقيق النجاح المؤسسي")}
            </span>
          </div>
        </div>
        <div className="container mx-auto mt-10 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8">
            {logoSecond.map((logo, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center transition-transform transform hover:scale-105 group"
              >
                <div className="relative">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-custom-logo rounded-full blur-custom-logo opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:pt-[200px] max-sm:pt-[8px] bg-custom-gradient">
        <div className="container  mx-auto px-4 relative">
          <div className="w-full lg:w-6/12 mx-auto text-center">
            <span className="font-['29LT_Bukra'] text-[26px] font-bold leading-[43.68px] text-[#fff] tracking-[0.48px] relative text-center inline-block">
              {t("أهم المجالات التدريبية المطلوبة")}
            </span>
            <p className="text-[14px] font-normal leading-[25.48px] text-[rgba(255,255,255,0.4)] tracking-[0.28px] relative mx-auto my-0">
              {t(
                "في مركز إنجاز المتحدة للتدريب، نلتزم بتطوير محتوى تدريبي يعكس احتياجات السوق المتجددة، وذلك من خلال فريق تطوير متخصص يعمل باستمرار على تصميم وتحديث البرامج التدريبية الأكثر طلباً."
              )}
            </p>
          </div>
        </div>

        <div className="">
          <Trainingfields />
        </div>
      </div>

      <div className="lg:pt-[200px] max-sm:pt-[8px] bg-custom-gradient">
        <div className="container  mx-auto px-4 relative min-h-96">
          <Mapping t={t}/>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
