import React, { useState, useEffect } from "react";
import { auth } from "./FirebaseProvider";

export interface IAuthProps extends React.PropsWithChildren<any> {}
export interface IAuthState {
  user?: IAuthUser;
  checkedAuth: boolean;
}

export interface IAuthUser {
  displayName: string;
  uid: string;
  photoURL: string;
}

export interface IAuthProvider {
  user?: IAuthUser;
  checkedAuth: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = React.createContext<IAuthProvider>({
  checkedAuth: false,
  login: () => new Promise(() => {}),
  logout: () => new Promise(() => {}),
});

export function Auth(props: IAuthProps) {
  const [user, setUser] = useState<IAuthUser>();
  const [checkedAuth, setCheckedAuth] = useState<boolean>(false);
  const provider = new auth.GithubAuthProvider();

  console.log("render auth", user);
  useEffect(() => {
    auth().onAuthStateChanged((potentialUser) => {
      setCheckedAuth(false);
      if (potentialUser) {
        setUserPromise(potentialUser);
      }
    });
  }, []);

  async function setUserPromise(cb: firebase.User | Promise<any>) {
    setCheckedAuth(false);
    // if (isPromise(cb)) {
    //   try {
    //     potentialUser = await cb;
    //   } catch (err) {
    //     potentialUser = null;
    //     console.error(err);
    //     // toast for failure
    //   }
    // } else {
    //   potentialUser = cb;
    // }
    try {
      const firebaseUser = await Promise.resolve(cb);
      setUser({
        displayName: firebaseUser.displayName,
        uid: firebaseUser.uid,
        photoURL: firebaseUser.photoURL,
      });
    } catch (err) {
      console.error(err);
    }

    setCheckedAuth(true);
  }

  async function logout() {
    setUserPromise(auth().signOut());
  }

  async function login() {
    setUserPromise(auth().signInWithPopup(provider));
  }

  return <AuthContext.Provider value={{ user, checkedAuth, login, logout }} {...props} />;
}

export function useAuth(): IAuthProvider {
  return React.useContext(AuthContext);
}
