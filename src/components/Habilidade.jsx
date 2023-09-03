import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Habilidade.css"
export default function Habilidade({icon, name, description }) {
    console.log(description)
	return (
		<li className="habilidades__item">
			<div>
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
			<div>
				<FontAwesomeIcon fixedWidth icon={icon} className='habilidades__icon'/>
			</div>
		</li>
	);
}
