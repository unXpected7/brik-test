import { MainStackParams } from '@/config/navigation/type';
import { Colors } from '@/constants';
import { useGetGoodByIdQuery } from '@/store/goods/goodQuery';
import { RouteProp, useRoute } from '@react-navigation/native';
import {
  Avatar,
  Box,
  Divider,
  HStack,
  Image,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React from 'react';

// interface ProductDetailPageProps {}

const ProductDetailPage = () => {
  const route = useRoute<RouteProp<MainStackParams, 'ProductDetail'>>();
  const id = route.params.id;
  const { data } = useGetGoodByIdQuery(id);

  return (
    <View flex={1} bg={'white'}>
      <ScrollView _contentContainerStyle={{ pb: 4 }}>
        <Box
          bg={'white'}
          py={10}
          borderBottomLeftRadius={34}
          borderBottomRightRadius={34}
          shadow={'3'}
          mb={2}
        >
          <Image
            size="2xl"
            alignSelf={'center'}
            source={{
              uri: data?.image,
              //   uri: 'data:image/png;base64,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',
            }}
          ></Image>
        </Box>
        <View bg={'white'} flex={1} mt={4} px={6}>
          <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>
            {data?.name}
          </Text>
          <Text fontSize={'md'} color={'success.600'} mb={2}>
            Rp{data?.price}
          </Text>
          <Text color={Colors.font.secondary} mb={5}>
            {data?.description}
          </Text>
          <HStack justifyContent={'space-between'} py={2}>
            <Text>Category</Text>
            <Text textAlign={'right'}>{data?.category?.name}</Text>
          </HStack>
          <Divider />
          <HStack justifyContent={'space-between'} py={2}>
            <Text>SKU</Text>
            <Text textAlign={'right'}>{data?.sku}</Text>
          </HStack>
          <Divider />
          <HStack justifyContent={'space-between'} py={2}>
            <Text>Weight</Text>
            <Text textAlign={'right'}>{data?.weight}</Text>
          </HStack>
          <HStack justifyContent={'space-between'} py={2}>
            <Text>Width</Text>
            <Text textAlign={'right'}>{data?.width}</Text>
          </HStack>
          <Divider />
          <HStack justifyContent={'space-between'} py={2}>
            <Text>Height</Text>
            <Text textAlign={'right'}>{data?.height}</Text>
          </HStack>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailPage;
