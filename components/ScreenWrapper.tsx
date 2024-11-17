import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: React.ReactNode;
  bg?: string;
}

const ScreenWrapper = (props: ScreenWrapperProps) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top >= 0 ? top + 5 : 30;

  return (
    <View style={{ flex: 1, backgroundColor: props.bg, paddingTop }}>
      {props.children}
    </View>
  );
};

export default ScreenWrapper;
