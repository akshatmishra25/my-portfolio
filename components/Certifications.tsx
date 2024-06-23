import React from 'react'
import SectionTitle from './SectionTitle'

const Certifications = () => {
  return (
    <section id='certifications' 
    className='mx-auto ml-10 py-10 lgl:py-24 px-4'>
    <SectionTitle title="My Certifications"/>
    <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
       <ul className='md:w-32 flex flex-col'>
        <li className='border-l-2 border-l-hoverColor text-textDark bg-transparent
           hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
          Introduction to Google SEO
        </li>
        <li className='border-l-2 border-l-hoverColor text-textDark bg-transparent
           hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
          Social Summer of Code Pass
        </li>
        <li className='border-l-2 border-l-hoverColor text-textDark bg-transparent
           hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
          Building Netflix Clone with React
        </li>
       </ul>
    </div>
    </section>
  )
}

export default Certifications