import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faBriefcase,
	faAddressCard,
	faBars,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function NavLink({ to, icon, label }) {
	return (
		<Link to={to} className="navbar__link">
			<FontAwesomeIcon
				icon={icon}
				size="lg"
				fixedWidth
				className="navbar__icon"
			/>
			<span className="navbar__label">{label}</span>
		</Link>
	);
}

export default function NavBar() {
	const [menuVisibility, setMenuVisibility] = useState(false);
	return (
		<div className="menu">
			{/*This div appears only when on mobile devices */}
			{/*Is just the hamburguer menu*/}
			<div
				className="mobile_menu navbar__icon"
				style={{ display: menuVisibility ? "none" : "" }}
				onClick={() => {
					setMenuVisibility(true);
				}}
			>
				<FontAwesomeIcon icon={faBars} size="2x" fixedWidth />
			</div>

			<nav
				onClick={() => {
					setMenuVisibility(false);
				}}
			>
				<ul className={`navbar ${menuVisibility ? "mobile--visible" : ""}`}>
					<li className="navbar__button">
						<NavLink to="/" icon={faHouse} label="Inicio" />
					</li>
					<li className="navbar__button">
						<NavLink to="/projetos" icon={faBriefcase} label="Projetos" />
					</li>
					<li className="navbar__button">
						<NavLink to="/sobre" icon={faAddressCard} label="Sobre mim" />
					</li>
					<li className="navbar__button">
						<NavLink to="/habilidades" icon={faBars} label="Habilidades" />
					</li>
					{/*Close icon that appears only when on mobile device*/}
					<li className="navbar__button navbar__icon">
						<FontAwesomeIcon icon={faXmark} size="lg" fixedWidth />
					</li>
				</ul>
			</nav>
		</div>
	);
}
