import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3Alt,
	faSquareJs,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import Habilidade from "../components/Habilidade";

const skills = [
	{
		name: "React",
		description:
			"O React.js é uma biblioteca JavaScript poderosa usada para desenvolver interfaces de usuário interativas e eficientes. Ele se destaca por permitir a criação de componentes reutilizáveis, simplificando o processo de construção de aplicativos web responsivos e de alto desempenho",
		icon: faReact,
	},
	{
		name: "HTML",
		description:
			"O HTML é uma linguagem de marcação fundamental para definir a estrutura de um site. Ele cria a base sobre a qual o conteúdo é organizado, incluindo elementos como títulos, parágrafos, imagens e links.",
		icon: faHtml5,
	},
	{
		name: "CSS",
		description:
			"O CSS, assim como o HTML, é uma linguagem de marcação, mas sua função é definir a aparência da aplicação. Com o CSS, você pode estilizar elementos HTML, escolher cores, fontes, layouts e tornar sua aplicação visualmente atraente.",
		icon: faCss3Alt,
	},
	{
		name: "JavaScript",
		description:
			"Diferentemente do HTML e CSS, o JavaScript é uma linguagem de programação que vai além da estrutura e aparência. É responsável por adicionar funcionalidades e interatividade às páginas da web, permitindo que os usuários interajam com a aplicação, realizem validações de formulários e criem experiências dinâmicas",
		icon: faSquareJs,
	},
];

export default function Habilidades() {
	return (
		<div className="container">
			<h2>Habilidades</h2>
			<ul className="habilidades">
				{skills.map(skill => {
                    const {name, description, icon} = skill
                    return (
                        <Habilidade 
                            name={name}
                            description={description}
                            icon={icon}></Habilidade>
                    )
                })}
			</ul>
		</div>
	);
}
