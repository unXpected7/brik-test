import { Colors } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import { FormControl, Icon, Input } from 'native-base';
import * as React from 'react';
import { KeyboardTypeOptions } from 'react-native';

interface TextInputProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (name: string, value: string) => void;
  errorMessage?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const TextInput = ({
  label,
  name,
  errorMessage,
  placeholder,
  keyboardType,
  value,
  onChange,
}: TextInputProps) => {
  const _onChange = React.useCallback(
    (value: string) => {
      onChange?.(name, value);
    },
    [onChange],
  );

  return (
    <>
      <FormControl isInvalid={!!errorMessage}>
        <FormControl.Label>{label}</FormControl.Label>
        <Input
          value={value}
          placeholder={placeholder}
          width="100%"
          borderRadius="10"
          p="3"
          fontSize="14"
          keyboardType={keyboardType}
          placeholderTextColor={Colors.font.secondary}
          onChangeText={_onChange}
        />
        <FormControl.ErrorMessage
          leftIcon={
            <Icon
              name={'warning-outline'}
              as={<Ionicons name={'warning-outline'} />}
            />
          }
        >
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </>
  );
};

export default TextInput;
