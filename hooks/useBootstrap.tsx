import { useFonts } from 'expo-font';

export function useBootstrap() {
  const [fontsLoaded] = useFonts({
    'NeueHaasGroteskDisplay-Medium': require('../assets/fonts/NeueHaasGroteskDisplay-Medium.otf'),
    'NeueHaasGroteskText-Medium': require('../assets/fonts/NeueHaasGroteskText-Medium.otf'),
  });

  return {
    isReady: fontsLoaded,
  };
}
