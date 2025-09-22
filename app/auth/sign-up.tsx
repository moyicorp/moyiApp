// import InputField from "@/components/InputField";
// import { icons, images } from "@/constant";
// import { Picker } from "@react-native-picker/picker";
// import { router } from "expo-router";
// import React, { useState } from "react";
// import { Dimensions } from "react-native";

// //import icons from "@/constant";
// import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// const screenWidth = Dimensions.get("window").width;

// const categoriesList = [
//   "Electronics",
//   "Fashion",
//   "Groceries",
//   "Automotive",
//   "Books",
//   "Other",
// ];

// const SignUpPage = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     password: "",
//     phoneNumber: "",
//     confirmPassword: "",
//     email: "",
//     homeAddress: "",
//     business: "",
//     category: "", // Add category field
//   });

//   const [selectedRole, setSelectedRole] = useState("seller"); // default role

//   return (
//     <ScrollView
//       contentContainerStyle={{
//         flexGrow: 1,
//         backgroundColor: "#facc15",
//         alignItems: "center",
//         paddingVertical: 20,
//       }}
//     >
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
//           source={images.signUpPic}
//           style={{ width: "100%", height: 250, resizeMode: "cover" }}
//         />
//         <Text style={{ color: "#121111", fontWeight: "bold", fontSize: 24 }}>
//           Create Your Account
//         </Text>
//       </View>
//       {/* </TouchableOpacity> */}
//       <View style={{ width: screenWidth, marginLeft: 2, alignItems: "center" }}>
//         <View style={{ width: "80%", marginTop: 10, marginBottom: 10 }}>
//           <Text
//             style={{ fontWeight: "bold", color: "#121111", marginBottom: 8 }}
//           >
//             Select Role
//           </Text>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <TouchableOpacity
//               onPress={() => setSelectedRole("buyer")}
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginRight: 20,
//               }}
//             >
//               <View
//                 style={{
//                   height: 20,
//                   width: 20,
//                   borderRadius: 10,
//                   borderWidth: 2,
//                   borderColor: "#2563eb",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginRight: 6,
//                 }}
//               >
//                 {selectedRole === "buyer" && (
//                   <View
//                     style={{
//                       height: 10,
//                       width: 10,
//                       borderRadius: 5,
//                       backgroundColor: "#2563eb",
//                     }}
//                   />
//                 )}
//               </View>
//               <Text style={{ color: "#121111" }}>Buyer</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => setSelectedRole("seller")}
//               style={{ flexDirection: "row", alignItems: "center" }}
//             >
//               <View
//                 style={{
//                   height: 20,
//                   width: 20,
//                   borderRadius: 10,
//                   borderWidth: 2,
//                   borderColor: "#2563eb",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginRight: 6,
//                 }}
//               >
//                 {selectedRole === "seller" && (
//                   <View
//                     style={{
//                       height: 10,
//                       width: 10,
//                       borderRadius: 5,
//                       backgroundColor: "#2563eb",
//                     }}
//                   />
//                 )}
//               </View>
//               <Text style={{ color: "#121111" }}>Seller</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={{ width: "80%", marginTop: 20 }}>
//           {/* Row 1 */}
//           <View
//             style={{ flexDirection: "row", justifyContent: "space-between" }}
//           >
//             <View style={{ width: "48%" }}>
//               <InputField
//                 label="First Name"
//                 icon={icons.person}
//                 placeholder="First Name"
//                 placeholderTextColor="#030202"
//                 autoCapitalize="none"
//                 value={form.firstName}
//                 onChangeText={(value) => setForm({ ...form, firstName: value })}
//                 autoCorrect={false}
//               />
//             </View>
//             <View style={{ width: "48%" }}>
//               <InputField
//                 label="Last Name"
//                 icon={icons.person}
//                 placeholder="Last Name"
//                 placeholderTextColor="#030202"
//                 autoCapitalize="none"
//                 value={form.lastName}
//                 onChangeText={(value) => setForm({ ...form, lastName: value })}
//                 autoCorrect={false}
//               />
//             </View>
//           </View>

