import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  // as soon as the screen appears do something
  useLayoutEffect(() => {
    navigation.setOptions({
      // allows to customize the header
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl flex-row items-center">
            Current Location
            <ChevronDownIcon size={18} color={colors.primary} />
          </Text>
        </View>
        <UserIcon size={35} color={colors.primary} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
