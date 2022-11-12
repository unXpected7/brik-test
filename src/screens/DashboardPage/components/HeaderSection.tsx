import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  Input,
  StatusBar,
  Text,
  VStack,
} from 'native-base';
import * as React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants';

interface HeaderSectionProps {
  onChangeQuery: (text: string) => void;
  query: string;
}

const HeaderSection = ({ onChangeQuery, query }: HeaderSectionProps) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box safeAreaTop bg="white" />
      <HStack alignItems={'center'} my={3} mx={6}>
        <Avatar
          bg="cyan.500"
          source={{
            uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
        >
          TE
        </Avatar>
        <VStack ml={3}>
          <Text fontWeight={'bold'}>Good Morning</Text>
          <Text fontWeight={'medium'}>Kawan</Text>
        </VStack>
      </HStack>

      <VStack space={5} alignSelf="center" mx={6} mb={2}>
        <Input
          placeholder="Search"
          width="100%"
          borderRadius="full"
          py="3"
          px="1"
          fontSize="14"
          onChangeText={(text: string) => onChangeQuery(text)}
          placeholderTextColor={Colors.font.secondary}
          value={query}
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
          InputRightElement={
            query ? (
              <Icon
                m="2"
                ml="3"
                size="5"
                color="gray.400"
                as={<MaterialCommunityIcons name="close-circle" />}
                onPress={() => onChangeQuery('')}
              />
            ) : undefined
          }
        />
      </VStack>
    </>
  );
};

export default HeaderSection;
