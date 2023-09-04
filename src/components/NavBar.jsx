import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faBriefcase,
	faAddressCard,
	faBars,
	faList,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
export default function NavBar({ onMobile }) {
	const [menuVisibility, setMenuVisibility] = useState(false);

  //TODO: Remake this component pretty sure it can be done with a single render and with the use of media querries
  const renderDesktopNavbar = () => {
    return(
      <nav className="navbar">
        <ul className="navbar__list">
          <li> <Link to="/" className="navbar__link">Inicio</Link> </li>
          <li> <Link to="/projetos" className="navbar__link">Projetos</Link> </li>
          <li> <Link to="/habilidades" className="navbar__link">Habilidades</Link> </li>
          <li> <Link to="/sobre" className="navbar__link">Sobre mim</Link> </li>
        </ul>
      </nav>
    )
  }

	const renderMobileNavbar = () => {
		return (
    <div className="mobile-menu">
			<div
				className="hamburger"
				style={{ display: menuVisibility ? "none" : "" }}
				onClick={() => {
					setMenuVisibility(true);
				}}
			>
				<FontAwesomeIcon icon={faBars} size="2x" fixedWidth />
			</div>
			<nav
				className={`mobile-navbar ${menuVisibility ? "visible" : ""}`}
				onClick={() => {
					setMenuVisibility(false);
				}}
			>
				<Link to={"/"} className="mobile-navbar__button">
					<FontAwesomeIcon icon={faHouse} />
					<span className="mobile-navbar__label">Inicio</span>
				</Link>

				<Link to={"/projetos"} className="mobile-navbar__button">
					<FontAwesomeIcon icon={faBriefcase} size="lg" fixedWidth />
					<span className="mobile-navbar__label">Projetos</span>
				</Link>

				<Link to={"/habilidades"} className="mobile-navbar__button">
					<FontAwesomeIcon icon={faList} size="lg" fixedWidth />
					<span className="mobile-navbar__label">Habilidades</span>
				</Link>

				<Link to={"/sobre"} className="mobile-navbar__button">
					<FontAwesomeIcon icon={faAddressCard} size="lg" fixedWidth />
					<span className="mobile-navbar__label">Sobre mim</span>
				</Link>

				<div className="mobile-navbar__button"></div>

				<div className="mobile-navbar__button__grow">
					<FontAwesomeIcon icon={faXmark} size="lg" fixedWidth />
          <span className="mobile-navbar__label">close</span>
				</div>

			</nav>
		</div>
		);
	};
  return onMobile? renderMobileNavbar() : renderDesktopNavbar()
}
