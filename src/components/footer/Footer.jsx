import './footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <img src="src\assets\icons\SM-x.svg" alt="x icon" />
        <img src="src\assets\icons\SM-instagram.svg" alt="insta icon" />
        <img src="src\assets\icons\SM-facebook.svg" alt="fb icon" />
        <img src="src\assets\icons\SM-youtube.svg" alt="yt icon" />
        <img src="src\assets\icons\SM-tiktok.svg" alt="tt icon" />
      </div>
      <span className="footer-texts">
        <div className="spain">
          <img src="src\assets\icons\Spain.svg" alt="Spain" />
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