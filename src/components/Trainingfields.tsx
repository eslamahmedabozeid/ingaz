/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const categories = [
  {
    name: "الابتكار وريادة الأعمال",
    filters: ["التخطيط الاستراتيجي", "التوجيه والإرشاد القيادي"],
  },
  {
    name: "القيادة والتطوير المهني",
    filters: ["تطوير المهارات القيادية", "إدارة الأزمات وصنع القرار"],
  },
  {
    name: "التكنولوجيا والابتكار المالي",
    filters: ["الذكاء الاصطناعي", "تحليل البيانات"],
  },
];

const data = Array.from({ length: 1000 }, (_, index) => ({
  title: `العنصر ${index + 1}`,
  description:
    "هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق",
  category:
    index % 3 === 0
      ? "الابتكار وريادة الأعمال"
      : index % 3 === 1
      ? "القيادة والتطوير المهني"
      : "التكنولوجيا والابتكار المالي",
}));

const Trainingfields = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].name
  );
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedFilter(null);
    setCurrentPage(1);
  };

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const filteredData = data.filter((item) => {
    return (
      (!selectedCategory || item.category === selectedCategory) &&
      (!selectedFilter || item.title.includes(selectedFilter))
    );
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    const maxPages = 9;

    if (totalPages <= maxPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, currentPage + 2);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (start > 2) pages.unshift("...");
      if (start > 1) pages.unshift(1);

      if (end < totalPages - 1) pages.push("...");
      if (end < totalPages) pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="min-h-screen text-gray-200">
      {/* الفلاتر العلوية */}
      <div className="container mx-auto mt-6 flex flex-wrap gap-4 justify-center pb-12 md:pb-16">
        <div className="pt-[4px] pr-[4px] pb-[4px] pl-[4px] gap-[8px] items-center flex-nowrap bg-[#072a28] rounded-[10px] relative mx-auto my-0">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategorySelect(category.name)}
              className={`pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[8px] justify-center items-center flex-nowrap rounded-[6px] relative overflow-hidden shadow-[0_1px_2px_0_rgba(255,255,255,0)] mx-auto my-0 ${
                selectedCategory === category.name
                  ? "bg-[#093735] text-white"
                  : "bg-transparent text-[#667680]"
              }`}
            >
              {t(category.name)}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div
          className="container mx-auto mt-4 flex flex-wrap gap-4 border-solid p-0"
          style={{ borderBottom: "2px solid #093735" }}
        >
          {categories
            .find((cat) => cat.name === selectedCategory)
            ?.filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => handleFilterSelect(filter)}
                className={`px-4 py-2 rounded-none text-[#667680] relative hover:text-white ${
                  selectedFilter === filter
                    ? "text-white border-b-2 border-white"
                    : ""
                }`}
              >
                {t(filter)}
              </button>
            ))}
        </div>
      )}

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
        {paginatedData.map((item, index) => (
          <div key={index} className="bg-[#093735] p-6 rounded-lg shadow-md">
            <img src="/images/Layer_2.png" />
            <h3 className="text-lg font-bold mb-2 mt-16">{t(item.title)}</h3>
            <p className="text-[16px] font-normal leading-[29.12px] text-[#b2babf] relative mx-auto my-0">
              {t(item.description)}
            </p>
          </div>
        ))}
        {paginatedData.length === 0 && (
          <div className="text-center col-span-full text-white">
            {t("لا توجد نتائج")}
          </div>
        )}
      </div>

      <div className="container w-full flex text-center pt-16">
        <span className=" bg-[#15b86c] rounded-[45px]  mx-auto my-0 flex justify-center items-start shrink-0 basis-auto font-['29LT_Bukra'] text-[12px] font-normal leading-[21.84px] text-[#303239] relative text-center whitespace-nowrap px-16 py-2">
          {t("سجل هنا")}
        </span>
      </div>

      <div className="container-fluid mx-auto flex max-sm:flex-col justify-between mt-8 items-center gap-2 ">
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#093735] text-white rounded-full flex items-center hover:bg-gray-600"
        >
          <img src="/images/fi-ss-arrow-small-right.svg" className="ltr:rotate-180"/>
          {t("التالي")}
        </button>
        <div className="flex">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              disabled={page === "..."}
              className={`px-4 py-2 mx-2 ${
                currentPage === page
                  ? "bg-gray-600 text-white"
                  : "bg-gray-800 text-gray-400"
              } rounded-full flex items-center`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#093735] text-white rounded-full flex items-center hover:bg-gray-600"
        >
          {t("السابق")}
          <img src="/images/fi-ss-arrow-small-left.svg" className="ltr:rotate-180"/>
        </button>
      </div>
    </div>
  );
};

export default Trainingfields;
