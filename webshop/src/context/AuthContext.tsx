import { createContext, ReactNode, useState } from "react";

export const AuthContext = createContext({
  loggedIn: false,
  setLoggedIn: (_newValue: boolean) => {}
});

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") === "123");

  return (    // const {loggedIn, setLoggedIn} = useContext(AuthContext);
    <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

// TypeScript
// Redux --> Contexti edasiarendus