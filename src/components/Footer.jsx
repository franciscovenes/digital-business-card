import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faOrcid,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <ul className="social-list">
        <li>
          <a
            href="https://twitter.com/francisco_venes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/panchovenes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            href="https://orcid.org/0000-0001-6435-5562"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="social-icon" icon={faOrcid} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/franciscovenes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="social-icon" icon={faGithub} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
