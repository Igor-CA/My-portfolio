import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Sobre from "./pages/Sobre";
import Habilidades from "./pages/Habilidades";
import todoImg from './assets/todolist.png'
import memoryGameImg from './assets/Jogo da memória.png'
import eshopImg from './assets/Shopping-cart-demo.png'
import whereIsImg from './assets/Onde esta.png'
import Projeto from "./components/Projeto";

const projetos = [
	{
		name: "Jogo da memória",
		description:
		"Simples jogo da memória desenvolvido utilizando React. O objetico é escolher um personagem que ainda não tenha escolhido e sua pontuação será resetada caso escolha o mesmo personagem novamente",
		repositoryName:"memory-card-game",
		livePreviewUrl:"https://igor-ca.github.io/memory-card-game/",
		image: memoryGameImg 
	},
	{
		name: "Onde esta?",
		description:
			"Jogo onde você deve encontrar os personagems que aparecem na tela no meio de uma image. Projeto simples com interação com firebase como back-end para armazenar os placares e a posição de cada personagem",
		repositoryName:"where-is-waldo",
		livePreviewUrl:"https://find-these-characters.web.app/",
		image: whereIsImg 
	},
	{
		name: "Lista de tarefas",
		description:
			"Lista de tarefas simples criada usando puramente HTML, CSS e JavaScript",
		repositoryName:"ToDo-ToPlan",
		livePreviewUrl:"https://igor-ca.github.io/ToDo-ToPlan/to-do-list.html",
		image: todoImg 
	},
	{
		name: "Loja falsa",
		description:
			"Projeto feito como exercício para aprender a utilizar react e react-router com mudança de rotas feitas do lado do cliente",
		repositoryName:"shopping-cart",
		livePreviewUrl:"https://igor-ca.github.io/shopping-cart/",
		image: eshopImg 
	},
]


function App() {
	/*
    Habilidades
      html, css e JS
      React js
  */
	return (
		<div>
			<BrowserRouter>
				<NavBar></NavBar>
				<Routes>
					<Route path="/" element={<Main></Main>}></Route>
					<Route path="/sobre" element={<Sobre></Sobre>}></Route>
					<Route
						path="/habilidades"
						element={<Habilidades></Habilidades>}
					></Route>
				</Routes>
			</BrowserRouter>

			
			<div className="App">
				<h2>Projetos</h2>
				<div className="projects-container">
					{projetos.map(projeto => {
						return <Projeto props={projeto}></Projeto>
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
