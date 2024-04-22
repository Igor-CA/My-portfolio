import { Link } from "react-router-dom";
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
		<Link to={to}>
			<FontAwesomeIcon
				icon={icon}
				size="lg"
				fixedWidth
				className="lg:hidden"
			/>
			<span className="whitespace-nowrap block text-sm lg:hover:underline">{label}</span>
		</Link>
	);
}

export default function NavBar() {
	const [menuVisibility, setMenuVisibility] = useState(false);
	return (
		<div className="text-slate-600 fixed bottom-6 right-5 z-50 cursor-pointer lg:relative lg:cursor-auto lg:bottom-0 lg:left-0">
			{console.log(menuVisibility)}
			{/*This div appears only when on mobile devices */}
			{/*Is just the hamburguer menu*/}
			<div
				className="flex w-14 h-14 rounded-md shadow-md bg-slate-50 items-center justify-center lg:hidden"
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
				<ul
					className={`list-none text-center pointer-events-auto font-bold grid grid-cols-3 rounded-md justify-center items-center p-2 h-40 w-60 bg-slate-50 lg:flex lg:w-full lg:h-auto lg:p-4 lg:rounded-none lg:text-white lg:bg-slate-600 lg:justify-evenly lg:opacity-100 lg:not-sr-only  ${
						menuVisibility ? "" : "sr-only pointer-events-none"
					}`}
				>
					<li>
						<NavLink to="/" icon={faHouse} label="Inicio" />
					</li>
					<li>
						<NavLink
							to="/projetos"
							icon={faBriefcase}
							label="Projetos"
						/>
					</li>
					<li>
						<NavLink
							to="/sobre"
							icon={faAddressCard}
							label="Sobre mim"
						/>
					</li>
					<li>
						<NavLink
							to="/habilidades"
							icon={faBars}
							label="Habilidades"
						/>
					</li>
					{/*Close icon that appears only when on mobile device*/}
					<li className="lg:hidden">
						<FontAwesomeIcon icon={faXmark} size="lg" fixedWidth />
					</li>
				</ul>
			</nav>
		</div>
	);
}
