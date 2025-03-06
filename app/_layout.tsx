import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useSnowplow } from '@/hooks/useSnowplow';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const tracker = useSnowplow();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      if (tracker) {
        console.log('Tracking screen view event');
        tracker.trackScreenViewEvent({
          name: 'my-screen-name',
          id: '5d79770b-015b-4af8-8c91-b2ed6faf4b1e',
          type: 'carousel',
          transitionType: 'basic'
        });
      }
    }
  }, [loaded, tracker]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
