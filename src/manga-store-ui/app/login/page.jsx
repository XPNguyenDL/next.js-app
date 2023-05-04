import SectionHeader from '@/src/components/Home/SectionHeader'
import LoginForm from '@/src/components/Login/LoginForm'
import React from 'react'

export default function page() {
  return (
    <div className='mt-16 container mx-auto'>
      <div className='inline-block'></div>
        <SectionHeader title={"Đăng nhập"}/>
        <LoginForm />
    </div>
  )
}
