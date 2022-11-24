import React, { FunctionComponent, useMemo } from 'react';
import { formatValue } from 'react-currency-input-field';

import { useInputDateValue } from 'components';

import * as ST from './PlanSavingGoal.styled';

type PlanSavingGoalInfoProps = {
  amount: string;
  reachDate: string;
};

export const PlanSavingGoalInfo: FunctionComponent<PlanSavingGoalInfoProps> = ({ amount, reachDate }): JSX.Element => {
  const { monthName, monthsDiff, year } = useInputDateValue(reachDate);

  const monthAmount = useMemo(() => {
    const value = parseFloat(amount) / monthsDiff;
    return formatValue({ value: value.toFixed(2), decimalScale: 2 });
  }, [monthsDiff, amount]);

  return (
    <ST.PlanSavingGoalInfo>
      <h3>
        <span>Monthly amount</span>
        <strong>${monthAmount}</strong>
      </h3>
      <p>
        You{`’`}re planning{' '}
        <strong>
          {monthsDiff} monthly deposit{monthsDiff > 1 ? 's' : ''}
        </strong>{' '}
        to reach your <strong>${formatValue({ value: amount, decimalScale: 2 })}</strong> goal by{' '}
        <strong>
          {monthName} {year}.
        </strong>
      </p>
    </ST.PlanSavingGoalInfo>
  );
};
