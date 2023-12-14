import { useContext } from "react";
import UserContext from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  if (!user.isLogged) {
    navigate("/");
    console.log(user.pseudo);
  }
  return (
    <>
      {console.log(user.pseudo)}
      <h1>Hello,{user.pseudo}</h1>
      <h1>Welcome to Gestion Pharma</h1>
      <img src="src/images/médicaments.png" alt="medocs" />
    </>
  );
}

export default Home;
