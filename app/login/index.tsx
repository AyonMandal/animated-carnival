import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import ArrowBack from "@/components/ArrowBack";
import { heightPercentage, widthPercentage } from "@/helpers/common";
import { Theme } from "@/constants/theme";
import Input from "@/components/Input";

const LoginPage = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <ArrowBack router={router} size={26} />
        <View>
          <Text style={styles.headerText}>Hey,</Text>
          <Text style={styles.headerText}>Welcome Back!</Text>
        </View>
        <View>
          <Input placeholder="Enter your email" />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    paddingHorizontal: widthPercentage(5),
  },
  headerText: {
    fontSize: heightPercentage(5),
    fontWeight: "bold",
    color: Theme.colors.text,
  },
});
