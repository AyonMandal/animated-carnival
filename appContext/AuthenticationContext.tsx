import { User } from "@supabase/supabase-js";
import React, { ReactNode, useState, useContext, createContext } from "react";

// Define the context value type
interface AuthenticationContextType {
  user: User | null;
  setAuthUser: (user: User) => void;
  setUserDetails: (details: Partial<User>) => void;
  clearUserDetails: () => void;
}

// Define the props for the provider
interface AuthenticationContextProps {
  children: ReactNode;
}

// Create the context
const AuthenticationContext = createContext<
  AuthenticationContextType | undefined
>(undefined);

// Provider component
export const AuthenticationProvider = ({
  children,
}: AuthenticationContextProps) => {
  const [user, setUser] = useState<User | null>(null);

  // Function to set the authenticated user
  const setAuthUser = (user: User) => {
    setUser(user);
  };

  // Function to update user details
  const setUserDetails = (details: Partial<User>) => {
    setUser((prevUser) => (prevUser ? { ...prevUser, ...details } : null));
  };

  // Function to clear user details
  const clearUserDetails = () => {
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, setAuthUser, setUserDetails, clearUserDetails }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

// Custom hook to access the authentication context
export const useAuthentication = (): AuthenticationContextType => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error(
      "useAuthentication must be used within an AuthenticationProvider"
    );
  }
  return context;
};
