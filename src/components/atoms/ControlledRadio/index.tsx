import * as React from 'react';
import { Control, Controller, FieldValue, FieldValues, Path } from 'react-hook-form';

import { Radio, RadioProps as Props } from '@components/atoms/Radio';

interface OwnProps<Type extends FieldValues> extends Omit<Props, 'onChange' | 'value'> {
  control: Control<FieldValue<Type>>;
  formField: Path<FieldValue<Type>>;
}

export const ControlledRadio = <T extends FieldValues>({
  formField,
  control,
  ...props
}: OwnProps<T>) => {
  return (
    <Controller
      control={control}
      name={formField}
      render={({ field }) => <Radio {...props} value={field.value} onChange={field.onChange} />}
    />
  );
};
