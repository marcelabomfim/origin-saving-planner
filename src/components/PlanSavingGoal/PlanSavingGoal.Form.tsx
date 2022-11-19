import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CurrencyInput, { formatValue } from 'react-currency-input-field';

import { Button } from 'components';

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
  const [year, month] = watch('reachDate').split('-');

  const date = useMemo(() => {
    return new Date(`${year}-${month}-10`);
  }, [year, month]);

  const monthName = useMemo(() => {
    return date.toLocaleDateString('en', { month: 'long' });
  }, [date]);

  const monthDiff = useMemo(() => {
    return date.getMonth() - today.getMonth() + 12 * (date.getFullYear() - today.getFullYear());
  }, [date, today]);

  const monthAmount = useMemo(() => {
    const value = parseFloat(amount) / monthDiff;
    return formatValue({ value: value.toFixed(2), decimalScale: 2 });
  }, [monthDiff, amount]);

  const handleAddMonth = useCallback(() => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setValue('reachDate', formatYearAndMonth(newDate));
  }, [date, setValue, formatYearAndMonth]);

  const handleDecreaseMonth = useCallback(() => {
    if (monthDiff <= 1) return;
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setValue('reachDate', formatYearAndMonth(newDate));
  }, [monthDiff, date, setValue, formatYearAndMonth]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="amount">Total amount</label>
        <div>
          <i>$</i>
          <CurrencyInput
            id="amount"
            min={0}
            intlConfig={{ locale: 'en-US' }}
            allowNegativeValue={false}
            decimalsLimit={2}
            onValueChange={(value) => setValue('amount', value || '')}
            {...register('amount')}
          />
        </div>
      </div>
      <div>
        <label htmlFor="reachDate">Reach goal by</label>
        <div>
          <button onClick={handleDecreaseMonth} disabled={monthDiff <= 1}>{`<`}</button>
          <div>
            <span className="month">{monthName}</span>
            <span className="year">{year}</span>
            <input id="reachDate" type="month" min={formatYearAndMonth(minDate)} {...register('reachDate')} />
          </div>
          <button onClick={handleAddMonth}>{`>`}</button>
        </div>
      </div>
      {parseFloat(amount) > 0 && (
        <table>
          <thead>
            <tr>
              <td>Monthly amount</td>
              <td>
                <strong>${monthAmount}</strong>
              </td>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan={2}>
                <p>
                  You{`’`}re planning{' '}
                  <strong>
                    {monthDiff} monthly deposit{monthDiff > 1 ? 's' : ''}
                  </strong>{' '}
                  to reach your <strong>${formatValue({ value: amount, decimalScale: 2 })}</strong> goal by{' '}
                  <strong>
                    {monthName} {year}.
                  </strong>
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
      <Button>Confirm</Button>
    </form>
  );
};
