import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Slot } from "expo-router";
import { Appearance } from 'react-native';

import "../global.css";
import { initDatabase } from "@/packages/db/root";

export {
  ErrorBoundary,
} from "expo-router";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    initDatabase()
  }, [])

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = Appearance.getColorScheme();
  const themeProviderValue = colorScheme === 'dark' ? DarkTheme : DefaultTheme


  return (
    <GluestackUIProvider mode={colorScheme || 'dark'}>
      <ThemeProvider value={themeProviderValue}>
        <Slot />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
