import { ActivityIndicator, StyleSheet, View } from "react-native";

interface ActivityLoaderProps {
  size?: "small" | "large" | number;
  color?: string;
}

const Loader = (props: ActivityLoaderProps) => {
  return (
    <View>
      <ActivityIndicator size={props.size} color={props.color} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
