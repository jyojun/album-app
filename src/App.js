import "./App.css";
import Router from "./AppRouter";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(() => {
    const token = localStorage.getItem("auth-token");
    return token !== null;
  });

  const login = () => setAuthenticated(true);

  const logout = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <div>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
