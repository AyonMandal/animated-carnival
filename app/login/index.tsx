import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import ArrowBack from "@/components/ArrowBack";
import { heightPercentage, widthPercentage } from "@/helpers/common";
import { Theme } from "@/constants/theme";
import Input from "@/components/Input";
import Icon from "@/assets/icons";
import CustomButton from "@/components/CustomButton";
import { supabase } from "@/lib/supabase";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const submitLoginRequest = async () => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      Alert.alert("Oops!", "Please enter email and password");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password.trim(),
    });
    setLoading(false);
    if (error) {
      Alert.alert("Login Error!", error.message);
      return;
    }
  };
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <ArrowBack router={router} size={26} />
        <View>
          <Text style={styles.headerText}>Hey,</Text>
          <Text style={styles.headerText}>Welcome Back!</Text>
        </View>
        <View style={styles.form}>
          <Text
            style={{
              fontSize: heightPercentage(1.5),
              color: Theme.colors.text,
            }}
          >
            Please login to continue
          </Text>
          <Input
            placeholder="Enter your email"
            icon={
              <Icon
                name="mail"
                size={20}
                color={Theme.colors.textLight}
                strokeWidth={1.6}
              />
            }
            onChangeText={(value) => {
              setEmail(value);
            }}
          />
          <Input
            placeholder="Enter your password"
            icon={
              <Icon
                name="lock"
                size={20}
                color={Theme.colors.textLight}
                strokeWidth={1.6}
              />
            }
            onChangeText={(value) => {
              setPassword(value);
            }}
            secureTextEntry
          />
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <CustomButton
            buttonText="Login"
            onPress={submitLoginRequest}
            loading={loading}
          />
        </View>
        <View style={styles.footer}>
          <Text>Don't have an account? </Text>
          <Pressable onPress={() => router.push("/signup")}>
            <Text style={styles.footerHighlight}>Sign Up</Text>
          </Pressable>
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
  form: {
    gap: 25,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    fontSize: heightPercentage(1.75),
    color: Theme.colors.textDark,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerHighlight: {
    fontWeight: "bold",
    color: Theme.colors.primaryDark,
    fontSize: heightPercentage(1.75),
  },
});
