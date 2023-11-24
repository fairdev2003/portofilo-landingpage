import React from 'react'
import { FaCode } from "react-icons/fa";
import Python from '../assets/python.png'
import JavaScript from '../assets/js.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import TypeScript from '../assets/ts.png'
import TailwindCSS from '../assets/tailwindcss.png'
import ReactIcon from '../assets/react.png'
import SQL from '../assets/mysql.png'
import NodeJS from '../assets/nodejs.png'

export default function Skills() {
  return (
    <div className='pl-[200px] pt-[50px]'>
        <h1 className='text-white font-[Poppins] text-3xl font-[700] flex gap-5 items-center ml-[30px]'><FaCode className='text-[#388bfd]'/>Programming languages i learned through my coding journey</h1>
        <div className='pr-[200px] pl-[30px] bg-[black] h-[auto] pb-[50px] justify-start mt-[30px] grid pt-[30px] grid-cols-5 gap-y-[30px] grid-rows-2'>
            <div className='bg-[#343a40] w-[240px] h-[265px] rounded-[20px]'>
                <div className='bg-[#6c757d] h-[150px] m-5 rounded-[15px] flex justify-center items-center'>
                    <img className='w-[100px] h-[100px]' src={Python}></img>
                </div>
                <p className='text-[15px] font-[Poppins] text-[#388bfd] ml-6'>Data Science</p>
                <h1 className='text-white font-[Poppins] font-[800] ml-6 text-xl'>Python</h1>
            </div>
            <div className='bg-[#343a40] w-[240px] h-[265px] rounded-[20px]'>
                <div className='bg-[#6c757d] h-[150px] m-5 rounded-[15px] flex justify-center items-center'>
                    <img className='w-[100px] h-[100px]' src={HTML}></img>
                </div>
                <p className='text-[15px] font-[Poppins] text-[#388bfd] ml-6'>Web core</p>
                <h1 className='text-white font-[Poppins] font-[800] ml-6 text-xl'>HTML</h1>
            </div>
            <div className='bg-[#343a40] w-[240px] h-[265px] rounded-[20px]'>
                <div className='bg-[#6c757d] h-[150px] m-5 rounded-[15px] flex justify-center items-center'>
                    <img className='w-[70px] h-[100px]' src={CSS}></img>
                </div>
                <p className='text-[15px] font-[Poppins] text-[#388bfd] ml-6'>Styling Tool</p>
                <h1 className='text-white font-[Poppins] font-[800] ml-6 text-xl'>CSS</h1>
            </div>
            <div className='bg-[#343a40] w-[240px] h-[265px] rounded-[20px]'>
                <div className='bg-[#6c757d] h-[150px] m-5 rounded-[15px] flex justify-center items-center'>
                    <img className='w-[100px] h-[100px]' src={JavaScript}></img>
                </div>
                <p className='text-[15px] font-[Poppins] text-[#388bfd] ml-6'>Logic Language</p>
                <h1 className='text-white font-[Poppins] font-[800] ml-6 text-xl'>JavaScript</h1>
            </div>
            <div className='bg-[#343a40] w-[240px] h-[265px] rounded-[20px]'>
                <div className='bg-[#6c757d] h-[150px] m-5 rounded-[15px] flex justify-center items-center'>
                    <img className='w-[100px] h-[100px]' src={TypeScript}></img>
                </div>
                <p className='text-[15px] font-[Poppins] text-[#388bfd] ml-6'>JavaScript with types</p>
                <h1 className='text-white font-[Poppins] font-[800] ml-6 text-xl'>TypeScript</h1>
            </div>
            <div className='bg-[#343a40] w-[240px] h-[265px] rounded-[20px]'>
                <div className='bg-[#6c757d] h-[150px] m-5 rounded-[15px] flex justify-center items-center'>
                    <img className='w-[100px] h-[72px]' src={TailwindCSS}></img>
                </div>
                <p className='text-[15px] font-[Poppins] text-[#388bfd] ml-6'>CSS with less code</p>
                <h1 className='text-white font-[Poppins] font-[800] ml-6 text-xl'>TailwindCSS</h1>
            </div>
            <div className='bg-[#343a40] w-[240px] h-[265px] rounded-[20px]'>
                <div className='bg-[#6c757d] h-[150px] m-5 rounded-[15px] flex justify-center items-center'>
                    <img className='w-[100px] h-[100px]' src={ReactIcon}></img>
                </div>
                <p className='text-[15px] font-[Poppins] text-[#388bfd] ml-6'>Frontend Library</p>
                <h1 className='text-white font-[Poppins] font-[800] ml-6 text-xl'>React</h1>
            </div>

            <div className='bg-[#343a40] w-[240px] h-[265px] rounded-[20px]'>
                <div className='bg-[#6c757d] h-[150px] m-5 rounded-[15px] flex justify-center items-center'>
                    <img className='w-[100px] h-[100px]' src={SQL}></img>
                </div>
                <p className='text-[15px] font-[Poppins] text-[#388bfd] ml-6'>Data Management</p>
                <h1 className='text-white font-[Poppins] font-[800] ml-6 text-xl'>MySQL</h1>
            </div>

            <div className='bg-[#343a40] w-[240px] h-[265px] rounded-[20px]'>
                <div className='bg-[#6c757d] h-[150px] m-5 rounded-[15px] flex justify-center items-center'>
                    <img className='w-[100px] h-[100px]' src={NodeJS}></img>
                </div>
                <p className='text-[15px] font-[Poppins] text-[#388bfd] ml-6'>Api Development</p>
                <h1 className='text-white font-[Poppins] font-[800] ml-6 text-xl'>Node.js</h1>
            </div>
        </div>
    </div>
  )
}
