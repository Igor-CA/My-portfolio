import Habilidade from "../components/Habilidade";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { TiCss3, TiHtml5 } from "react-icons/ti";
import { DiJavascript } from "react-icons/di";

const skills = [
	{
		name: "React",
		description:
			"O React.js é uma biblioteca JavaScript poderosa usada para desenvolver interfaces de usuário interativas e eficientes. Ele se destaca por permitir a criação de componentes reutilizáveis, simplificando o processo de construção de aplicativos web responsivos e de alto desempenho",
		icon: <FaReact />,
	},
	{
		name: "Tailwind CSS",
		description:
			"O Tailwind CSS é um framework de CSS altamente configurável que facilita a criação de interfaces de usuário elegantes e responsivas. Sua abordagem baseada em classes facilita a criação de estilos personalizados e a manutenção de um código limpo. É uma escolha popular para projetos que exigem designs modernos e eficiência no desenvolvimento.",
		icon: <SiTailwindcss />,
	},
	{
		name: "HTML",
		description:
			"O HTML é uma linguagem de marcação fundamental para definir a estrutura de um site. Ele cria a base sobre a qual o conteúdo é organizado, incluindo elementos como títulos, parágrafos, imagens e links.",
		icon: <TiHtml5 />,
	},
	{
		name: "CSS",
		description:
			"O CSS, assim como o HTML, é uma linguagem de marcação, mas sua função é definir a aparência da aplicação. Com o CSS, você pode estilizar elementos HTML, escolher cores, fontes, layouts e tornar sua aplicação visualmente atraente.",
		icon: <TiCss3 />,
	},
	{
		name: "JavaScript",
		description:
			"Diferentemente do HTML e CSS, o JavaScript é uma linguagem de programação que vai além da estrutura e aparência. É responsável por adicionar funcionalidades e interatividade às páginas da web, permitindo que os usuários interajam com a aplicação, realizem validações de formulários e criem experiências dinâmicas",
		icon: <DiJavascript />,
	},
	{
		name: "MongoDB",
		description:
			"O MongoDB é um banco de dados NoSQL amplamente utilizado para armazenar e recuperar dados de forma flexível e escalável. Sua estrutura de documentos permite o armazenamento de informações em formatos variados, tornando-o adequado para aplicativos que lidam com dados complexos e em constante evolução.",
		icon: <SiMongodb />,
	},
	{
		name: "Node.js",
		description:
			"O Node.js é um ambiente de tempo de execução de JavaScript do lado do servidor que permite a criação de aplicativos web escaláveis e de alto desempenho. Ele é conhecido por sua capacidade de lidar com entradas e saídas de forma eficiente, tornando-o ideal para aplicativos em tempo real, APIs e microserviços.",
		icon: <FaNodeJs />,
	},
];

export default function Habilidades() {
	return (
		<div className="bg-slate-50 max-w-fit m-auto px-4 py-2.5 rounded-md shadow-2xl">
			<h2 className="text-xl font-bold my-2">Habilidades</h2>
			<ul>
				{skills.map((skill) => {
					const { name, description, icon } = skill;
					return (
						<Habilidade
							key={name}
							name={name}
							description={description}
							icon={icon}
						></Habilidade>
					);
				})}
			</ul>
		</div>
	);
}
