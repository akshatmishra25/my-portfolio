import {AiFillThunderbolt} from "react-icons/ai";
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section id="about" 
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
      <SectionTitle title = "About Me"/>
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium
        flex flex-col gap-4'>
          <p> Hello I am Akshat Mishra. I am a CSE Undergrad student currently in
            my final year. I have been doing development on the web for an year 
            now, but I keep on learning new things everyday.
          </p>
          <p>
            Here are a few technologies I have been working with:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>JavaScript(ES6+)</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>HTML</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>CSS</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>React</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>NextJS</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>PostGres</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>MongoDB</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>Typescript</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>NodeJS</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>ExpressJS</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>Docker</li>
              <li className="flex items-center gap-2">
              <span className="text-textGreen"><AiFillThunderbolt />
              </span>Figma</li>
            
          </ul>
        </div>
        <div></div>
      </div>
      </section>
  )
}

export default About