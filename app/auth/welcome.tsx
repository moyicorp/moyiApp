import { router } from "expo-router";
import * as React from "react";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";

import { productDescriptions } from "@/constant";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomePage = () => {
  const swiperRef = useRef<Swiper>(null);
  //const swiperRef = useRef<React.ComponentType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="flex-1 items-center justify-center justify-between bg-yellow-500">
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E] rounded-full" />}
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#000] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {productDescriptions.map((item) => (
          <View key={item.id} className="flex-1 justify-center items-center">
            <View
              style={{
                borderRadius: 16,
                overflow: "hidden",
                width: 250,
                height: 150,
                marginBottom: 16,
              }}
            >
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%", borderColor: "#000" }}
                resizeMode="cover"
              />
            </View>
            <Text className="text-lg font-bold">{item.title}</Text>
            <Text className="text-sm mb-20">{item.description}</Text>

            <TouchableOpacity
              onPress={() => router.replace("/auth/sign-in")}
              className="bg-white p-2 rounded-lg mb-2 items-center justify-center w-64"
            >
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.replace("/auth/sign-up")}
              className="bg-white p-2 rounded-lg mb-2 items-center justify-center w-64"
            >
              <Text>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.replace("/root/tabsAndPages/homePage")}
              className="bg-white p-2 rounded-lg mb-1 items-center justify-center w-64"
              style={{ marginBottom: 2 }}
            >
              <Text>Skip Login</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default WelcomePage;
