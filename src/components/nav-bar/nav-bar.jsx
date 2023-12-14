import { NavLink } from "react-router-dom";
function Navbar() {
  function handleClickAdmin() {
    user.pseudo = "";
    user.isLogged = false;
    // setChecked(!checked);
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Product</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={handleClickAdmin}>
            Deconnexion
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
