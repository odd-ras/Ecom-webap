import { createContext, useContext, useState } from "react";

export const userContext = createContext();

export const useUserdata = () => {
  return useContext(userContext);
};

let initialData = {
  username: "",
  password: "",
};

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialData);

  const handleUsernameEntry = (e) => {
    console.log(e.target.value);
    setUserData({
      ...userData,
      username: e.target.value,
    });
  };

  const handlePasswordEntry = (e) => {
    console.log(e.target.value);
    setUserData({
      ...userData,
      password: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(userData);
  };

  return (
    <userContext.Provider
      value={{
        userData,
        setUserData,
        handleUsernameEntry,
        handlePasswordEntry,
        handleSubmit,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
