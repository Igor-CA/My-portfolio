import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./pages/MainPage";
import Sobre from "./pages/Sobre";
import Habilidades from "./pages/HabilidadesPage";
import Projetos from "./pages/ProjetosPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function App() {
	const [visibleCopyMessaga, setVisibleCopyMessaga] = useState(false);

	const [onMobile, setOnMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const onMobileScreen = window.matchMedia("(max-width: 768px)").matches;
			setOnMobile(onMobileScreen);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
	}, []);

	const handleCopy = () => {
		navigator.clipboard.writeText("igorcaldeira.andrade@gmail.com");
		setVisibleCopyMessaga(true);
		setTimeout(() => {
			setVisibleCopyMessaga(false);
		}, 3000);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar onMobile={onMobile}></NavBar>

				<Routes>
					<Route path="/" element={<Main></Main>}></Route>
					<Route path="/sobre" element={<Sobre></Sobre>}></Route>
					<Route
						path="/habilidades"
						element={<Habilidades></Habilidades>}
					></Route>
					<Route path="/projetos" element={<Projetos></Projetos>}></Route>
				</Routes>

				<footer className="footer">
					<p>Contatos</p>
					<a href="https://github.com/Igor-CA" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} className="footer__socials" />
					</a>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="footer__socials"
						onClick={handleCopy}
					/>
					<a
						href="https://www.linkedin.com/in/igor-caldeira-andrade-abab0629a/"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} className="footer__socials" />
					</a>
					<p>Igor Caldeira Andrade</p>

					{visibleCopyMessaga ? (
						<div className="message">Email copiado com sucesso</div>
					) : null}
				</footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
