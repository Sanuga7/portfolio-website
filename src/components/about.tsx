import { motion } from "framer-motion";
import AboutImg from '../assets/about.jpg';
import './about.css';

const About = () => {
  return (
    <div className="container-fluid" id="about">
        <div className="row">
            <motion.h1 
            initial={{ opacity: 0, y: -100}}
            whileInView={{ opacity: 1, y:0}}
                    transition={{ duration: 0.5}} className='text-center col-12 mb-5 text-light'>About Me</motion.h1>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <motion.img
                    className="about-image mt-3"
                    src={AboutImg}
                    alt="about"
                    initial={{ opacity: 0, x: -100}}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.5}}
                />
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 100}}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.5}}
                >
                    <h2 className="text-light">Hi, I'm Sanuga Kusalwin</h2>
                    <p className="text-light">
                        I'm a Full-Stack Developer passionate about building scalable web applications. With experience in both front-end and back-end technologies, I love creating solutions that are both functional and user-friendly.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default About;
