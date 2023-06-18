import Image from 'next/image'
import SectionTitle from './SectionTitle'
import {CinePick} from '@/public/assets'
import {Rescape} from '@/public/assets'

const Projects = () => {
  return (
    <section id='projects' className='max-w-container mx-auto lgl:px-20 py-24'>
        <SectionTitle title='Some Things I have built' />
        <div className='w-full flex flex-col items-center justify-between
         gap-28 mt-10'>
            {/* Project One*/}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group'
                href="https://cinepick-7fee1.web.app/" target='_blank'>
                <div>
                <Image className='w-full h-full object-contain' src={CinePick} alt="CinePick" />
                </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
             items-end text-right xl:-ml-16 z-10'>
               <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Personal Project
               </p>
               <h3 className='text-2xl font-bold'>CinePick</h3>
               <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                A Movie Search App built using <strong>React</strong> and deployed on <strong>Firebase</strong></p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
                md:gap-5 justify-between text-textDark'>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Firebase</li>
                </ul>
            </div>

            </div> 
        </div>
        {/* Project Two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group'
                href="https://rescape-sasuke.web.app/" target='_blank'>
                <div>
                <Image className='w-full h-full object-contain' src={Rescape} alt="CinePick" />
                </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
             items-end text-right z-10'>
               <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Mini Team Project
               </p>
               <h3 className='text-2xl font-bold'>Rescape</h3>
               <p className='bg-[#112240] text-sm md:text-base xl:-mr-16 p-2 md:p-6 rounded-md'>
                A Resume Generator App built in a team with authentication from
                <strong>Auth0</strong> and built using <strong>React</strong> and deployed on 
                <strong>Firebase</strong></p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
                md:gap-5 justify-between text-textDark'>
                    <li>JavaScript</li>
                    <li>0Auth</li>
                    <li>React</li>
                    <li>Firebase</li>
                </ul>
            </div>

            </div> 
        </div>
        {/* Project Three */}
        </div>
        </section>
        
  )
}

export default Projects