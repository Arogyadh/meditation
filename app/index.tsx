import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import beachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <View className="mt-6 flex-1">
            <Text className="text-center text-white bold text-4xl">
              Meditation
            </Text>
            <Text className="text-center text-white text-regular text-2xl mt-3 ">
              Simplifying Meditation For Everybody
            </Text>
          </View>
          <View>
            <CustomButton
              onPress={() => router.push("/nature-meditate")}
              title="Get Started"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
