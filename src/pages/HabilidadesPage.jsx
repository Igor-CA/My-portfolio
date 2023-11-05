import {
	faHtml5,
	faCss3Alt,
	faSquareJs,
	faReact,
	faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import Habilidade from "../components/Habilidade";

const customIcons = {
	tailwindCss:
		"M 22.5 34.25 C 24.832031 24.917969 30.667969 20.25 40 20.25 C 54 20.25 55.75 30.75 62.75 32.5 C 67.417969 33.667969 71.5 31.917969 75 27.25 C 72.667969 36.582031 66.832031 41.25 57.5 41.25 C 43.5 41.25 41.75 30.75 34.75 29 C 30.082031 27.832031 26 29.582031 22.5 34.25 Z M 5 55.25 C 7.332031 45.917969 13.167969 41.25 22.5 41.25 C 36.5 41.25 38.25 51.75 45.25 53.5 C 49.917969 54.667969 54 52.917969 57.5 48.25 C 55.167969 57.582031 49.332031 62.25 40 62.25 C 26 62.25 24.25 51.75 17.25 50 C 12.582031 48.832031 8.5 50.582031 5 55.25 Z M 5 55.25",
	mongoDB:
		"M 50.691406 35.113281 C 48.164062 23.960938 42.195312 20.296875 41.550781 18.894531 C 40.847656 17.90625 40.136719 16.148438 40.136719 16.148438 C 40.125 16.117188 40.105469 16.066406 40.082031 16.015625 C 40.011719 17.003906 39.972656 17.386719 39.039062 18.382812 C 37.59375 19.511719 30.167969 25.742188 29.566406 38.410156 C 29 50.226562 38.101562 57.265625 39.332031 58.164062 L 39.46875 58.265625 L 39.46875 58.253906 C 39.476562 58.316406 39.859375 61.066406 40.128906 63.984375 L 41.09375 63.984375 C 41.320312 61.921875 41.660156 59.875 42.109375 57.851562 L 42.1875 57.800781 C 42.738281 57.40625 43.261719 56.976562 43.757812 56.515625 L 43.816406 56.464844 C 46.429688 54.046875 51.132812 48.457031 51.085938 39.546875 C 51.078125 38.058594 50.945312 36.578125 50.691406 35.113281 Z M 40.027344 51.492188 C 40.027344 51.492188 40.027344 34.921875 40.574219 34.925781 C 41 34.925781 41.554688 56.300781 41.554688 56.300781 C 40.792969 56.210938 40.027344 52.78125 40.027344 51.492188 Z M 40.027344 51.492188 ",
};

const skills = [
	{
		name: "React",
		description:
			"O React.js é uma biblioteca JavaScript poderosa usada para desenvolver interfaces de usuário interativas e eficientes. Ele se destaca por permitir a criação de componentes reutilizáveis, simplificando o processo de construção de aplicativos web responsivos e de alto desempenho",
		icon: faReact,
	},
	{
		name: "Tailwind CSS",
		description:
			"O Tailwind CSS é um framework de CSS altamente configurável que facilita a criação de interfaces de usuário elegantes e responsivas. Sua abordagem baseada em classes facilita a criação de estilos personalizados e a manutenção de um código limpo. É uma escolha popular para projetos que exigem designs modernos e eficiência no desenvolvimento.",
		customIcon: customIcons.tailwindCss,
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
	{
		name: "MongoDB",
		description:
			"O MongoDB é um banco de dados NoSQL amplamente utilizado para armazenar e recuperar dados de forma flexível e escalável. Sua estrutura de documentos permite o armazenamento de informações em formatos variados, tornando-o adequado para aplicativos que lidam com dados complexos e em constante evolução.",
		customIcon: customIcons.mongoDB,
	},
	{
		name: "Node.js",
		description:
			"O Node.js é um ambiente de tempo de execução de JavaScript do lado do servidor que permite a criação de aplicativos web escaláveis e de alto desempenho. Ele é conhecido por sua capacidade de lidar com entradas e saídas de forma eficiente, tornando-o ideal para aplicativos em tempo real, APIs e microserviços.",
		icon: faNodeJs,
	},
];

export default function Habilidades() {
	return (
		<div className="container">
			<h2>Habilidades</h2>
			<ul className="habilidades">
				{skills.map((skill) => {
					const { name, description, icon, customIcon } = skill;
					return (
						<Habilidade
							key={name}
							name={name}
							description={description}
							icon={icon}
							customIcon={customIcon}
						></Habilidade>
					);
				})}
			</ul>
			<svg
				width="80px"
				height="80px"
				viewBox="0 0 80 80"
			>
				<path
					fill="currentColor"
					d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
				/>
			</svg>
		</div>
	);
}
