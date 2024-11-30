import {
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  TextInputProps,
} from "react-native";
import React, { ReactNode } from "react";
import { Theme } from "@/constants/theme";
import { heightPercentage } from "@/helpers/common";

interface InputProps extends TextInputProps {
  icon?: ReactNode;
  customStyle?: ViewStyle;
}

const Input = (props: InputProps) => {
  return (
    <View style={[styles.container, props.customStyle]}>
      {props.icon && props.icon}
      <TextInput
        style={styles.input}
        placeholderTextColor={Theme.colors.textLight}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: heightPercentage(7.2),
    borderRadius: Theme.radius.xl,
    borderColor: Theme.colors.text,
    borderWidth: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
  input: {
    flex: 1,
  },
});
