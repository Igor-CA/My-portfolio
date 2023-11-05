import todoImg from "../assets/todolist.png";
import memoryGameImg from "../assets/Jogo da memória.png";
import mangaShelfImg from "../assets/mangaShelfImg.png"
import eshopImg from "../assets/Shopping-cart-demo.png";
import whereIsImg from "../assets/Onde esta.png";
import mernAuthImg from "../assets/mernAuthImg.png" 
import Projeto from "../components/Projeto";

const projetos = [
	{
		name: "Manga Shelf",
		description:
			'O Manga Shelf é uma aplicação web que facilita o gerenciamento de coleções de mangás (quadrinhos japoneses). É um projeto fullstack desenvolvido como freelancer com o uso de node.js, react e mongoDB. Nele é possivel criar uma conta, adicionar mangás à sua "prateleira", marcar os volumes que já possui, identificar o que falta para completar sua coleção e mais.',
		image: mangaShelfImg,
		livePreviewUrl: "https://mangashelf.com.br/",
	},
	{
		name: "Autenticação de usuários",
		description:
			"um site simples de autenticação de usuário desenvolvido com a stack MERN (MongoDB, Express.js, React e Node.js) e estilizado usando o Tailwind CSS. O projeto consiste em uma página React que utiliza o React Router para facilitar a navegação no lado do cliente e se conecta a uma API simples para a manipulação de dados.",
		livePreviewUrl:"https://mern-auth.igorcaldeira.dev/",
		repositoryName:"mern-auth-code",	
		image: mernAuthImg,		
	},
	{
		name: "Jogo da memória",
		description:
			"Simples jogo da memória desenvolvido utilizando React. O objetico é escolher um personagem que ainda não tenha escolhido e sua pontuação será resetada caso escolha o mesmo personagem novamente",
		repositoryName: "memory-card-game",
		livePreviewUrl: "https://igor-ca.github.io/memory-card-game/",
		image: memoryGameImg,
	},
	{
		name: "Onde esta?",
		description:
			"Jogo onde você deve encontrar os personagems que aparecem na tela no meio de uma image. Projeto simples com interação com firebase como back-end para armazenar os placares e a posição de cada personagem",
		repositoryName: "where-is-waldo",
		livePreviewUrl: "https://find-these-characters.web.app/",
		image: whereIsImg,
	},
	{
		name: "Lista de tarefas",
		description:
			"Lista de tarefas simples criada usando puramente HTML, CSS e JavaScript",
		repositoryName: "ToDo-ToPlan",
		livePreviewUrl: "https://igor-ca.github.io/ToDo-ToPlan/to-do-list.html",
		image: todoImg,
	},
	{
		name: "Loja falsa",
		description:
			"Projeto feito como exercício para aprender a utilizar react e react-router com mudança de rotas feitas do lado do cliente",
		repositoryName: "shopping-cart",
		livePreviewUrl: "https://igor-ca.github.io/shopping-cart/",
		image: eshopImg,
	},
];

export default function ProjetosPage() {
	return (
		<div className="container">
			<div className="projects-container">
				{projetos.map((projeto) => {
					return <Projeto key={projeto.name} props={projeto}></Projeto>;
				})}
			</div>
		</div>
	);
}
