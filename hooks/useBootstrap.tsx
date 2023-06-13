import { useEffect } from 'react';
import { useFonts } from 'expo-font';

export function useBootstrap() {
  const [fontsLoaded, fontError] = useFonts({
    'NeueHaasGroteskDisplay-Medium': require('../assets/fonts/NeueHaasGroteskDisplay-Medium.otf'),
    'NeueHaasGroteskText-Medium': require('../assets/fonts/NeueHaasGroteskText-Medium.otf'),
  });

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  return {
    isReady: fontsLoaded,
  };
}
