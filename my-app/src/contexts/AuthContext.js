import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

let initialData = {
  username: "",
  password: "",
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(initialData);

  const handleUsernameEntry = (e) => {
    setUserData({
      ...userData,
      username: e.target.value,
    });
  };

  const handlePasswordEntry = (e) => {
    setUserData({
      ...userData,
      password: e.target.value,
    });
  };

  const signup = (someData) => {
    console.log(someData);
    setIsAuthenticated(!isAuthenticated);
  };

  const login = (userData) => {
    setIsAuthenticated(!isAuthenticated);
    console.log(userData);
  };

  const logout = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        handleUsernameEntry,
        handlePasswordEntry,
        userData,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
