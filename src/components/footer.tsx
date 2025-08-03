

const Footer = () => {
  return (
    <footer className="text-light py-4 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 Sanuga Kusalwin. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
