import React, { FunctionComponent, useMemo } from 'react';
import { formatValue } from 'react-currency-input-field';

import { useInputDateValue } from 'components';

import * as ST from './PlanSavingGoal.styled';

export type PlanSavingGoalInfoProps = ST.PlanSavingGoalInfoProps & {
  amount: string;
  reachDate: string;
};

export const PlanSavingGoalInfo: FunctionComponent<PlanSavingGoalInfoProps> = ({
  amount,
  reachDate,
  show,
}): JSX.Element => {
  const { monthName, monthsDiff, year } = useInputDateValue(reachDate);

  const monthAmount = useMemo(() => {
    const value = parseFloat(amount) / monthsDiff;
    return value ? formatValue({ value: value.toFixed(2), decimalScale: 2, prefix: '$' }) : '';
  }, [monthsDiff, amount]);

  return (
    <ST.PlanSavingGoalInfo show={show} data-testid="resultInfo">
      <h3>
        <span>Monthly amount</span>
        <strong data-testid="monthlyAmount">{monthAmount}</strong>
      </h3>
      <p>
        You{`’`}re planning{' '}
        <strong>
          <span data-testid="monthsDiff">{monthsDiff}</span> monthly deposit{monthsDiff > 1 ? 's' : ''}
        </strong>{' '}
        to reach your <strong>{formatValue({ value: amount, decimalScale: 2, prefix: '$' })}</strong> goal by{' '}
        <strong>
          {monthName} {year}.
        </strong>
      </p>
    </ST.PlanSavingGoalInfo>
  );
};
