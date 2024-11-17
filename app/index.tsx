import { Text, Pressable } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Pressable
        onPress={() => {
          router.push("/welcome");
        }}
      >
        <Text>Welcome</Text>
      </Pressable>
    </ScreenWrapper>
  );
};

export default Index;
