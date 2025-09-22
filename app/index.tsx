// import { Redirect } from "expo-router";

// const HomePage = () => {
//   return <Redirect href="/auth/welcome" />;
// };

// export default HomePage;

import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SignOutButton } from "@/components/SignoutButton";

export default function Page() {
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <TouchableOpacity
          onPress={() => router.replace("/root/tabsAndPages/homePage")}
          className="bg-white p-2 rounded-lg mb-1 items-center justify-center w-64"
          style={{ marginBottom: 2 }}
        >
          <Text>Skip Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("/root/tabsAndPages/homePage")}
          className="bg-white p-2 rounded-lg mb-1 items-center justify-center w-64"
          style={{ marginBottom: 2 }}
        >
          <Text>Skip Login</Text>
        </TouchableOpacity>
      </SignedOut>
    </View>
  );
}
