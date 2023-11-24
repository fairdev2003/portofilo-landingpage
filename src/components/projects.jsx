import React from 'react'
import { FaPager } from "react-icons/fa";
import Fair from '../assets/fair.jpg'
import Discord from '../assets/discord.svg'
import Wordle from '../assets/wordle.png'

export default function Projects() {
  return (
    <div className='pl-[200px] desktop:pl-[200px] tablet:pl-[120px] pt-[50px]'>
        <h1 className='text-white font-[Poppins] text-3xl font-[700] flex gap-5 items-center'><FaPager className='text-[#388bfd]'/>Project i have made:</h1>
        <div className='flex gap-10 desktop:block tablet:justify-center'>
            <div className='bg-[#343a40] w-[700px] h-[320px] rounded-[20px] mt-[30px] flex border-[3px] border-[#388bfd]'>
                <img src={Discord} alt="discord" className='h-[88%] rounded-l-[20px] m-5 mr-0'/>
                <div className='w-[100%] m-5 ml-0 h-[80%] rounded-r-[20px] mt-7'>
                    <a href='https://github.com/fairdev2003/clan-management-bot-pg' className='font-[Poppins] text-white font-[700] m-5 text-[20px] mb-0 hover:text-[#388bfd] hover:underline decoration-2'>Clan Management Discord Bot</a>
                    <div className='flex justify-start gap-2 m-5'>
                        <div className='h-auto w-auto p-1.5 pr-3 pl-3 bg-[#388bfd] rounded-full'><p className='font-[Poppins] text-white text-[15px] font-[600]'>Python</p></div>
                        <div className='h-auto w-auto p-1.5 pr-3 pl-3 bg-[#388bfd] rounded-full'><p className='font-[Poppins] text-white text-[15px] font-[600]'>MySql</p></div>
                    </div>
                    <p className='m-5 text-white font-[Poppins] font-[500] items-center'>I created this bot for my clan to easily manage clan members. Each member has <span className='text-[#388bfd]'>in-game ID</span> assigned to their <span className='text-[#388bfd]'>discord account</span>, so clan leaders/officers can easily track members with low stats. All data is saved in <span className='text-[#388bfd]'>MySql Database</span></p>
                </div>
            </div>
            <div className='bg-[#343a40] w-[700px] h-[320px] rounded-[20px] mt-[30px] flex border-[3px] border-[#388bfd]'>
            <img src={Wordle} alt="wordle" className='h-[88%] rounded-l-[20px] m-5 mr-0'/>
                <div className='w-[100%] m-5 ml-0 h-[80%] rounded-r-[20px] mt-7'>
                    <a href='https://github.com/fairdev2003/clan-management-bot-pg' className='font-[Poppins] text-white font-[700] m-5 text-[20px] mb-0 hover:text-[#388bfd] hover:underline decoration-2'>Worlde Game</a>
                    <div className='grid grid-cols-3 justify-center gap-2 m-5'>
                        <div className='h-auto w-auto p-1.5 pr-3 pl-3 bg-[#388bfd] rounded-full flex justify-center items-center'><p className='font-[Poppins] text-white text-[15px] font-[600]'>React</p></div>
                        <div className='h-auto w-auto p-1.5 pr-3 pl-3 bg-[#388bfd] rounded-full flex justify-center items-center'><p className='font-[Poppins] text-white text-[15px] font-[600]'>TypeScript</p></div>
                        <div className='h-auto w-auto p-1.5 pr-3 pl-3 bg-[#388bfd] rounded-full flex justify-center items-center'><p className='font-[Poppins] text-white text-[15px] font-[600]'>Framer</p></div>
                    </div>
                    <p className='m-5 text-white font-[Poppins] font-[500] items-center'>It's a simple app in which user guessing word. Player has 6 chances. If you guess the word you win, when your chances runs out you lose. I redisigned oryginal game from <a href='https://wordlegame.org/pl'><span className=' text-[#388bfd] hover:underline decoration-2'>wordlegame.pl</span></a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
