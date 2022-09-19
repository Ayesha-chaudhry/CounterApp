import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import {
  COLOR_DarkGray,
  COLOR_LIGHT_GRAY,
  COLOR_WHITE,
  FONT_ACUMIN_BOLD,
  FONT_SACRAMENTO,
  SPLASHSCR_ICON,
} from "../../../res/drawables";

const Splash = (props) => {
  setTimeout(() => {
    props.navigation.replace("Main");
  }, 3000);

  const [fontsLoaded] = useFonts({
    "Sacramento-Regular": FONT_SACRAMENTO,
    "Acumin-bold": FONT_ACUMIN_BOLD,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.firstContainer} onLayoutRootView={onLayoutRootView}>
      <View style={styles.thirdContainer}>
        <Image source={SPLASHSCR_ICON} style={styles.imageStyle} />
      </View>
      <Text style={styles.firstText}>Digital Tasbeeh</Text>
      <Text style={styles.secondText}>Counter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR_WHITE,
  },
  thirdContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  imageStyle: { width: 300, height: 250, resizeMode: "contain" },
  firstText: {
    fontSize: 40,
    fontFamily: "Acumin-bold",
    lineHeight: 40,
    alignSelf: "center",
    color: COLOR_DarkGray,
  },
  secondText: {
    fontSize: 30,
    fontFamily: "Sacramento-Regular",
    lineHeight: 40,
    color: COLOR_LIGHT_GRAY,
  },
});

export default Splash;
