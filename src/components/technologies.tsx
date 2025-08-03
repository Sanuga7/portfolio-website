import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJava,
  faPhp,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import './technologies.scss';

const AnimationIcon = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      delay: duration,
    },
  },
});

const Technologies = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row mt-5">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center col-12 mb-5 text-light"
        >
          Technologies
        </motion.h1>
        <div className="col-12 d-flex justify-content-center align-items-center gap-2 mb-5 mt-5">
          <motion.span
            variants={AnimationIcon(2.5)}
            initial="initial"
            animate="animate"
            className="border border-1 border-secondary bg-dark shadow-lg rounded"
          >
            <FontAwesomeIcon
              className="p-3 react-color"
              icon={faReact}
              size="xl"
            />
          </motion.span>
          <motion.span
            variants={AnimationIcon(3)}
            initial="initial"
            animate="animate"
            className="border border-1 border-secondary bg-dark shadow-lg rounded"
          >
            <FontAwesomeIcon
              className="p-3 html5-color"
              icon={faHtml5}
              size="xl"
            />
          </motion.span>
          <motion.span
            variants={AnimationIcon(3.5)}
            initial="initial"
            animate="animate"
            className="border border-1 border-secondary bg-dark shadow-lg rounded"
          >
            <FontAwesomeIcon
              className="p-3 css3-color"
              icon={faCss3}
              size="xl"
            />
          </motion.span>
          <motion.span
            variants={AnimationIcon(4)}
            initial="initial"
            animate="animate"
            className="border border-1 border-secondary bg-dark shadow-lg rounded"
          >
            <FontAwesomeIcon
              className="p-3 java-color"
              icon={faJava}
              size="xl"
            />
          </motion.span>
          <motion.span
            variants={AnimationIcon(4.5)}
            initial="initial"
            animate="animate"
            className="border border-1 border-secondary bg-dark shadow-lg rounded"
          >
            <FontAwesomeIcon
              className="p-3 php-color"
              icon={faPhp}
              size="xl"
            />
          </motion.span>
          <motion.span
            variants={AnimationIcon(5)}
            initial="initial"
            animate="animate"
            className="border border-1 border-secondary bg-dark shadow-lg rounded"
          >
            <FontAwesomeIcon className="p-3 js-color" icon={faJs} size="xl" />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
