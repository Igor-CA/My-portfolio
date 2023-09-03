import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from '@fortawesome/free-solid-svg-icons'

import "./Projeto.css"
export default function Projeto({props}) {
	const { name, image, repositoryName, livePreviewUrl, description } = props;
	return (
		<div className="projeto">
			<h3>{name}</h3>
			<div className="projeto__cover-container">
                <div className="projeto__links">
                    <a
                        href={livePreviewUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Clique para acessar o projeto"
                    >
                        <FontAwesomeIcon icon={faEye}  className="links__icons"/>
                    </a>
                    <a
                        href={`https://github.com/Igor-CA/${repositoryName}`}
                        target="_blank"
                        rel="noreferrer"
                        title="Clique para acessar o repositório"
                    >
                        <FontAwesomeIcon icon={faGithub} className="links__icons"/>
                    </a>
                </div>
                <img src={image} alt={`preview do projeto ${name}`} className="projeto__cover"/>
            </div>
			<p>{description}</p>
		</div>
	);
}
