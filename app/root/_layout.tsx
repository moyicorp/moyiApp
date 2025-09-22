import "react-native-reanimated";

import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   "PlusJakartaSans-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  // });

  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }

  const TypedClerkProvider =
    ClerkProvider as unknown as React.ComponentType<any>;

  return (
    <TypedClerkProvider tokenCache={tokenCache}>
      <Slot />
    </TypedClerkProvider>
  );
}
