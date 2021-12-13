import './styles.scss';

const Header = ({ categories, mainState }) => {
  const [state, setMainState] = mainState;
  const { isZen } = state;
  const changeMode = () => {
    setMainState({ isZen: !isZen });
  };

  return (
    <header className="menu">
      <nav>
        {
          categories.map((el) => {
            const { route, label } = el;
            return (
              <a className="menu-link menu-link--selected" href={route} key={label}>{label}</a>
            );
          })
        }
        <button className="menu-btn" type="button" onClick={changeMode}>Activer le mode zen</button>
      </nav>
    </header>
  );
};

export default Header;
