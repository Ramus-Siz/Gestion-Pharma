import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/userContext";

function Login({ onLoginSubmit }) {
  //   const [checked, setChecked] = useState(false);
  const [pseudoInput, setPseudoInput] = useState("");
  const user = useContext(UserContext);

  const navigate = useNavigate();

  const handlLoginSubmit = () => {
    if (pseudoInput) {
      onLoginSubmit(pseudoInput);
      navigate("/home");
    }
  };

  function handleClickAdmin() {
    navigate("/allproduct");
    console.log(user.pseudo);

    // setChecked(!checked);
  }

  return (
    <>
      {console.log(user.pseudo)}

      <h1>Login Page</h1>

      <label>Pseudo : </label>
      <input
        type="text"
        value={pseudoInput}
        onChange={(e) => setPseudoInput(e.target.value)}
      />
      <button onClick={handlLoginSubmit}>Connexion</button>
      <button onClick={handleClickAdmin}>Admin</button>
    </>
  );
}
export default Login;
