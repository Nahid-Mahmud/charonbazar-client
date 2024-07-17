import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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

  // signin with google

  const signinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // update profile
  const updateUser = (userName, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL:
        photoUrl ||
        "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
  };

  // signout user

  const singoutUser = () => {
    return signOut(auth);
  };

  // setting up an observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
      console.log("user form observer", currentUser);
    });

    return () => unSubscribe();
  }, []);

  const autContextValues = {
    signupUser,
    singoutUser,
    signinUser,
    signinWithGoogle,
    updateUser,
    user,
    userLoading
  };
  return <AuthContext.Provider value={autContextValues}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
