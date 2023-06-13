import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { onAppStateChange, useAppState } from './useAppState';
import { useOnlineManager } from './useOnlineManager';

export function useBootstrap() {
  const [fontsLoaded, fontError] = useFonts({
    'NeueHaasGroteskDisplay-Medium': require('../assets/fonts/NeueHaasGroteskDisplay-Medium.otf'),
    'NeueHaasGroteskText-Medium': require('../assets/fonts/NeueHaasGroteskText-Medium.otf'),
  });
  useOnlineManager();
  useAppState(onAppStateChange);

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  return {
    isReady: fontsLoaded,
  };
}
