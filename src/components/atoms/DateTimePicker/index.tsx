import React, { useMemo } from 'react';
import type { ReactDatePickerProps } from 'react-datepicker';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export type PickerEnum = 'time' | 'date' | 'month' | 'year';

export interface DateTimePickerProps extends Omit<ReactDatePickerProps, 'picker' | 'value'> {
  picker?: PickerEnum;
  showTime?: boolean;
  format?: string;
  value?: Date | string;
}

const getDatePickerTypeProps = (picker: PickerEnum, format: string | undefined) => {
  if (picker === 'time') {
    return {
      showTimeSelect: true,
      showTimeSelectOnly: true,
      timeFormat: format || 'HH:mm',
    };
  }

  if (picker === 'month') {
    return {
      showMonthYearPicker: true,
      dateFormat: format || 'yyyy/MM',
    };
  }

  if (picker === 'year') {
    return {
      showYearPicker: true,
      dateFormat: format || 'yyyy',
    };
  }

  return {
    dateFormat: format || 'dd/mm/yyyy',
  };
};

// eslint-disable-next-line react/display-name
const DateTimePicker = React.forwardRef<HTMLInputElement, DateTimePickerProps>((props, ref) => {
  const { picker = 'date', value, showTime, format, ...rest } = props;

  const datePickerProps = useMemo(() => getDatePickerTypeProps(picker, format), [picker, format]);

  const selectedDate = useMemo(() => {
    if (value instanceof Date) {
      return value;
    }
    return value ? new Date(value) : undefined;
  }, [value]);

  return (
    <DatePicker
      // @ts-expect-error TODO: Fix typechecking
      customInputRef={ref}
      selected={selectedDate}
      showTimeInput={showTime}
      {...datePickerProps}
      {...rest}
    />
  );
});

export { DateTimePicker };
