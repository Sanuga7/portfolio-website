import { motion } from 'framer-motion';
import './education.css';

const EducationTable = () => {
  return (
    <div className="table-container">
      <motion.h2 
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="table-heading">Education Timeline</motion.h2>
      <motion.table 
        className="education-table"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <tbody>
          <motion.tr
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <td className="time-period">2011 - 2025</td>
            <td className="details">
              <strong>Lumbini College</strong><br />
              Basic<br />
              Colombo 5, Sri lanka
            </td>
          </motion.tr>
          <motion.tr
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <td className="time-period">2023 - 2027</td>
            <td className="details">
              <strong>Java Institute Sri Lanka</strong><br />
              Bachelor of Computer Science (BEng)<br />
              Affiliated with IIC University, Cambodia
            </td>
          </motion.tr>
        </tbody>
      </motion.table>
    </div>
  );
};

export default EducationTable;
