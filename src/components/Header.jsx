import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/perfil.png";

function Header() {
  return (
    <>
      <img className="profile-img" src={logo} />
      <section className="header">
        <h1 className="header--name">Francisco Venes</h1>
        <h3 className="header--title">Frontend Developer</h3>
        <a
          className="header--website"
          href="https://github.com/franciscovenes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github profile
        </a>
        <button className="header--email-btn">
          <FontAwesomeIcon className="envelope" icon={faEnvelope} />
          <span>Email</span>
        </button>
      </section>
    </>
  );
}

export default Header;
