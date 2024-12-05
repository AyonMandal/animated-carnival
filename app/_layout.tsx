import {
  AuthenticationProvider,
  useAuthentication,
} from "@/appContext/AuthenticationContext";
import { supabase } from "@/lib/supabase";
import { getUserData } from "@/services/supabase/userServices";
import { Stack, router } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

const Layout = () => {
  return <AuthenticationProvider>{<MainLayout />}</AuthenticationProvider>;
};

const MainLayout = () => {
  const { setAuthUser, clearUserDetails, setUserDetails } = useAuthentication();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        const user = session.user;
        setAuthUser(user);
        updateUserData(user.id);
        router.replace("/home");
      } else {
        clearUserDetails();
        router.replace("/welcome");
      }
    });
  }, []);

  const updateUserData = async (userId: string) => {
    const userData = await getUserData(userId);
    if (userData) {
      const data = userData[0];
      setUserDetails(data);
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
};

export default Layout;
