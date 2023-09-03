import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {

	return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li> <Link to="/" className="navbar__link">Inicio</Link> </li>
        <li> <Link to="/sobre" className="navbar__link">Sobre mim</Link> </li>
        <li> <Link to="/habilidades" className="navbar__link">Habilidades</Link> </li>
        <li> <Link to="/projetos" className="navbar__link">Projetos</Link> </li>
        <li> <Link to="/dsa" className="navbar__link">Contatos</Link> </li>
      </ul>
    </nav>
	);
}
