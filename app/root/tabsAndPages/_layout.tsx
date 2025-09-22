import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
  // const [loaded] = useFonts({
  //   "PlusJakartaSans-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  // });

  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="chat" options={{ headerShown: false }} />
        <Stack.Screen name="history" options={{ headerShown: false }} />
        <Stack.Screen name="homePage" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
};
export default Layout;
