import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Habilidade.css";
export default function Habilidade({ icon, name, description, customIcon }) {
	return (
		<li className="habilidades__item">
			<div>
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
			<div>
				{icon ? (
					<FontAwesomeIcon
						fixedWidth
						icon={icon}
						className="habilidades__icon"
					/>
				) : (
					<svg
						aria-hidden="true"
						focusable="false"
						width="80px"
						height="80px"
						viewBox="0 0 80 80"
						className="svg-inline--fa fa-fw habilidades__icon habilidades__icon"
					>
						<path fill="currentColor" d={customIcon} />
					</svg>
				)}
			</div>
		</li>
	);
}
