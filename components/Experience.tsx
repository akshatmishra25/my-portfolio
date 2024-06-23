import SectionTitle from "./SectionTitle"
import Blockstash from "./works/Blockstash"

const Experience = () => {
  return (
    <section id="experience" className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4">
        <SectionTitle title="Experience"/>
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
            <ul>
                <li className="border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm
                cursor-pointer duration-300 px-8 font-medium">
                    BlockStash Intelligence
                </li>
            </ul>
            <Blockstash />
        </div>
    </section>
  )
}

export default Experience