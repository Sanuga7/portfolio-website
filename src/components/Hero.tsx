import { motion } from "framer-motion";
import './hero.css';

const anime = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
        scale: 1, 
        opacity: 1, 
        transition: { duration: 0.5, delay: 1 }
    }
};

const Hero = () => {
    return (
        <div className="container text-white text-center d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
            <motion.h1
                variants={anime(0)}
                initial="hidden"
                animate="visible"
                className="display-4"
            >
                Hi, I'm Sanuga Kusalwin
            </motion.h1>
            <motion.p
                variants={anime(0.5)}
                initial="hidden"
                animate="visible"
                className="lead"
            >
                Full-Stack Developer | Passionate about building scalable web applications
            </motion.p>
            <motion.a
                href="#about"
                className="btn btn-outline-light mt-3"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Learn More
            </motion.a>
        </div>
    );
};

export default Hero;
