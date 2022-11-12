import { Colors } from '@/constants';
import { IGood } from '@/store/goods/good.type';
import { useGetAllGoodsQuery } from '@/store/goods/goodQuery';
import { DataUtils } from '@/utils';
import { deviceWidth } from '@/utils/AppUtils';
import { NavigationProp } from '@react-navigation/native';
import {
  Avatar,
  Box,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from 'native-base';
import React, { useCallback } from 'react';
import { RefreshControl } from 'react-native';

interface ProductSectionProps {
  headerComponent: React.ReactElement;
  navigation: NavigationProp<any>;
  query: string;
}

const ProductSection = ({
  headerComponent,
  navigation,
  query,
}: ProductSectionProps) => {
  const { data, refetch, isLoading } = useGetAllGoodsQuery(null);

  const goToDetail = useCallback((id: string) => {
    navigation.navigate('ProductDetail', { id });
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: IGood }) => (
      <Pressable
        onPress={() => goToDetail(item._id)}
        background={Colors.base.lightBG}
        _pressed={{ background: Colors.base.lightGrey }}
        mb={4}
        borderRadius={15}
      >
        <Box width={deviceWidth - deviceWidth * 0.59} p={4}>
          <Image
            bg="gray.100"
            size="xl"
            alignSelf={'center'}
            source={{
              uri: item.image,
            }}
          ></Image>
          <Text fontWeight={'bold'} mt={3}>
            {item.name}
          </Text>
          <Text fontWeight={'bold'} color={Colors.font.secondary}>
            Rp{item.price}
          </Text>
        </Box>
      </Pressable>
    ),
    [],
  );

  return (
    <FlatList
      columnWrapperStyle={{
        justifyContent: 'space-between',
        paddingHorizontal: 24,
      }}
      numColumns={2}
      data={DataUtils.searchFind(data, query)}
      renderItem={renderItem}
      windowSize={11}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
      ListHeaderComponent={
        <>
          {headerComponent && headerComponent}
          <View px={6} mb={3} mt={3}>
            <Text fontWeight={'bold'} fontSize={'lg'}>
              Products
            </Text>
          </View>
        </>
      }
    />
  );
};

export default ProductSection;
