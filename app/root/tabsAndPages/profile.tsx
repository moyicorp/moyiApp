import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfilePage = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center justify-between bg-white-500">
      <TouchableOpacity
        onPress={() => router.replace("/root/tabsAndPages/homePage")}
        className=" w-full flex  "
      >
        <Text className="text-yellow-500 font-bold" style={{ fontSize: 32 }}>
          Moyi
        </Text>
      </TouchableOpacity>
      <Text>Profile Page</Text>
    </SafeAreaView>
  );
};

export default ProfilePage;
