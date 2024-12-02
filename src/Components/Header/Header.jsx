import "../../Styles/Header.css";
import Icon_menu from "../../assets/Header/icon_menu.png";
import Icon_user from "../../assets/Header/icon_user.png";
import Logo from "../../assets/Header/logo.png";

const Header = ({ contador, setContador, start, setStart, question }) => {
  return (
    <header>
      <nav>
        <div className="nav_up">
          <img
            src={Icon_menu}
            className="icon_menu"
            alt="icon de hamburguesa"
          />
          <img src={Icon_user} className="icon_user" alt="icon de Usuario" />
        </div>
        <div className="nav_down">
          {start ? (
            <img src={Logo} className="logo" alt="logo" />
          ) : (
            <p>{question}</p>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
