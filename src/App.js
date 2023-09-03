import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Sobre from "./pages/Sobre";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
	const [visibleCopyMessaga, setVisibleCopyMessaga] = useState(false)
	const handleCopy = () => {
		navigator.clipboard.writeText("igorcaldeira.andrade@gmail.com")
		setVisibleCopyMessaga(true)
		setTimeout(() => {
			setVisibleCopyMessaga(false);
		}, 3000);
	}

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar></NavBar>
				{visibleCopyMessaga?<div className="message">Email copiado com sucesso</div>:null}
				<Routes>
					<Route path="/" element={<Main></Main>}></Route>
					<Route path="/sobre" element={<Sobre></Sobre>}></Route>
					<Route
						path="/habilidades"
						element={<Habilidades></Habilidades>}
					></Route>
					<Route path="/projetos" element={<Projetos></Projetos>}></Route>
					<Route path="/contatos" element={<Contatos></Contatos>}></Route>
				</Routes>

				<footer className="footer">
					<p>Contatos</p>
					<a href="https://github.com/Igor-CA" target="_blank" rel="noreferrer" >
						<FontAwesomeIcon icon={faGithub} className="footer__socials"/>
					</a>
					<FontAwesomeIcon icon={faEnvelope} className="footer__socials"
						onClick={handleCopy}
					/>
					<p>Igor Caldeira Andrade</p>
				</footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
