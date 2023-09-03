import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "./Main.css"
export default function Main() {
	return (
		<div className="intro">
			<div className="intro__container">
				<h1>Oi eu sou o Igor</h1>
				<p>
					Desenvolvedor front-end
					<a href="https://github.com/Igor-CA" target="_blank"  rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} className="intro__icons" />
					</a>
				</p>
			</div>
		</div>
	);
}
