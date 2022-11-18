import React, { FunctionComponent } from 'react';

import { Button, Card } from 'components';

type PlanSavingGoalProps = {
  title?: string;
};

export const PlanSavingGoal: FunctionComponent<PlanSavingGoalProps> = ({
  children,
  title,
}): JSX.Element => {
  return (
    <Card>
      <Card.Header>
        <img src="" alt="" />
        <h1>Buy a house</h1>
        <h4>Saving goal</h4>
      </Card.Header>
      <form action="">
        <div>
          <label htmlFor="amount">Total amount</label>
          <div>
            <i>$</i>
            <input type="number" id="amount" />
          </div>
        </div>
        <div>
          <label htmlFor="date">October</label>
          <div>
            <i>{`<`}</i>
            <input type="date" id="date" />
            <i>{`>`}</i>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td>Monthly amount</td>
              <td>
                <strong>$520.83</strong>
              </td>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan={2}>
                <p>
                  You’re planning <strong>48 monthly deposits</strong> to reach
                  your <strong>$25,000</strong> goal by
                  <strong>October 2020.</strong>
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
        <Button>Confirm</Button>
      </form>
    </Card>
  );
};
