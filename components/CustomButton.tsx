import { Theme } from "@/constants/theme";
import { heightPercentage } from "@/helpers/common";
import { Pressable, StyleSheet, Text } from "react-native";
import Loader from "./ActivityLoader";

interface CustomButtonProps {
  onPress?: () => void;
  buttonText?: string;
  loading?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  if (props.loading) {
    return <Loader size={"small"} color={Theme.colors.primary} />;
  }
  return (
    <Pressable
      style={[styles.customButton, styles.buttonShadow]}
      android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.buttonText || "Placeholder"}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: Theme.colors.primary,
    height: heightPercentage(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Theme.radius.xl,
  },
  buttonText: {
    fontSize: heightPercentage(2.4),
    color: "white",
    fontWeight: "bold",
  },
  buttonShadow: {
    shadowColor: Theme.colors.dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
});
