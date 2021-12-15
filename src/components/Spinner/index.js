// == Import
import './styles.scss';

// == Composant
const Spinner = (state) => {
  const { isLoading } = state;
  console.log("Spinner comp : ", isLoading);
  return <div className={isLoading ? "spinner" : "spinner --loaded"} />;
};

// == Export
export default Spinner;
