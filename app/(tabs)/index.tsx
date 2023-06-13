import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { SignOut } from '../../components/ui/button/SignOutButton';
import UseUserExample from '../../components/UseUserExample';
import UseAuthExample from '../../components/UseAuthExample';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <RNText className='text-red-600 text-7xl font-display'>
        Some display text here
      </RNText>
      <RNText className='text-white text-xl font-body'>
        Some body text here
      </RNText>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <UseAuthExample />
      <UseUserExample />
      <EditScreenInfo path='app/(tabs)/index.tsx' />
      <SignOut />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
