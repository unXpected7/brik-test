import { Text, VStack } from 'native-base';
import React from 'react';

interface CategoriesSectionProps {}

const CategoriesSection = (props: CategoriesSectionProps) => {
  return (
    <VStack>
      <Text fontWeight={'bold'} fontSize={'lg'}>
        Categories
      </Text>
    </VStack>
  );
};

export default CategoriesSection;
