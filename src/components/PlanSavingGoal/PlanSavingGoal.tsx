import React, { FunctionComponent } from 'react';

import { Card } from 'components';

import { PlanSavingGoalForm } from './PlanSavingGoal.Form';

type PlanSavingGoalProps = {
  title?: string;
};

export const PlanSavingGoal: FunctionComponent<PlanSavingGoalProps> = (): JSX.Element => {
  return (
    <Card>
      <Card.Header>
        <img src="" alt="" />
        <h1>
          Buy a house
          <br />
          <small>Saving goal</small>
        </h1>
      </Card.Header>
      <PlanSavingGoalForm />
    </Card>
  );
};
