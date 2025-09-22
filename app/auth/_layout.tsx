import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

import "react-native-reanimated";

// const Layout = () => {
//   // const [loaded] = useFonts({
//   //   "PlusJakartaSans-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
//   // });

//   // if (!loaded) {
//   //   // Async font loading only occurs in development.
//   //   return null;
//   // }

//   return (
//     <SafeAreaProvider>
//       <Stack>
//         <Stack.Screen name="welcome" options={{ headerShown: false }} />
//         <Stack.Screen name="sign-in" options={{ headerShown: false }} />
//         <Stack.Screen name="sign-up" options={{ headerShown: false }} />
//       </Stack>
//     </SafeAreaProvider>
//   );
// };

export default function AuthLayout() {
  // const [loaded] = useFonts({
  //   "PlusJakartaSans-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  // });

  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }
  return <Stack />;

  // return (
  //   <SafeAreaProvider>
  //     <Stack>
  //       <Stack.Screen name="welcome" options={{ headerShown: false }} />
  //       <Stack.Screen name="sign-in" options={{ headerShown: false }} />
  //       <Stack.Screen name="sign-up" options={{ headerShown: false }} />
  //     </Stack>
  //   </SafeAreaProvider>
  // );
}
//export default AuthLayout;
