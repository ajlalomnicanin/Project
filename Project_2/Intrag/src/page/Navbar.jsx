import { Link } from "react-router-dom";
import "../App.css";
import photo from "../Logo.jpg";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import "../style.css/Navbar.css";

export const Navbar = () => {
  return (
    <div className="main">
      <img src={photo} alt="Logo" id="nav-logo" />
      <ul>
        <li>
          <Link to="/" class="home-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <BiSolidMessageRoundedDetail className="icon" />
      {/* <img src={photo1} alt="Logo" id="nav-logo" /> */}
    </div>
  );
};
