import AddProductPage from '@/screens/AddProductPage';
import DashboardPage from '@/screens/DashboardPage';
import ProductDetailPage from '@/screens/ProductDetailPage';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainStackParams } from './type';

const MainStack = createStackNavigator<MainStackParams>();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParams {}
  }
}

const AppNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Dashboard"
        component={DashboardPage}
        options={{
          header: undefined,
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="ProductDetail"
        component={ProductDetailPage}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitle: 'Product Detail',
        }}
      />
      <MainStack.Screen
        name="AddProduct"
        component={AddProductPage}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitle: 'Add New Product',
        }}
      />
    </MainStack.Navigator>
  );
};

export default AppNavigator;
