export default {
  name: 'jnj',
  slug: 'jnj',
  version: '1.0.0',
  orientation: 'default',
  icon: './assets/images/icon.png',
  // jsEngine: 'jsc',
  jsEngine: 'hermes',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.alvsovereign.jnj',
  },
  web: {
    bundler: 'metro',
    favicon: './assets/images/favicon.png',
  },
  extra: {
    eas: {
      projectId: '3f1bd09d-8e35-4e63-81de-0d7785572d6e',
    },
    variables: {
      CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    },
  },
};
