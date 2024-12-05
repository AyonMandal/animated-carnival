import { View, ActivityIndicator } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { Theme } from "@/constants/theme";

const Index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Theme.colors.primary} />
      </View>
    </ScreenWrapper>
  );
};

export default Index;
