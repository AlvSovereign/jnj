import { Text, StyleSheet, View } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import SignInScreen from './SignInScreen';

const CLERK_PUBLISHABLE_KEY = 'pk_test_••••••••••••••••••••••••••••••••••';
export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <View style={styles.container}>
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <SignInScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
