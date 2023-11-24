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
    <div className='pl-[200px] pt-[50px] h-[400px] w-[100%] mt-[50px] grid grid-cols-2 gap-[500px]'>
        <div>
            <h1 className='text-white font-[Poppins] font-[900] text-3xl w-[500px]'>Hello my name is Jakub and I'm <span className='text-[#388bfd]'>Frontend Developer</span> 👋</h1>
            <p className='text-white font-[Poppins] w-[500px] mt-[10px] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum amet sit, sunt aliquid quos vitae fuga corrupti placeat delectus excepturi hic dignissimos nemo asperiores optio!</p>
            <div className='flex gap-5 mt-[20px]'>
                <button className='bg-[none] border-[2px] border-[#388bfd] rounded-lg text-[#388bfd] w-[auto] h-[50px] font-[Poppins] font-[700] p-3 flex items-center gap-2 hover:border-[#1b2a41]'>Visit My Github</button>
                <button onClick={onButtonClick} className='bg-[none] border-[2px] border-[#388bfd] rounded-lg text-[#388bfd] w-[auto] h-[50px] font-[Poppins] font-[700] p-3 flex items-center gap-2 hover:border-[#1b2a41]'>Download CV</button>
            </div>
        </div>
        <div>
            <img src={Fair} alt="fair" className='fair' style={{borderRadius: '22% 78% 64% 36% / 40% 32% 68% 60%'}}/>
        </div>
    </div>
  )
}
