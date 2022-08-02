import './index.scss'
import LogoA from '../../assets/images/logo-a.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoA} alt="Logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="Augusto" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                {/* <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink> */}
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/augusto-diaz-dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/AugustoDiaz-Dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/augustordiaz/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                    </a>
                </li>
                {/* <li>
                    <a href="skype:live:augustordiaz" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
                    </a>
                </li> */}
            </ul>
        </div>
    )
}

export default Sidebar