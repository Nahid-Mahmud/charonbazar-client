import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "../contexts";
import { app } from "../config/firebaseConfig";
import { useEffect, useState } from "react";
// Auth for firebase
const auth = getAuth(app);
// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // state for user loading
  const [userLoading, setUserLoading] = useState(true);
  // state for holding user
  const [user, setUser] = useState(null);

  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user

  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signout user

  const singoutUser = () => {
    return signOut(auth);
  };

  // setting up an observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user form observer", currentUser);
      setUserLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const autContextValues = {
    signupUser,
    singoutUser,
    signinUser,
  };
  return <AuthContext.Provider value={autContextValues}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
