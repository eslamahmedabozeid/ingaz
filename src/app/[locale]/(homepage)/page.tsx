import {
  ClientComponent,
  LanguageChanger,
  ServerComponent,
  ThemeChanger,
} from "@/components";
import React from "react";

function page({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between ">
        {/* <LanguageChanger /> */}
        {/* <ThemeChanger /> */}
      </div>
      <ServerComponent locale={locale} />
      <ClientComponent />
    </div>
  );
}

export default page;
