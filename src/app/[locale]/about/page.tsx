import {
    ServerAboutComponent,
  } from "@/components";
import React from 'react'

function Page({ params: { locale } }: { params: { locale: string } }) {
    return (
    <div>
      <ServerAboutComponent locale={locale}/>
    </div>
  )
}

export default Page;
