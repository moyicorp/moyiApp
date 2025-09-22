import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center justify-between bg-white-500">
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-in")}
        className=" w-full flex  "
      >
        <Text className="text-yellow-500 font-bold" style={{ fontSize: 32 }}>
          Moyi
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("../tabsAndPages/auth/welcome")}
        className="bg-white p-4 rounded-lg mb-4"
      >
        <Text>Return</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomePage;
