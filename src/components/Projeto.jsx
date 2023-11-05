import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Projeto.css";
export default function Projeto({ props }) {
	const { name, image, repositoryName, livePreviewUrl, description } = props;
	return (
		<div className="projeto">
			<div className="projeto__cover-container">
				<img
					src={image}
					alt={`preview do projeto ${name}`}
					className="projeto__cover"
				/>
			</div>
			<div>
                <a
                    className="projeto_nome"
                    href={livePreviewUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Clique para acessar o projeto"
                >
                    {name}
                </a>
               {repositoryName && <a
                    href={`https://github.com/Igor-CA/${repositoryName}`}
                    target="_blank"
                    rel="noreferrer"
                    title="Clique para acessar o repositório"
                >
                    <FontAwesomeIcon icon={faGithub} className="links__icons" />
                </a>}
            </div>
			<p>{description}</p>
		</div>
	);
}
