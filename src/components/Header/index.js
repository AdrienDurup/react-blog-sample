import { Link, NavLink } from "react-router-dom";
import Spinner from "../Spinner";
import './styles.scss';

const Header = ({ isZenState, isLoading, setActiveCategory, routes }) => {
  const [isZen, setIsZen] = isZenState;
  const changeMode = () => {
    setIsZen(!isZen);
  };

  const setHandler = (cat) => () => {
    //setIsLoading(true);
    setActiveCategory(cat);
  };
  if(isLoading)return <Spinner />;

  return (
    <header className="menu">
      <nav>
        {
          routes.map((el) => {
            const { route, label } = el;
            console.log(`${route}`);
            return (
              <NavLink className="menu-link" to={`${route}`} key={label} onClick={setHandler(el)}>
                {label}
              </NavLink>// <a className="menu-link menu-link--selected" href={route}>{label}</a>
            );
          })
        }
        <button className="menu-btn" type="button" onClick={changeMode}>{isZen ? "Désactiver" : "Activer"} le mode zen</button>
      </nav>
    </header>
  );
};

export default Header;
