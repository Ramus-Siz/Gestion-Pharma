// import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  //   const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
    // {
    //   checked ? navigate("/allproduct") : navigate("/home");
    // }
  };
  function handleClickAdmin() {
    navigate("/allproduct");
    // setChecked(!checked);
  }

  return (
    <>
      <h1>Login Page</h1>
      {/* <input
        type="checkbox"
        name="admin"
        checked={checked}
        onChange={toggleCheck}
        id="admin"
      /> */}
      <button onClick={handleClick}>Connexion</button>
      <button onClick={handleClickAdmin}>Admin</button>
    </>
  );
}
export default Login;
