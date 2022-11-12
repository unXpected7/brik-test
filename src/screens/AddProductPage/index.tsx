import { SelectInput, TextInput } from '@/components';
import { OptionType } from '@/components/input/SelectInput';
import { categoryOptions } from '@/constants/options';
import { usePostNewGoodMutation } from '@/store/goods/goodQuery';
import { Button, ScrollView, View } from 'native-base';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { showMessage } from 'react-native-flash-message';

// interface AddProductPageProps {}

interface IFields {
  name: string;
  category: OptionType | string;
  description: string;
  weight: string;
  width: string;
  height: string;
  price: string;
  sku: string;
}

const initialState = {
  name: '',
  category: '',
  description: '',
  weight: '',
  width: '',
  height: '',
  price: '',
  sku: '',
};

const AddProductPage = () => {
  const [updatePost, { isLoading, isSuccess }] = usePostNewGoodMutation();
  const [field, setfield] = useState<IFields>(initialState);
  const entriedField = useMemo(() => Object.entries(field), [field]);

  useEffect(() => {
    if (isSuccess) {
      setfield(initialState);
      showMessage({
        message: 'Data submitted!',
        type: 'success',
      });
    }
  }, [isSuccess]);

  const onFieldChange = useCallback((name: string, value: string | object) => {
    setfield(e => ({ ...e, [name]: value }));
  }, []);

  const onSubmit = useCallback(() => {
    const hasEmptyField = !!entriedField.some(item => item[1] === '');
    if (hasEmptyField) {
      showMessage({
        message: 'Please fill the empty field',
        type: 'danger',
      });
      return;
    }

    if (typeof field.category === 'string') {
      // indicate the field is empty
      return;
    }

    const prepareParams = {
      category: {
        name: field.category?.label,
        slug: field.category?.value,
      },
      sku: field.sku,
      name: field.name,
      description: field.description,
      weight: parseInt(field.weight),
      width: parseInt(field.width),
      height: parseInt(field.height),
      image: field.category?.image || '',
      price: parseInt(field.price),
    };
    updatePost(prepareParams);
  }, [field, showMessage, entriedField]);

  return (
    <View flex={1} bg={'white'}>
      <ScrollView _contentContainerStyle={{ px: 6, py: 4 }}>
        <TextInput
          name={'name'}
          label="Name"
          value={field.name}
          placeholder="Name"
          onChange={onFieldChange}
        />
        <SelectInput
          name={'category'}
          value={field.category}
          label="Category"
          placeholder="Category"
          onChange={onFieldChange}
          option={categoryOptions}
        />
        <TextInput
          name={'description'}
          value={field.description}
          label="Description"
          placeholder="Description"
          onChange={onFieldChange}
        />
        <TextInput
          name={'sku'}
          value={field.sku}
          label="SKU"
          placeholder="SKU"
          onChange={onFieldChange}
        />
        <TextInput
          name={'weight'}
          value={field.weight}
          label="Weight"
          placeholder="Weight"
          keyboardType="numeric"
          onChange={onFieldChange}
        />
        <TextInput
          name={'width'}
          value={field.width}
          label="Width"
          placeholder="Width"
          keyboardType="numeric"
          onChange={onFieldChange}
        />
        <TextInput
          name={'height'}
          value={field.height}
          label="Height"
          placeholder="Height"
          keyboardType="numeric"
          onChange={onFieldChange}
        />
        <TextInput
          name={'price'}
          value={field.price}
          label="price"
          placeholder="price"
          keyboardType="numeric"
          onChange={onFieldChange}
        />
        <Button
          onPress={onSubmit}
          mt={6}
          rounded={'full'}
          colorScheme={'green'}
          isLoading={isLoading}
        >
          Submit
        </Button>
      </ScrollView>
    </View>
  );
};

export default AddProductPage;
