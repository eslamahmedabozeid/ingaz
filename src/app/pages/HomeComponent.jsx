import React from 'react'
import  './styleHome.css'
const HomeComponent = () => {
  return (
    <div className='main-container'>
    <div className='ellipse' />
    <div className='ellipse-1' />
    <div className='ellipse-2' />
    <div className='rectangle' />
    <div className='ellipse-3' />
    <div className='ellipse-4' />
    <div className='frame-5'>
      <div className='frame-6'>
        <div className='new-skills'>
          <span className='text'>ارتقِ بمهاراتك إلى آفاق </span>
          <span className='text-2'>جديدة</span>
        </div>
        <div className='wrapper-2'>
          <span className='text-3'>مع </span>
          <span className='text-4'>مركز إنجاز المتحدة للتدريب </span>
          <span className='text-5'>
            
            حيث يلتقي الإبداع بالتميز. اكتشف إمكانياتك وحقق أهدافك.
          </span>
        </div>
      </div>
      <button className='Button'>
        <span className='text-6'>إقرأ المزيد</span>
      </button>
    </div>
    <div className='img-4' />
    <div className='img-5' />
  </div>
  )
}

export default HomeComponent
