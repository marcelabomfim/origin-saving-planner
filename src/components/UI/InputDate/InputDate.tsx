import React, { FunctionComponent, KeyboardEventHandler, useMemo } from 'react';
import { ChangeHandler } from 'react-hook-form';

import * as ST from './InputDate.styled';

type InputDateProps = {
  id: string;
  min: string | number;
  name: string;
  value: string;
  onChange: ChangeHandler;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
};

export const InputDate: FunctionComponent<InputDateProps> = ({ value, ...props }): JSX.Element => {
  const { monthName, year } = useInputDateValue(value);
  return (
    <ST.InputDateWrapper>
      <ST.InputDateMonth className="month" data-testid="month">
        {monthName}
      </ST.InputDateMonth>
      <ST.InputDateYear className="year" data-testid="year">
        {year}
      </ST.InputDateYear>
      <ST.InputDate type="text" value="" {...props} />
    </ST.InputDateWrapper>
  );
};

type UseInputDateValue = {
  date: Date;
  month: string;
  monthsDiff: number;
  monthName: string;
  year: string;
};

export const useInputDateValue = (value: string): UseInputDateValue => {
  const [year, month] = value.split('-');

  const today = useMemo(() => {
    return new Date();
  }, []);

  const date = useMemo(() => {
    return new Date(`${year}-${month}-10`);
  }, [year, month]);

  const monthName = useMemo(() => {
    return date.toLocaleDateString('en', { month: 'long' });
  }, [date]);

  const monthsDiff = useMemo(() => {
    return date.getMonth() - today.getMonth() + 12 * (date.getFullYear() - today.getFullYear());
  }, [date, today]);

  return {
    date,
    month,
    monthsDiff,
    monthName,
    year,
  };
};
