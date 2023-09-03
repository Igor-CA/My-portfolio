import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import "./MainPage.css"
export default function Main() {
	return (
		<div className="intro">
			<div className="intro__container">
				<div>
					<h1>Oi eu sou o Igor</h1>
					<p>
						Desenvolvedor <br /> front-end
						<a href="https://github.com/Igor-CA" target="_blank"  rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} className="intro__icons" />
						</a>
					</p>
				</div>
				<div className='icon-container'>
					<FontAwesomeIcon icon={faReact} className="react-icon" />
				</div>
			</div>
		</div>
	);
}
