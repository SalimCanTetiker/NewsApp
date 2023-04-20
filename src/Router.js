import React from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import News from './pages/News/News';
import Detail from './pages/Detail/Detail';
import Category from './pages/Category/Category';

const Router = () => {

  const Stack = createNativeStackNavigator();
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CategoryPage' component={Category} />
        <Stack.Screen name='NewsPage' component={News} />
        <Stack.Screen name='DetailPage' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default Router;