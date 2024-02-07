import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RedditIcon from "@mui/icons-material/Reddit";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__social">
        <button className="Sidebar__social__facebook" href="#">
          <FacebookIcon />
        </button>
        <button className="Sidebar__social__twitter" href="#">
          <TwitterIcon />
        </button>
        <button className="Sidebar__social__telegram" href="#">
          <TelegramIcon />
        </button>
        <button className="Sidebar__social__pinterest" href="#">
          <PinterestIcon />
        </button>
        <button className="Sidebar__social__reddit" href="#">
          <RedditIcon />
        </button>
        <button className="Sidebar__social__like" href="#">
          <FavoriteIcon />
        </button>
      </div>
    </div>
  );
};
