import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Graviti = () => {
  return (
    <motion.div
        initial = {{ opacity: 0 }}
        animate = {{ opacity: 1 }}
        transition = {{ delay: 0.1 }}
        className = "w-full">
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Backend Developer Intern <span className="text-textGreen tracking-wide">@Graviti</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">Jul 2024 - Sep 2024</p>
        <ul>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Helped in developing the Backend Infrastructure of the application by implementing various wrappers for core api service and tracking-db.
            </li>
        </ul>
    </motion.div>
  )
}

export default Graviti