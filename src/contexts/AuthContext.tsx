import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import Router from "next/router";

import { recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";

type User = {
  name: string,
  email: string,
};

type SignInData = {
  email: string,
  password: string,
};

type AuthContextType = {
  isAutenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const isAutenticated = !!user;

  useEffect(() => {
    const { 'nextAuth.token': token } = parseCookies();
    if (token) {
      recoverUserInformation().then(response => setUser(response.user))
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    });
    setCookie(undefined, 'nextAuth.token', token, {
      maxAge: 60 * 60 * 1 // 1 hora
    });
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(user);
    Router.push('/store')
  };

  return (
    <AuthContext.Provider value={{ user, isAutenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
