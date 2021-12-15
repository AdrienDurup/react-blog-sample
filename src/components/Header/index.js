import { Link, NavLink } from "react-router-dom";
import './styles.scss';

const Header = ({ isZenState, isLoadingState, routes }) => {
  const [isZen, setIsZen] = isZenState;
  const [isLoading, setIsLoading] = isLoadingState;
  const changeMode = () => {
    setIsZen(!isZen);
  };
  const activateLoadingSpinner = (e) => {
   // e.preventDefault();
    setIsLoading(true);
  };
  return (
    <header className="menu">
      <nav>
        {
          routes.map((el) => {
            const { route, label } = el;
            return (
              <NavLink className="menu-link" to={route} key={label} onClick={activateLoadingSpinner}>
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
