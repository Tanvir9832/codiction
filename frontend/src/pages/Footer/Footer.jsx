import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="outer_footer">
      <div className="footer">
        <div className="footer_first">
          <h1 className="footer_first_tag">Codiction</h1>
          <p className="footer_first_content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            velit repellat harum voluptas, eos laboriosam quo officiis itaque
            illum dignissimos. Harum voluptatem quidem, tempora nulla labore
            iure eligendi aut eum. Atque ducimus possimus harum consectetur,
            voluptatum repudiandae libero exercitationem repellat alias
            reprehenderit voluptatem asperiores fugiat cupiditate voluptatibus
            magni odit vero.
          </p>
          <div className="footer_first_icons">
            <a
              href="https://www.github.com/codiction/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com/codiction"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://www.youtube.com/codiction/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://facebook.com/codiction"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookRoundedIcon />
            </a>
          </div>
        </div>

        <div className="footer_second">
          <div className="footer_second_about">
            <h2 className="footer_second_about_tag">ABOUT</h2>
            <ul>
              <li>History</li>
              <li>Our Team</li>
              <li>Brand Guidelines</li>
              <li>Terms&Condition</li>
              <li>Privace Policy</li>
            </ul>
          </div>
          <div className="footer_second_service">
            <h2 className="footer_second_service_tag">SERVICE</h2>
            <ul>
              <li>How to Order</li>
              <li>Our Product</li>
              <li>Order Status</li>
              <li>Promo</li>
              <li>Payment Method</li>
            </ul>
          </div>
          <div className="footer_second_other">
            <h2 className="footer_second_other_tag">OTHER</h2>
            <ul>
              <li>Contact us</li>
              <li>Help</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://www.github.com/codiction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://twitter.com/codiction"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </a>
        <a
          href="https://www.youtube.com/codiction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon />
        </a>
        <a
          href="https://facebook.com/codiction"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookRoundedIcon />
        </a>
      </div>
      <p className="credit"> Created by Md Tanvir Alam Anik <br/>   tanvir9832@gmail.com  &copy; 2023 </p>
    </div>
  );
};

export default Footer;
