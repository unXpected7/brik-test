import { NavigationProp } from '@react-navigation/native';
import { Box, Fab, Icon, StatusBar, View } from 'native-base';
import * as React from 'react';
import HeaderSection from './components/HeaderSection';
import ProductSection from './components/ProductSection';
import { AntDesign } from '@expo/vector-icons';

interface DashboardPageProps {
  navigation: NavigationProp<any>;
}

const DashboardPage = ({ navigation }: DashboardPageProps) => {
  const [query, setQuery] = React.useState<string>('');
  const goToAddProduct = () => {
    navigation.navigate('AddProduct');
  };

  return (
    <View flex={1} background={'white'}>
      <StatusBar barStyle="dark-content" />
      <Box safeAreaTop bg="white" />
      <ProductSection
        navigation={navigation}
        query={query}
        headerComponent={
          <HeaderSection query={query} onChangeQuery={setQuery} />
        }
      />
      <Fab
        isFocusVisible={false}
        onPress={goToAddProduct}
        position="absolute"
        size="sm"
        background={'success.400'}
        renderInPortal={false}
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </View>
  );
};

export default DashboardPage;
