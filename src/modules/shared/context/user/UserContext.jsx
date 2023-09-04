import { createContext, useContext } from "react";

const AuthContext = createContext({});


const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth should be used within AuthContext');
    }
  
    return context;
  };


const AuthProvider = ({children , userDetails}) => {
    const user = userDetails.user?.userDetails
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}


export {useAuth};
export default AuthProvider;