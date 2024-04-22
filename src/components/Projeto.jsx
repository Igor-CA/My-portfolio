import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projeto({ props }) {
	const { name, image, repositoryName, livePreviewUrl, description, icons } =
		props;
	return (
		<div className="max-w-prose">
			<img
				src={image}
				alt={`preview do projeto ${name}`}
				className="aspect-video w-full"
			/>
			<div className="flex gap-4 my-2.5">
				{icons.map((icon) => {
					return icon;
				})}
			</div>
			<div>
				<a
					className="underline text-blue-500 text-xl cursor-pointer"
					href={livePreviewUrl}
					target="_blank"
					rel="noreferrer"
					title="Clique para acessar o projeto"
				>
					{name}
				</a>
				{repositoryName && (
					<a
						href={`https://github.com/Igor-CA/${repositoryName}`}
						target="_blank"
						rel="noreferrer"
						title="Clique para acessar o repositório"
					>
						<FontAwesomeIcon
							icon={faGithub}
							className="text-xl pl-2.5 hover:text-slate-500 transition"
						/>
					</a>
				)}
			</div>
			<p>{description}</p>
		</div>
	);
}
