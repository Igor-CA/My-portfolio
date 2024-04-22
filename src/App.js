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
		<div className="bg-sky-300 min-h-svh text-slate-700">
			<BrowserRouter>
				<NavBar onMobile={onMobile}></NavBar>

				<div className="flex justify-center items-center px-4 py-2.5 max-w-5xl mx-auto min-h-svh">
					<Routes>
						<Route path="/" element={<Main></Main>}></Route>
						<Route path="/sobre" element={<Sobre></Sobre>}></Route>
						<Route
							path="/habilidades"
							element={<Habilidades></Habilidades>}
						></Route>
						<Route path="/projetos" element={<Projetos></Projetos>}></Route>
					</Routes>
				</div>

				<footer className="text-center p-2.5 bg-slate-600 text-white">
					<p>Contatos</p>
					<a href="https://github.com/Igor-CA" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} className="cursor-pointer text-4xl p-2.5 transition hover:text-slate-300" />
					</a>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="cursor-pointer text-4xl p-2.5 transition hover:text-slate-300"
						onClick={handleCopy}
					/>
					<a
						href="https://www.linkedin.com/in/igor-caldeira-andrade-abab0629a/"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} className="cursor-pointer text-4xl p-2.5 transition hover:text-slate-300" />
					</a>
					<p>Igor Caldeira Andrade</p>

					{visibleCopyMessaga ? (
						<div className="font-bold fixed top-5 p-4 text-slate-300 bg-slate-800 border-2 border-slate-600 rounded-md left-1/2 -translate-x-1/2 z-50 max-w-7xl">Email copiado com sucesso</div>
					) : null}
				</footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
