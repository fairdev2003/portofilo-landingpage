import React from 'react'
import { FaGithub } from "react-icons/fa";
import Fair from '../assets/fair.jpg'
import './App.css'

export default function AboutMe() {

    const onButtonClick = () => {
        const pdfUrl = "cv.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "cv_jakub.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


  return (
    <div className='pl-[200px] pt-[50px] h-[400px] w-[100%] mt-[50px] flex justify-between gap-[500px] desktop:gap-[250px] pr-200px'>
        <div>
            <h1 className='text-white font-[Poppins] font-[900] text-3xl w-[500px]'>Hello my name is Jakub and I'm <span className='text-[#388bfd]'>Frontend Developer</span> 👋</h1>
            <p className='text-white font-[Poppins] w-[500px] mt-[10px] text-lg'>I'm pasionate to programming and new technologies. I started with coding Roblox games but I thought I need to learn something new and I started learning Python and now I creating web apps and backend with technologies used in many companies. I love new challenges and learning new things.</p>
            <div className='flex gap-5 mt-[20px]'>
                <form action='https://github.com/fairdev2003'><button className='bg-[none] border-[2px] border-[#388bfd] rounded-lg text-[#388bfd] w-[auto] h-[50px] font-[Poppins] font-[700] p-3 flex items-center gap-2 hover:border-[#1b2a41]'>Visit My Github</button></form>
                <button onClick={onButtonClick} className='bg-[none] border-[2px] border-[#388bfd] rounded-lg text-[#388bfd] w-[auto] h-[50px] font-[Poppins] font-[700] p-3 flex items-center gap-2 hover:border-[#1b2a41]'>Download CV</button>
            </div>
        </div>
        <div>
            <img src={Fair} alt="fair" id='fair' className='mr-[250px] desktop:mr-[550px] tablet:hidden' style={{borderRadius: '22% 78% 64% 36% / 40% 32% 68% 60%'}}/>
        </div>
    </div>
  )
}
