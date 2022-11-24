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
    <ST.InfoTable>
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
                {monthsDiff} monthly deposit{monthsDiff > 1 ? 's' : ''}
              </strong>{' '}
              to reach your <strong>${formatValue({ value: amount, decimalScale: 2 })}</strong> goal by{' '}
              <strong>
                {monthName} {year}.
              </strong>
            </p>
          </td>
        </tr>
      </tfoot>
    </ST.InfoTable>
  );
};
