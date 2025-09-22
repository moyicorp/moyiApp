// import { images } from "@/constant";
// import { router } from "expo-router";
// import {
//   Image,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const SignPage = () => {
//   return (
//     <ScrollView
//       contentContainerStyle={{
//         flexGrow: 1,
//         backgroundColor: "#facc15",
//         alignItems: "center",
//         paddingVertical: 20,
//       }}
//     >
//       {/* <TouchableOpacity
//         onPress={() => router.replace("../root/tabsAndPages/homePage")}
//         className="w-full  mb-4"
//       >
//         <Text
//           className="text-white-500 font-bold mb-0"
//           style={{ fontSize: 32 }}
//         >
//           Moyi
//         </Text>
//       </TouchableOpacity> */}
//       <TouchableOpacity
//         style={
//           {
//             //   backgroundColor: "#2563eb",
//             //   paddingVertical: 14,
//             //   borderRadius: 8,
//             //alignItems: "flex-start",
//           }
//         }
//         onPress={() => router.replace("../root/tabsAndPages/homePage")}
//       >
//         <Text
//           style={{
//             color: "#121111",
//             fontWeight: "bold",
//             fontSize: 32,
//             alignItems: "flex-start",
//           }}
//         >
//           Moyi
//         </Text>
//       </TouchableOpacity>
//       <View style={{ width: "100%", alignItems: "center" }}>
//         <Image
//           source={images.loginPic}
//           style={{ width: "100%", height: 250, resizeMode: "cover" }}
//         />
//       </View>
//       {/* </TouchableOpacity> */}

//       <View style={{ width: "80%", marginTop: 20 }}>
//         <TextInput
//           placeholder="Enter your username"
//           placeholderTextColor="#030202"
//           autoCapitalize="none"
//           autoCorrect={false}
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: 8,
//             paddingHorizontal: 16,
//             paddingVertical: 12,
//             marginBottom: 12,
//           }}
//         />
//         <TextInput
//           placeholder="Enter your password"
//           placeholderTextColor="#030202"
//           secureTextEntry
//           autoCapitalize="none"
//           autoCorrect={false}
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: 8,
//             paddingHorizontal: 16,
//             paddingVertical: 12,
//             marginBottom: 16,
//           }}
//         />
//         <TouchableOpacity
//           style={{
//             backgroundColor: "#2563eb",
//             paddingVertical: 14,
//             borderRadius: 8,
//             alignItems: "center",
//             marginBottom: 16,
//           }}
//           onPress={() => {
//             // Handle sign in logic here
//           }}
//         >
//           <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
//             Sign In
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             backgroundColor: "#2563eb",
//             paddingVertical: 14,
//             borderRadius: 8,
//             alignItems: "center",
//           }}
//           onPress={() => router.replace("../root/tabsAndPages/homePage")}
//         >
//           <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
//             Return
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default SignPage;

import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";

export default function SignPage() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return null;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View>
        <Text>Sign in</Text>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
        <TextInput
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity onPress={onSignInPress}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Sign In
          </Text>
        </TouchableOpacity>

        <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#2563eb",
              paddingVertical: 14,
              borderRadius: 8,
              alignItems: "center",
              marginBottom: 16,
            }}
            onPress={() => {
              // Handle sign in logic here
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
