import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { AppStateStatus, Platform, useColorScheme } from 'react-native';
import { SplashScreen, Stack } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useBootstrap } from '../hooks/useBootstrap';
import { SignInWithOAuth } from '../components/ui/button/SignInWithOAuth';
import SignInScreen from '../features/SignInScreen';
import { logAsyncStorage } from '../utils/log-async-storage';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const CLERK_PUBLISHABLE_KEY =
  Constants.expoConfig?.extra?.variables?.CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

logAsyncStorage();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const { isReady } = useBootstrap();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!isReady && <SplashScreen />}
      {isReady && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}>
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey={CLERK_PUBLISHABLE_KEY}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <SafeAreaProvider>
            <SignedIn>
              <Stack>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                <Stack.Screen
                  name='modal'
                  options={{ presentation: 'modal' }}
                />
              </Stack>
            </SignedIn>
            <SignedOut>
              <SignInScreen />
              <SignInWithOAuth />
            </SignedOut>
          </SafeAreaProvider>
        </ThemeProvider>
      </ClerkProvider>
    </PersistQueryClientProvider>
  );
}
