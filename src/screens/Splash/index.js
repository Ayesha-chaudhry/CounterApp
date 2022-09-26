import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import {
  FONT_Roboto_Black,
  FONT_Roboto_Bold,
  FONT_Roboto_Light,
  FONT_Roboto_Regular,
  FONT_SACRAMENTO,
  SPLASHSCR_ICON,
} from "../../../res/drawables";
import { COLOR_WHITE } from "../../../res/strings";

const Splash = (props) => {
  setTimeout(() => {
    props.navigation.replace("Main");
  }, 3000);

  const [fontsLoaded] = useFonts({
    "Sacramento-Regular": FONT_SACRAMENTO,
    "Roboto-Black": FONT_Roboto_Black,
    "Roboto-Bold": FONT_Roboto_Bold,
    "Roboto-Regular": FONT_Roboto_Regular,
    "Roboto-Light": FONT_Roboto_Light,
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
    <ImageBackground
      source={require('../../../assets/bg3.png')}
      style={styles.firstContainer} onLayoutRootView={onLayoutRootView}>
      <View style={styles.thirdContainer}>
        <Image source={SPLASHSCR_ICON} style={styles.imageStyle} />
      </View>
      <Text style={styles.firstText}>Digital Tasbeeh</Text>
      <Text style={styles.secondText}>Counter</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  thirdContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  imageStyle: {
    width: 300,
    height: 250,
    resizeMode: "contain"
  },
  firstText: {
    fontSize: 45,
    fontFamily: "Roboto-Black",
    lineHeight: 40,
    alignSelf: "center",
    color: COLOR_WHITE,
    paddingTop: 20
  },
  secondText: {
    fontSize: 50,
    fontFamily: "Sacramento-Regular",
    lineHeight: 65,
    color: COLOR_WHITE
  },
});

export default Splash;
