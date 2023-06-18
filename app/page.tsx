"use client"
import About from "@/components/About";
import Banner from "@/components/Banner";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import {motion} from "framer-motion";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <><main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
    overflow-x-hidden overflow-y-scroll">
     <Navbar />
     <div className="w-full h-[88vh] xl:flex items-center
     gap-20 justify-between">
       <motion.div 
       initial={{ opacity:0 }}
       animate={{ opacity:1 }}
       transition={{ delay:1.5 }}
       className="hidden xl:inline-flex w-32 h-full fixed mr-8 left-0 bottom-0">
        <LeftSide />
       </motion.div>
       <div className="h-[88vh] w-full mx-auto p-4">
        <Banner />
        <About />
        <Certifications />
        <Projects />
        {/* Archive */}
        <Contact />
        <Footer />
        </div>
       <motion.div 
       initial={{ opacity:0 }}
       animate={{ opacity:1 }}
       transition={{ delay:1.5 }}
       className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
         <RightSide/>
       </motion.div>
     </div>
  </main></>
    
  )
}
