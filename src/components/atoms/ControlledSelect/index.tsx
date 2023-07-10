import * as React from 'react';
import { Control, Controller, FieldValue, FieldValues, Path } from 'react-hook-form';

import { Select, SelectProps as Props } from '@components/atoms/Select';

interface OwnProps<Type extends FieldValues> extends Omit<Props, 'onChange' | 'value'> {
  control: Control<FieldValue<Type>>;
  formField: Path<FieldValue<Type>>;
}

export const ControlledSelect = <T extends FieldValues>({
  formField,
  control,
  ...props
}: OwnProps<T>) => {
  return (
    <Controller
      control={control}
      name={formField}
      render={({ field }) => <Select {...props} value={field.value} onChange={field.onChange} />}
    />
  );
};
