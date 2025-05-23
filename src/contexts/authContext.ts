import { createContext, Dispatch, SetStateAction } from "react";
import { User, UserCredential } from "firebase/auth";
import { UpdateProfileData } from "../types/news";

export type FirebaseUserType = User | null;

export interface AuthContextType {
  user: FirebaseUserType;
  setUser: Dispatch<SetStateAction<FirebaseUserType>>;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  updateUser: (updatedData: UpdateProfileData) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
