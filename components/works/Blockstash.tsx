import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Blockstash = () => {
  return (
    <motion.div
        initial = {{ opacity: 0 }}
        animate = {{ opacity: 1 }}
        transition = {{ delay: 0.1 }}
        className = "w-full">
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Software Developer Intern <span className="text-textGreen tracking-wide">@BlockStash Intelligence</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">Aug 2023 - Sep 2023</p>
        <ul>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Wrote down the code for maintaining the UI through React and also developed Express based APIs for the backend
                of the applications
            </li>
        </ul>
    </motion.div>
  )
}

export default Blockstash