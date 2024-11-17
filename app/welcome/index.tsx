import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Theme } from "@/constants/theme";
import { heightPercentage, widthPercentage } from "@/helpers/common";
import { Image, Pressable, StatusBar, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/welcome.png")}
          resizeMode="contain"
          style={styles.welcomeImage}
        />
        <View style={{ gap: 20 }}>
          <Text style={styles.headerText}>LinkUp!</Text>
          <Text style={styles.punchLineText}>
            Where every thought finds a home and every image tells a story.
          </Text>
        </View>
        <View style={styles.footer}>
          <CustomButton buttonText="Get Started" />
          <View style={styles.loginContainer}>
            <Text>Already have an account? </Text>
            <Pressable>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: widthPercentage(4),
  },
  welcomeImage: {
    width: widthPercentage(100),
    height: heightPercentage(40),
    alignSelf: "center",
  },
  headerText: {
    color: Theme.colors.text,
    fontSize: heightPercentage(4),
    fontWeight: "900",
    textAlign: "center",
  },
  punchLineText: {
    textAlign: "center",
    paddingHorizontal: widthPercentage(10),
    fontSize: heightPercentage(2),
    color: Theme.colors.textLight,
  },
  footer: {
    width: "100%",
    gap: 30,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    color: Theme.colors.primaryDark,
    fontWeight: "bold",
    fontSize: heightPercentage(2),
  },
});
