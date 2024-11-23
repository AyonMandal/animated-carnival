import {
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  TextInputProps,
} from "react-native";
import React, { ReactNode, Ref } from "react";
import { Theme } from "@/constants/theme";
import { heightPercentage } from "@/helpers/common";

interface InputProps extends TextInputProps {
  icon?: ReactNode;
  customStyle?: ViewStyle;
  ref?: Ref<TextInput>;
}

const Input = (props: InputProps) => {
  return (
    <View style={[styles.container, props.customStyle]}>
      {props.icon && props.icon}
      <TextInput
        ref={props.ref}
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
  },
  input: {
    flex: 1,
  },
});
