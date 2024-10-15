"use client";

import { auth } from "@/lib/firebase/firebaseClient";
import { UserInfo } from "firebase/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextState {
  currentuser: UserInfo | null;
}

const AuthContext = createContext<AuthContextState | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onIdTokenChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentuser: currentUser }}>
      {/* ローディングが終わったら */}
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("contextはAuthProvider内で取得する必要があります。");
  }
  return context;
};
