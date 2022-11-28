import React, { FunctionComponent, KeyboardEventHandler, useCallback, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button, Field, InputCurrency, InputDate, useInputDateValue } from 'components';

import DollarSign from 'assets/icons/dollar-sign.svg';
import ChevronLeft from 'assets/icons/chevron-left.svg';
import ChevronRight from 'assets/icons/chevron-right.svg';

import { PlanSavingGoalInfo } from './PlanSavingGoal.Info';

import * as ST from './PlanSavingGoal.styled';

type Inputs = {
  amount: string;
  reachDate: string;
};

export const PlanSavingGoalForm: FunctionComponent = (): JSX.Element => {
  const formatYearAndMonth = useCallback((d: Date) => {
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}`;
  }, []);

  const today = useMemo(() => {
    return new Date();
  }, []);

  const minDate = new Date(today);
  minDate.setMonth(minDate.getMonth() + 1);

  const { handleSubmit, register, setValue, watch } = useForm<Inputs>({
    defaultValues: {
      amount: '0',
      reachDate: formatYearAndMonth(minDate),
    },
  });

  const amount = watch('amount');
  const reachDate = watch('reachDate');

  const { date, monthsDiff } = useInputDateValue(reachDate);

  const handleAddMonth = useCallback(() => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setValue('reachDate', formatYearAndMonth(newDate));
  }, [date, setValue, formatYearAndMonth]);

  const handleDecreaseMonth = useCallback(() => {
    if (monthsDiff <= 1) return;
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setValue('reachDate', formatYearAndMonth(newDate));
  }, [monthsDiff, date, setValue, formatYearAndMonth]);

  const handleMonthKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.keyCode === 39) return handleAddMonth(); // arrow right
    if (e.keyCode === 37) return handleDecreaseMonth(); // arrow left
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <ST.PlanSavingGoalForm onSubmit={handleSubmit(onSubmit)}>
        <Field label="Total amount" htmlFor="amount">
          <Field.Icon>
            <img src={DollarSign} alt="Total Amount" />
          </Field.Icon>
          <InputCurrency
            id="amount"
            data-testid="amount"
            onValueChange={(value) => setValue('amount', value || '')}
            {...register('amount')}
          />
        </Field>
        <Field label="Reach goal by" htmlFor="reachDate">
          <Field.Icon onClick={handleDecreaseMonth} disabled={monthsDiff <= 1} data-testid="previousMonth">
            <img src={ChevronLeft} alt="Decrease Month" />
          </Field.Icon>
          <InputDate
            value={reachDate}
            id="reachDate"
            data-testid="reachDate"
            min={formatYearAndMonth(minDate)}
            onKeyDown={handleMonthKeyDown}
            {...register('reachDate')}
          />
          <Field.Icon onClick={handleAddMonth} data-testid="nextMonth">
            <img src={ChevronRight} alt="Add Month" />
          </Field.Icon>
        </Field>
      </ST.PlanSavingGoalForm>
      <PlanSavingGoalInfo amount={amount} reachDate={reachDate} show={parseFloat(amount) > 0} />
      <Button>Confirm</Button>
    </>
  );
};
