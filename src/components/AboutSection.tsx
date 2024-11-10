/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import CountUp from "react-countup";
import CountComponent from "./CountComponent";
import AccordionComponent from "./AccordionComponent";
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
const AboutSection = () => {
  return (
    <div>
      <div className="main-container h-[358px] relative mx-auto my-0 pt-[65px]">
        <div className="container mx-auto relative bg-[#062120]">
          <div className="w-[197.753px] h-[313px] absolute top-0 right-[0] z-[1]">
            <div className="w-full h-[301px] absolute top-0  z-[17]">
              <div className="w-full h-[301px] text-[0px] absolute top-0 left-0 z-[18]">
                <div className="w-full h-[301px] bg-[url(/images/Group42806.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[1]" />
              </div>
            </div>
            <div className="w-[127.781px] h-[26px] bg-[url(/images/0ae79d74-8688-41a9-a07f-2979e711ba70.png)] bg-cover bg-no-repeat absolute top-[287px] left-1 z-[21]" />
          </div>
          <div className="w-[197.753px] h-[313px] bg-[url(/images/0616458d-cfdd-4e93-a331-c1e8f3401f75.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[22]" />
          <div className="pt-[16px] md:pt-[57px]">
            <div className="flex w-full h-[188px] flex-col gap-[22px] items-end flex-nowrap top-0 left-0 z-[3]">
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
                <div className="flex sm:w-full lg:w-[1016px] flex-col items-end shrink-0 flex-nowrap relative z-[5]">
                  <span className="self-stretch shrink-0 basis-auto   text-[25px] font-bold leading-[45.5px] text-[#fff] tracking-[0.5px] relative  lg:whitespace-nowrap z-[6]">
                    تعرف علينا
                  </span>
                  <span className="self-stretch shrink-0 basis-auto   text-[16px] font-medium leading-[29px] text-[#15b86c] tracking-[0.32px] relative  lg:whitespace-nowrap z-[7]">
                    إنجاز المتحدة للتدريب الرائدة في التدريب المؤسسي
                    والتكنولوجيا التعليمية في منطقة الشرق الأوسط
                  </span>
                </div>
                <span className="flex w-full justify-end items-start shrink-0   text-[12px] font-normal leading-[21.84px] text-[#fff] tracking-[0.24px] relative  z-[8]">
                  حيث نقدم أكثر الحلول شمولية في تطوير التعلم والتدريب في جميع
                  الوظائف المؤسسية الاستراتيجية، بما في ذلك، الموارد البشرية،
                  الموارد الرقمية والدورات المهنية والمتخصصة في جميع المجالات.
                  من خلال جلسات تدريبية بقيادة مدربين، وتدريب داخل الشركات،
                  والإرشاد،، وأحدث الحلول التقنية في جميع أنحاء منطقة الشرق
                  الأوسط نقدم لعملائنا الكرام مجموعة واسعة من الخدمات، بما في
                  ذلك تحليل احتياجات التدريب
                </span>
              </div>
              <div className="w-full h-[39px] shrink-0 relative z-[9] mt-[22px]">
                <div className="flex w-full h-[39px] gap-[8px] items-center flex-nowrap top-0 left-0 z-10">
                  <div className="w-[39px] h-[39px] shrink-0 rounded-[99px] relative z-[11]">
                    <div className="flex w-[39px] h-[39px] pt-[3px] pr-px pb-[3px] pl-px flex-col gap-[8px] items-start flex-nowrap bg-[#15b86c] rounded-[99px] absolute top-0 left-0 z-[12]">
                      <div className="w-[35.575px] h-[32.785px] shrink-0 bg-[url(/images/82b499fe-f219-489a-9c2a-3a311eb7a5eb.png)] bg-cover bg-no-repeat relative z-[13]" />
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex w-[186.639px] h-[39px] pt-[8px] pr-[50px] pb-[8px] pl-[50px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[45px] border-solid border border-[#15b86c] relative z-[14] pointer"
                  >
                    <span className="flex w-[52px] h-[22px] justify-center items-start shrink-0 basis-auto   text-[12px] font-normal leading-[21.84px] text-[#15b86c] relative text-center whitespace-nowrap z-[15]">
                      إقرأ المزيد
                    </span>
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
        <div className="container  mx-auto mt-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="">
              <img src="/images/Group43267.png" />
            </div>
            <div className="">
              <h2 className="w-full text-[#fff] text-[30px] font-bold ">
                إنجاز المتحدة وجهتك لتنمية المهارات وتطوير المواهب
              </h2>
              <h3 className="w-full text-[#fff] text-[16px] font-bold mb-16">
                حلول تدريبية مبتكرة تدعم النمو المؤسسي وتواكب متطلبات السوق
              </h3>
              <p className="w-full text-white-40 text-[14px] mb-[52px]">
                في مركز إنجاز المتحدة للتدريب، نركز على تقديم حلول تدريبية
                مبتكرة تعزز المهارات الشخصية، وتنمي المواهب من خلال برامج شاملة.
                نضمن جودة التدريب عبر استشارات مهنية واستراتيجية تدعم النمو
                المؤسسي. نلتزم بالتميز من خلال شراكات عالمية، ونطور منهجيات
                تدريبية مبتكرة تتماشى مع احتياجات السوق المتغيرة لتحقيق أفضل
                النتائج.
              </p>

              <div className="w-full h-[39px] shrink-0 relative z-[9] mt-[22px]">
                <div className="flex w-full h-[39px] gap-[8px] items-center flex-nowrap top-0 left-0 z-10">
                  <a
                    href="#"
                    className="flex w-[186.639px] h-[39px] pt-[8px] pr-[50px] pb-[8px] pl-[50px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[45px] border-solid border border-[#15b86c] relative z-[14] pointer"
                  >
                    <span className="flex w-[52px] h-[22px] justify-center items-start shrink-0 basis-auto   text-[12px] font-normal leading-[21.84px] text-[#15b86c] relative text-center whitespace-nowrap z-[15]">
                      إقرأ المزيد
                    </span>
                  </a>
                  <div className="w-[39px] h-[39px] shrink-0 rounded-[99px] relative z-[11]">
                    <div className="flex w-[39px] h-[39px] pt-[3px] pr-px pb-[3px] pl-px flex-col gap-[8px] items-start flex-nowrap bg-[#15b86c] rounded-[99px] absolute top-0 left-0 z-[12]">
                      <div className="w-[35.575px] h-[32.785px] shrink-0 bg-[url(/images/82b499fe-f219-489a-9c2a-3a311eb7a5eb.png)] bg-cover bg-no-repeat relative z-[13]" />
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
      <div className="pt-[200px] bg-custom-gradient">
        <div className="container  mx-auto mt-10 px-4">
          <h1 className="text-[25px] font-bold text-[#fff]">
            الإعتمادات المهنية
          </h1>
          <p className="font-normal text-[12px] text-white-40">
            شركاؤنا في الاعتماد المهني
          </p>
        </div>
        <div className="container mx-auto mt-10 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-transform transform hover:scale-105 "
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Achievement in numbers */}
      <div className="absolute lg:left-[-326px] z-0">
        <div className="lg:lg_absoulte rounded-large-circle bg-custom-circle blur-custom-blur"></div>
      </div>
      <div className="pt-[200px] bg-custom-gradient">
        <div className="container mx-auto mt-10 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
            <h1 className="text-[48px] font-bold tracking-[0.96px] text-[#FFF]">
              إنــجاز فــي أرقــام
            </h1>
            <p className="text-[14px] font-normal text-white-40 w-[75%]">
              في مركز إنجاز المتحدة للتدريب، نركز على تقديم حلول تدريبية مبتكرة
              تعزز المهارات الشخصية، وتنمي المواهب من خلال برامج شاملة. نضمن
              جودة التدريب عبر استشارات مهنية واستراتيجية تدعم النمو المؤسسي.
              نلتزم بالتميز{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 bg-[url(/images/GroupCount.png)] bg-auto bg-no-repeat rtl:bg-[5%] ltr:bg-right pt-[61px] mt-[61px]">
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
            <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Right Section: Image, Text, and Buttons */}
              <div className="flex flex-col space-y-6">
                {/* Image */}
                <div className="h-[337px]">
                  {/* <img src="/images/Vector.png" alt="Main Image" className="object-cover w-full h-full rounded-lg" /> */}
                </div>

                {/* Title and Description */}
                <h1 className="text-[#fff] font-bold text-[24px]">
                  التكنولوجيا والابتكار في مركز إنجاز المتحدة للتدريب
                </h1>
                <p className="text-[12px] font-normal text-white opacity-70 w-[80%] mt-4">
                  في مركز إنجاز المتحدة للتدريب، نعتبر التكنولوجيا والابتكار
                  مفتاحاً لتحسين تجربة التعلم وتقديم حلول تدريبية متطورة. نحن
                  ملتزمون بتوظيف أحدث التقنيات لرفع مستوى التدريب وتحقيق نتائج
                  ملموسة. إليك كيف نستخدم التكنولوجيا والابتكار في تقديم
                  خدماتنا.
                </p>

                {/* Buttons Section */}
                <div className="flex items-center mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center w-[186px] h-[39px] rounded-full border border-[#15b86c] text-[#15b86c] text-[12px] font-normal"
                  >
                    إقرأ المزيد
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

        <div className="absolute lg:left-[-326px] z-0">
          <div className="lg:lg_absoulte rounded-large-circle bg-custom-circle blur-custom-blur"></div>
        </div>
      </div>
      {/* Service */}
      <div className="pt-[200px] bg-custom-gradient">
        <div className="container  mx-auto mt-10 px-4 relative">
          <div className="">
            <h1 className="text-[32px] font-bold text-[#fff]">خدماتنا </h1>
            <img
              src="/images/Vector@2x.png"
              alt="Background Vector"
              className="absolute top-[-249px] rtl:top-[-197px] rtl:right-[119px] ltr:right-[-114px] w-full"
            />
          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-1 w-[35%] mt-[19px]">
              <p className="font-normal text-[12px] text-white-40">
                نقدم أكثر من 16 خدمة متكاملة لتطوير الأفراد والمؤسسات، تشمل
                التدريب المتخصص، التحليل الدقيق للاحتياجات، والتعلم الإلكتروني،
                وغيرها من الحلول المصممة لدعم النجاح المؤسسي.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center mt-[140px]">
            <div className="p-[32px] borderground rounded-lg mx-4 hover:bg-[#093735] box-width lg:min-h-[378px]">
              <h4 className="text-[16px] text-[#fff] font-semibold">
                تحليل الاحتياجات التدريبية
              </h4>
              <p className="text-[14px] text-[#fff] font-light mt-[32px]">
                نقوم بتحليل دقيق للفجوات في المهارات والمعرفة لضمان تقديم حلول
                تدريبية مخصصة تحقق أهدافك بفاعلية
              </p>
              <div className="mt-[89px]">
                <img src="/images/Group17.svg" />
              </div>
            </div>
            <div className="p-[32px] borderground rounded-lg mx-4 hover:bg-[#093735] box-width lg:min-h-[378px]">
              <h4 className="text-[16px] text-[#fff] font-semibold">
                تصميم وتنفيذ برامج مخصصة
              </h4>
              <p className="text-[14px] text-[#fff] font-light mt-[32px]">
                نصمم برامج تدريبية شاملة ومتكاملة تتوافق مع احتياجاتك
                الاستراتيجية وتعزز من كفاءتك العملية
              </p>
              <div className="mt-[89px]">
                <img src="/images/Group18.svg" />
              </div>
            </div>
            <div className="p-[32px] borderground rounded-lg mx-4 hover:bg-[#093735] box-width lg:min-h-[378px]">
              <h4 className="text-[16px] text-[#fff] font-semibold">
                التعلم الإلكتروني
              </h4>
              <p className="text-[14px] text-[#fff] font-light mt-[32px]">
                نمنحك فرصة التعلم في أي وقت ومن أي مكان عبر حلول تعليمية مرنة
                تتناسب مع جدولك
              </p>
              <div className="mt-[89px]">
                <img src="/images/Group19.svg" />
              </div>
            </div>
            <div className="p-[32px] borderground rounded-lg mx-4 hover:bg-[#093735] box-width lg:min-h-[378px]">
              <h4 className="text-[16px] text-[#fff] font-semibold">
                استشارات تحسين الأداء
              </h4>
              <p className="text-[14px] text-[#fff] font-light mt-[32px]">
                نقدم استراتيجيات متقدمة لتحسين الأداء الفردي والمؤسسي، مما يضمن
                تحقيق أهدافك بكفاءة أعلى
              </p>
              <div className="mt-[89px]">
                <img src="/images/Group20.svg" />
              </div>
            </div>
          </div>
          <div className="absolute lg:left-[33%] z-0">
            <div className="lg:lg_absoulte rounded-large-circle bg-custom-circle blur-custom-blur"></div>
          </div>
          {/* Buttons Section */}
          <div className="flex items-center mt-[111px]">
            <a
              href="#"
              className="flex items-center justify-center w-[186px] h-[39px] rounded-full border border-[#15b86c] text-[#15b86c] text-[12px] font-normal"
            >
              عرض جميع الخدمات
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

      <div className="pt-[200px] bg-custom-gradient">
        <div className="container  mx-auto mt-10 px-4 relative">
        <div className="container  mx-auto mt-10 px-4">
          <h1 className="text-[25px] font-bold text-[#fff]">
          مفهوم إنجاز         
          </h1>
          <p className="font-normal text-[12px] text-white-40 w-[51%] mt-[19px]">
          في مركز إنجاز المتحدة للتدريب، نركز على تقديم حلول تدريبية مبتكرة تعزز المهارات الشخصية، وتنمي المواهب من خلال برامج شاملة. نضمن جودة التدريب عبر استشارات مهنية واستراتيجية تدعم النمو المؤسسي. نلتزم بالتميز من خلال شراكات عالمية، ونطور منهجيات تدريبية مبتكرة تتماشى مع احتياجات السوق المتغيرة لتحقيق أفضل النتائج.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
