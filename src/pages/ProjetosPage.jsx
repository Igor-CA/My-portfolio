import todoImg from "../assets/todolist.png";
import memoryGameImg from "../assets/Jogo da memória.png";
import mangaShelfImg from "../assets/mangaShelfImg3.png";
import eshopImg from "../assets/Shopping-cart-demo.png";
import whereIsImg from "../assets/Onde esta.png";
import mernAuthImg from "../assets/mernAuthImg.png";
import Projeto from "../components/Projeto";
import stringArtImg from "../assets/stringArtImg.png";
import blogImage from "../assets/blog.png";
import { DiNodejsSmall } from "react-icons/di";
import {
	SiExpress,
	SiFirebase,
	SiJavascript,
	SiMongodb,
	SiTailwindcss,
} from "react-icons/si";
import { FaMarkdown, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";

const projetos = [
	{
		name: "Manga Shelf",
		description:
			'O Manga Shelf é uma aplicação web que facilita o gerenciamento de coleções de mangás (quadrinhos japoneses). É um projeto fullstack desenvolvido com o uso de node.js, react e mongoDB. Nele é possivel criar uma conta, adicionar mangás à sua "prateleira", marcar os volumes que já possui, identificar o que falta para completar sua coleção e mais.',
		image: mangaShelfImg,
		repositoryName: "manga-shelf",
		livePreviewUrl: "https://mangashelf.com.br/",
		icons: [<SiMongodb />, <DiNodejsSmall />, <SiExpress />, <FaReact />],
	},
	{
		name: "Dev blog",
		description:
			"Um blog criado como uma plataforma para documentar meu progresso, compartilhar meus projetos e oferecer dicas e truques enquanto aprendo ao longo do caminho. O blog possui duas linguas, opção de tema escuro ou claro e cria os posts por meio de conversão de arquivos markdown",
		image: blogImage,
		repositoryName: "dev-blog",
		livePreviewUrl: "https:/blog.igorcaldeira.dev",
		icons: [
			<FaReact />,
			<FaMarkdown />,
			<SiJavascript />,
			<SiTailwindcss />,
		],
	},
	{
		name: "Sring art maker",
		description:
			"Este projeto é um simples gerador de arte de cordas baseado na web. A arte de cordas, ou string art em inglês, é uma forma de arte na qual linhas são dispostas geometricamente em uma superfície fixa para criar padrões ou imagens. Tipicamente, essas linhas são criadas tensionando um fio ou cordão entre pontos fixos, como pregos ou alfinetes, formando uma composição visualmente interessante. Você pode inserir qualquer imagem e ele irá gerar uma prévia de como deve ficar e gerar todos os passos para que você possa criar sua própria peça de arte.",
		repositoryName: "string-art-maker",
		livePreviewUrl: "https://stringart.igorcaldeira.dev/",
		image: stringArtImg,
		icons: [<FaReact />, <SiJavascript />, <SiTailwindcss />],
	},
	{
		name: "Autenticação de usuários",
		description:
			"um site simples de autenticação de usuário desenvolvido com a stack MERN (MongoDB, Express.js, React e Node.js) e estilizado usando o Tailwind CSS. O projeto consiste em uma página React que utiliza o React Router para facilitar a navegação no lado do cliente e se conecta a uma API simples para a manipulação de dados.",
		livePreviewUrl: "https://mern-auth.igorcaldeira.dev/",
		repositoryName: "mern-auth-code",
		image: mernAuthImg,
		icons: [<SiMongodb />, <DiNodejsSmall />, <SiExpress />, <FaReact />],
	},
	{
		name: "Jogo da memória",
		description:
			"Simples jogo da memória desenvolvido utilizando React. O objetico é escolher um personagem que ainda não tenha escolhido e sua pontuação será resetada caso escolha o mesmo personagem novamente",
		repositoryName: "memory-card-game",
		livePreviewUrl: "https://igor-ca.github.io/memory-card-game/",
		image: memoryGameImg,
		icons: [<FaReact />],
	},
	{
		name: "Onde esta?",
		description:
			"Jogo onde você deve encontrar os personagems que aparecem na tela no meio de uma image. Projeto simples com interação com firebase como back-end para armazenar os placares e a posição de cada personagem",
		repositoryName: "where-is-waldo",
		livePreviewUrl: "https://find.igorcaldeira.dev",
		image: whereIsImg,
		icons: [<FaReact />, <SiFirebase />],
	},
	{
		name: "Lista de tarefas",
		description:
			"Lista de tarefas simples criada usando puramente HTML, CSS e JavaScript",
		repositoryName: "ToDo-ToPlan",
		livePreviewUrl: "https://igor-ca.github.io/ToDo-ToPlan/to-do-list.html",
		image: todoImg,
		icons: [<SiJavascript />, <IoLogoCss3 />, <IoLogoHtml5 />],
	},
	{
		name: "Loja falsa",
		description:
			"Projeto feito como exercício para aprender a utilizar react e react-router com mudança de rotas feitas do lado do cliente",
		repositoryName: "shopping-cart",
		livePreviewUrl: "https://igor-ca.github.io/shopping-cart/",
		image: eshopImg,
		icons: [<FaReact />],
	},
];

export default function ProjetosPage() {
	return (
		<div className="bg-slate-50 max-w-fit m-auto px-4 py-2.5 rounded-md shadow-2xl grid grid-cols-2 gap-4">
			{projetos.map((projeto) => {
				return <Projeto key={projeto.name} props={projeto}></Projeto>;
			})}
		</div>
	);
}
