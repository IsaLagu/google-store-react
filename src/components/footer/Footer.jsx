import './footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://x.com/madebygoogle" target="_blank" rel="noopener noreferrer">
        <img src="src\assets\icons\SM-x.svg" alt="X / Twitter icon" />
        </a>
        <a href="https://www.instagram.com/madebygoogle/" target="_blank" rel="noopener noreferrer">
        <img src="src\assets\icons\SM-instagram.svg" alt="Instagram icon" />
        </a>
        <a href="https://www.facebook.com/madebygoogle" target="_blank" rel="noopener noreferrer">
        <img src="src\assets\icons\SM-facebook.svg" alt="Facebook icon" />
        </a>
        <a href="https://www.youtube.com/madebygoogle" target="_blank" rel="noopener noreferrer">
        <img src="src\assets\icons\SM-youtube.svg" alt="Youtube icon" />
        </a>
        <a href="https://www.tiktok.com/@googlepixel" target="_blank" rel="noopener noreferrer">
        <img src="src\assets\icons\SM-tiktok.svg" alt="TikTok icon" />
        </a>
      </div>
      <span className="footer-texts">
        <div className="spain">
          <img src="src\assets\icons\Spain.svg" alt="Spain flag" />
          <a href="#spain">Spain</a>
        </div>
        <a href="#privacy">Privacy</a>
        <a href="#commitment">Google Nest Commitment to privacy</a>
        <a href="#sales-terms">Sales Terms</a>
        <a href="#terms-of-service">Terms of Service</a>
      </span>
    </footer>
  );
}

export default Footer;