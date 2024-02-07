import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import RssFeedIcon from "@mui/icons-material/RssFeed";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__content">
          <form className="footer__wrapper__content__form">
            <h2>LOGOTYPE</h2>
            <span>Lorem Ipsum is simply dummy</span>
            <br />
            <br />
            <span>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
            </span>
            <div className="footer__wrapper__content__form__icons">
              <button href="#">
                <FacebookIcon />
              </button>
              <button href="#">
                <TwitterIcon />
              </button>
              <button href="#">
                <InstagramIcon />
              </button>
              <button href="#">
                <YouTubeIcon />
              </button>
              <button href="#">
                <EmailIcon />
              </button>
              <button href="#">
                <RssFeedIcon />
              </button>
            </div>
          </form>
          <div className="footer__wrapper__content__section">
            <h3>Categhory</h3>
            <ul>
              <li>item 1</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
              <li>item 6</li>
            </ul>
          </div>
          <div className="footer__wrapper__content__section">
            <h3>Play better</h3>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
          <div className="footer__wrapper__content__section">
            <h3>Useful links</h3>
            <ul>
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </ul>
          </div>
        </div>
        <div className="footer__wrapper__bottom">
          <span>Copyright © 2024. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
};
