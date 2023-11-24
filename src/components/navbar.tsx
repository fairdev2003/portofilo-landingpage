import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import Fair from '../assets/fair.jpg'
import './App.css'

export default function Navbar() {

  const [section, setsection]: any = useState('about-me')

  return (
    <div className='bg-[black] w-[100%] pl-[30px] pr-[30px] pt-[20px] pb-[20px] flex justify-between sticky top-0 items-center'>
        <p className='text-[white] font-[Poppins] font-[900] flex gap-[0.8px] items-center ml-10'>fair.dev<span className='code'>|</span></p>
        <div className='font-[Poppins] font-[900] text-white flex justify-center gap-5'>
            <p onClick={() => {setsection('about-me')}} className={`${section === 'about-me' ? 'text-[#388bfd]' : null} hover:text-[#388bfd] cursor-pointer`}>About Me</p>
            <p onClick={() => {setsection('skills')}} className={`${section === 'skills' ? 'text-[#388bfd]' : null} hover:text-[#388bfd] cursor-pointer`}>Skills</p>
            <p onClick={() => {setsection('projects')}} className={`${section === 'projects' ? 'text-[#388bfd]' : null} hover:text-[#388bfd] cursor-pointer`}>Projects</p>
            <p onClick={() => {setsection('experience')}} className={`${section === 'experience' ? 'text-[#388bfd]' : null} hover:text-[#388bfd] cursor-pointer`}>Experience</p>
            <p onClick={() => {setsection('contact-me')}} className={`${section === 'contact-me' ? 'text-[#388bfd]' : null} hover:text-[#388bfd] cursor-pointer`}>Contact Me</p>
        </div>
        <form action='https://github.com/fairdev2003'><button className='bg-[none] border-[2px] border-[#388bfd] rounded-lg text-[#388bfd] w-[auto] h-[50px] font-[Poppins] font-[700] p-3 flex items-center gap-2 hover:border-[#1b2a41]'><FaGithub size={25}/>Github Repo</button></form>

    </div>
  )
}
