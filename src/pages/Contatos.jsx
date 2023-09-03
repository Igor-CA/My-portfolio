import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default function Contatos() {
	return (
		<div className="container">
			<ul>
				<li>
					<a
						href="https://github.com/Igor-CA"
						target="_blank"
						rel="noreferrer"
					>
                        <FontAwesomeIcon icon={faGithub} />
					</a>
                    /Igor-CA
				</li>
				<li>E-mail: igorcaldeira.andrade@gmail.com</li>
			</ul>
		</div>
	);
}
