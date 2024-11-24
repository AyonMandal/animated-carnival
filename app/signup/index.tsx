import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";
import ArrowBack from "@/components/ArrowBack";
import { heightPercentage, widthPercentage } from "@/helpers/common";
import { Theme } from "@/constants/theme";
import Input from "@/components/Input";
import Icon from "@/assets/icons";
import CustomButton from "@/components/CustomButton";

const SignUpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const submitSignUpRequest = async () => {
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      Alert.alert("Oops!", "Please enter name, email and password");
      return;
    }
  };
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <ArrowBack router={router} size={26} />
        <View>
          <Text style={styles.headerText}>Let's</Text>
          <Text style={styles.headerText}>Get Started!</Text>
        </View>
        <View style={styles.form}>
          <Text
            style={{
              fontSize: heightPercentage(1.5),
              color: Theme.colors.text,
            }}
          >
            Please create a new account to continue with us.
          </Text>
          <Input
            placeholder="Enter your name"
            icon={
              <Icon
                name="user"
                size={20}
                color={Theme.colors.textLight}
                strokeWidth={1.6}
              />
            }
            onChangeText={(value) => {
              setName(value);
            }}
          />
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
          <CustomButton
            buttonText="Sign Up"
            onPress={submitSignUpRequest}
            loading={loading}
          />
        </View>
        <View style={styles.footer}>
          <Text>Already have an account? </Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={styles.footerHighlight}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUpPage;

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
