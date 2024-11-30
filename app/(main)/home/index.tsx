import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { supabase } from "@/lib/supabase";
import { useAuthentication } from "@/appContext/AuthenticationContext";

const Home = () => {
  const { clearUserDetails } = useAuthentication();
  const logOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Sign Out Error!", error.message);
      return;
    } else {
      clearUserDetails();
    }
  };
  return (
    <ScreenWrapper>
      <View>
        <Text>Home</Text>
        <Button title="Logout" onPress={logOutUser}></Button>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