//           {/* Row 2 */}
//           <View
//             style={{ flexDirection: "row", justifyContent: "space-between" }}
//           >
//             <View style={{ width: "48%" }}>
//               <InputField
//                 label=""
//                 icon={icons.phone}
//                 placeholder="Phone Number"
//                 placeholderTextColor="#030202"
//                 keyboardType="phone-pad"
//                 autoCapitalize="none"
//                 value={form.phoneNumber}
//                 onChangeText={(value) =>
//                   setForm({ ...form, phoneNumber: value })
//                 }
//                 autoCorrect={false}
//               />
//             </View>
//             <View style={{ width: "48%" }}>
//               <InputField
//                 label="Home Address"
//                 icon={icons.home}
//                 placeholder="Home Address"
//                 placeholderTextColor="#030202"
//                 autoCapitalize="none"
//                 value={form.homeAddress}
//                 onChangeText={(value) =>
//                   setForm({ ...form, homeAddress: value })
//                 }
//                 autoCorrect={false}
//               />
//             </View>
//           </View>
//           {selectedRole === "seller" && (
//             <View style={{ marginTop: 16 }}>
//               <InputField
//                 label="Business"
//                 icon={icons.home}
//                 placeholder="Business Name"
//                 placeholderTextColor="#030202"
//                 autoCapitalize="none"
//                 value={form.business}
//                 onChangeText={(value) => setForm({ ...form, business: value })}
//                 autoCorrect={false}
//               />
//               <InputField
//                 label="Business"
//                 icon={icons.home}
//                 placeholder="Business Name"
//                 placeholderTextColor="#030202"
//                 autoCapitalize="none"
//                 value={form.business}
//                 onChangeText={(value) => setForm({ ...form, business: value })}
//                 autoCorrect={false}
//               />
//               <InputField
//                 label="Business"
//                 icon={icons.home}
//                 placeholder="Business Name"
//                 placeholderTextColor="#030202"
//                 autoCapitalize="none"
//                 value={form.business}
//                 onChangeText={(value) => setForm({ ...form, business: value })}
//                 autoCorrect={false}
//               />
//               <View style={{ marginTop: 12 }}>
//                 <Text
//                   style={{
//                     fontWeight: "bold",
//                     color: "#121111",
//                     marginBottom: 4,
//                   }}
//                 >
//                   Category
//                 </Text>
//                 <View
//                   style={{
//                     borderWidth: 1,
//                     borderColor: "#ccc",
//                     borderRadius: 8,
//                     backgroundColor: "#fff",
//                   }}
//                 >
//                   <Picker
//                     selectedValue={form.category}
//                     onValueChange={(itemValue) =>
//                       setForm({ ...form, category: itemValue })
//                     }
//                   >
//                     <Picker.Item label="Select a category..." value="" />
//                     {categoriesList.map((cat) => (
//                       <Picker.Item key={cat} label={cat} value={cat} />
//                     ))}
//                   </Picker>
//                 </View>
//               </View>
//             </View>
//           )}

//           {/* Row 3 */}
//           <View
//             style={{ flexDirection: "row", justifyContent: "space-between" }}
//           >
//             <View style={{ width: "48%" }}>
//               <InputField
//                 label="Email Address"
//                 icon={icons.email}
//                 placeholder="Email Address"
//                 placeholderTextColor="#030202"
//                 autoCapitalize="none"
//                 value={form.email}
//                 onChangeText={(value) => setForm({ ...form, email: value })}
//                 autoCorrect={false}
//               />
//             </View>
//             <View style={{ width: "48%" }}>
//               <InputField
//                 label="Username"
//                 icon={icons.person}
//                 placeholder="Username"
//                 placeholderTextColor="#030202"
//                 autoCapitalize="none"
//                 value={form.username}
//                 onChangeText={(value) => setForm({ ...form, username: value })}
//                 autoCorrect={false}
//               />
//             </View>
//           </View>

//           {/* Row 4 */}
//           <View
//             style={{ flexDirection: "row", justifyContent: "space-between" }}
//           >
//             <View style={{ width: "48%" }}>
//               <InputField
//                 label="Password"
//                 icon={icons.lock}
//                 placeholder="Password"
//                 placeholderTextColor="#030202"
//                 secureTextEntry
//                 autoCapitalize="none"
//                 value={form.password}
//                 onChangeText={(value) => setForm({ ...form, password: value })}
//                 autoCorrect={false}
//               />
//             </View>
//             <View style={{ width: "48%" }}>
//               <InputField
//                 label="Confirm Password"
//                 icon={icons.lock}
//                 placeholder="Confirm Password"
//                 placeholderTextColor="#030202"
//                 secureTextEntry
//                 autoCapitalize="none"
//                 value={form.confirmPassword}
//                 onChangeText={(value) =>
//                   setForm({ ...form, confirmPassword: value })
//                 }
//                 autoCorrect={false}
//               />
//             </View>
//           </View>
//         </View>
//         <View style={{ flexDirection: "row" }}>
//           <View style={{ width: "48%", justifyContent: "space-between" }}>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: "#2563eb",
//                 paddingVertical: 14,
//                 borderRadius: 8,
//                 alignItems: "center",
//                 marginBottom: 16,
//               }}
//               onPress={() => {
//                 // Handle sign in logic here
//               }}
//             >
//               <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 10 }}>
//                 Sign Up
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{ width: "48%" }}>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: "#2563eb",
//                 paddingVertical: 14,
//                 borderRadius: 8,
//                 alignItems: "center",
//               }}
//               onPress={() => router.replace("../root/tabsAndPages/homePage")}
//             >
//               <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 10 }}>
//                 Cancel
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default SignUpPage;

import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <>
        <Text>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <TouchableOpacity onPress={onVerifyPress}>
          <Text>Verify</Text>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <View>
      <>
        <Text>Sign up</Text>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={(email) => setEmailAddress(email)}
        />
        <TextInput
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity onPress={onSignUpPress}>
          <Text>Continue</Text>
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <Text>Already have an account?</Text>
          {/* <Link href="/sign-in">
            <Text>Sign in</Text>
          </Link> */}
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
      </>
    </View>
  );
}
