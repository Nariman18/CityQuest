import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateEmail,
} from "firebase/auth";
import auth from "../config/firebase";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signup = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName });
    return userCredential;
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  const updateUserProfile = async (displayName: string) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      await updateProfile(currentUser, {
        displayName: displayName,
      });

      setUser({
        ...user,
        displayName: displayName,
      });
    }
  };

  const updateUserProfileEmail = async (newEmail: string, password: string) => {
    const user = auth.currentUser;

    if (user && user.email) {
      const credential = await signInWithEmailAndPassword(
        auth,
        user.email,
        password
      );

      if (credential.user) {
        await signOut(auth); // sign out the user
        await updateEmail(user, newEmail);
        setUser({
          ...user,
          email: newEmail,
        });
      } else {
        throw new Error("User authentication failed");
      }
    } else {
      throw new Error("User not found");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        updateUserProfile,
        updateUserProfileEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
