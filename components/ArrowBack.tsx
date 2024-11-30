import { Pressable, StyleSheet } from "react-native";
import React from "react";
import Icon from "./../assets/icons";
import { Router, router } from "expo-router";
import { Theme } from "@/constants/theme";

interface ArrowBackProps {
  router?: Router;
  size?: number;
}
const ArrowBack = (props: ArrowBackProps) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        router.back();
      }}
    >
      <Icon
        name={"arrowLeft"}
        size={props.size || 24}
        color={Theme.colors.text}
        strokeWidth={2.5}
      />
    </Pressable>
  );
};

export default ArrowBack;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.07)",
    borderRadius: Theme.radius.sm,
  },
});
