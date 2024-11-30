import {
  AuthenticationProvider,
  useAuthentication,
} from "@/appContext/AuthenticationContext";
import { supabase } from "@/lib/supabase";
import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

const Layout = () => {
  return <AuthenticationProvider>{<MainLayout />}</AuthenticationProvider>;
};

const MainLayout = () => {
  const { setAuthUser, clearUserDetails } = useAuthentication();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        const user = session.user;
        setAuthUser(user);
        router.replace("/home");
      } else {
        clearUserDetails();
        router.replace("/welcome");
      }
    });
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
};

export default Layout;
