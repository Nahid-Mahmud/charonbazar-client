import AuthProvider from "../providers/AuthProvider";

const Wrapper = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Wrapper;
