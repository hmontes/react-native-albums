// Import a libraty to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }} >
    <Header key="head" headerText={'Albums'} />
    <AlbumList key="album-list" />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
