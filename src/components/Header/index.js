import './styles.scss';

const Header = () => (
  <header className="menu">
    <nav>
      <a className="menu-link menu-link--selected" href="">Accueil</a>
      <a className="menu-link" href="">React</a>
      <a className="menu-link" href="">Angular</a>
      <button className="menu-btn" type="button">Activer le mode zen</button>
    </nav>
  </header>
);

export default Header;
