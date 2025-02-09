import "./index.scss";
const style = {
  ulStyle: {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
  },
};
interface Iprops {
  companyName: string;
  isLogged: boolean;
  setIsLoggedIn: (val: boolean) => void;
}
function NavBar({ companyName, isLogged, setIsLoggedIn }: Iprops) {
  return (
    <nav className="navbar-list">
      <h3 style={{ color: "white" }}>{companyName}</h3>
      <ul style={style.ulStyle}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Contact me</a>
        </li>
      </ul>
      <button onClick={() => setIsLoggedIn(!isLogged)}>
        {isLogged ? "Logout" : "Login"}
      </button>
    </nav>
  );
}

export default NavBar;
