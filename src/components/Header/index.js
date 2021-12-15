import { Link } from "react-router-dom";
import './styles.scss';

const Header = ({ mainState, routes }) => {
  const [state, setMainState] = mainState;
  const { isZen } = state;
  const changeMode = () => {
    setMainState({ isZen: !isZen });
  };

  return (
    <header className="menu">
      <nav>
        {
          routes.map((el) => {
            const { key,path } = el;
            return (
              <Link className="menu-link menu-link--selected" to={path} key={key}>
                {key}
              </Link>// <a className="menu-link menu-link--selected" href={route}>{label}</a>
            );
          })
        }
        <button className="menu-btn" type="button" onClick={changeMode}>{isZen?"Désactiver":"Activer"} le mode zen</button>
      </nav>
    </header>
  );
};

export default Header;
