import { AuthContext } from "../contexts";

const AuthProvider = ({ children }) => {
  const autContextValues = {
    name: "nahid",
  };
  return <AuthContext.Provider value={autContextValues}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
