import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import UserDetails from "./components/UserDetails";
import { IuserData } from "./interfaces";
function App() {
  const compnayName = "Youcef Store";
  const [isLogged, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IuserData>({
    username: "",
    password: "",
    phone: "",
  });
  return (
    <>
      <Navbar
        companyName={compnayName}
        isLogged={isLogged}
        setIsLoggedIn={setIsLoggedIn}
      />
      {isLogged ? (
        <UserDetails userData={userData} />
      ) : (
        <LoginForm
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
}

export default App;
