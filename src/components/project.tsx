import { motion } from 'framer-motion';
import './project.css';
import project1 from '../assets/project1.png'; // Ensure the path is correct
import project2 from '../assets/project2.png'; // Ensure the path is correct

const Project = () => {
  return (
    <div className="table-container">
      <motion.h2 
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="table-heading"
      >
        Project Timeline
      </motion.h2>
      <motion.table 
        className="education-table"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <tbody>
          <motion.tr
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <td className="time-period">
              <img src={project1} alt="Project 1" className="project-image" />
            </td>
            <td className="details">
              <strong>Elisha Creation</strong><br />
              E-commerce<br />
              Textile Shop
              <a href="http://www.sanuga.free.nf" target="_blank" rel="noopener noreferrer">visit</a>
            </td>
          </motion.tr>
          <motion.tr
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <td className="time-period">
              <img src={project2} alt="Project 2" className="project-image" />
            </td>
            <td className="details">
              <strong>ChronoCraft</strong><br />
              E-commerce<br />
              Luxury Watch Store 
              <a href="http://chronocraft.free.nf/" target="_blank" rel="noopener noreferrer">visit</a>
            </td>
          </motion.tr>
        </tbody>
      </motion.table>
    </div>
  );
};

export default Project;
