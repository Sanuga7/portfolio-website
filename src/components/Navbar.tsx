import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-transparent navbar-dark mt-2">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Bootstrap"
              width="100"
              height="100"
            />
          </a>
          <div className="d-flex justify-content-end">
            <a href="#" className=" me-3 logo">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="logo me-3">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="logo me-3">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" className="logo">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
