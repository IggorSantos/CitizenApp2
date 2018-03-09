import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default props => (
  <View style={{ backgroundColor: '#3F51B5', elevation: 4, marginBottom: 6 }}>

    <StatusBar backgroundColor='black' />

    <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Citizen</Text>
    </View>

    <TabBar {...props} style={{ backgroundColor: '#3F51B5', elevation: 0 }} />
  </View>
);
