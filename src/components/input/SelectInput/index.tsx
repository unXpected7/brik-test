import { Colors } from '@/constants';
import { Entypo } from '@expo/vector-icons';
import { FormControl, Icon, Select } from 'native-base';
import * as React from 'react';

interface SelectInputProps {
  label: string;
  name: string;
  value?: string | OptionType;
  placeholder?: string;
  onChange?: (name: string, value: OptionType) => void;
  option: OptionType[];
}

export type OptionType = {
  label: string;
  value: string;
  image?: string;
};

const SelectInput = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  option,
}: SelectInputProps) => {
  const [service, setService] = React.useState('');

  const _onChange = React.useCallback(
    (value: string) => {
      const findItem = option.filter(item => item.value === value);
      onChange?.(name, findItem?.[0]);
    },
    [onChange],
  );

  return (
    <>
      <FormControl.Label>{label}</FormControl.Label>

      <Select
        selectedValue={typeof value === 'object' ? value.value : value}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder={placeholder || 'Pick an Item...'}
        placeholderTextColor={Colors.font.secondary}
        borderRadius="10"
        p="3"
        mb={2}
        onValueChange={_onChange}
        dropdownIcon={
          <Icon
            name="chevron-down"
            mr={'6px'}
            size={6}
            as={<Entypo name="chevron-down" color={Colors.font.secondary} />}
          />
        }
        fontSize={'sm'}
      >
        {option.map(({ label, value }, index) => (
          <Select.Item
            key={`item-select-${index}`}
            label={label}
            value={value}
          />
        ))}
      </Select>
    </>
  );
};

export default SelectInput;
