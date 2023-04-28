import { useState } from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import loading from "../src/assets/loading.gif";
import { ThemeContextProvider, ThemeContext } from "./context/ThemeContext";

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <img src={loading} alt="loading" />;
  }
  return (
    <ThemeContextProvider>
      <div className="App">
        {user && (
          <div>
            <h1>{`Hello ${user.name}`}</h1>
          </div>
        )}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
