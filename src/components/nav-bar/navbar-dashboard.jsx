import { NavLink } from "react-router-dom";
function NavbarDashboard() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/allproduct">Produits</NavLink>
        </li>
        <li>
          <NavLink to="/createproduct">Ajouter un produit</NavLink>
        </li>
        <li>
          <NavLink to="/updateproduct">Modifier un produit</NavLink>
        </li>
        <li>
          <NavLink to="/deleteproduct">Suprimer un produit</NavLink>
        </li>

        <li>
          <NavLink to="/">Deconnexion</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarDashboard;
