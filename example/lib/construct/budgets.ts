import cdk = require('@aws-cdk/core');
import { Identifier, RankLoc, Variables } from 'aws-cdk-identifier';
import budgets = require("@aws-cdk/aws-budgets");
import sns = require('@aws-cdk/aws-sns');

export interface BudgetsProps {
  notifyTopic: sns.Topic;
}

export class Budgets extends cdk.Construct {
  constructor(scope: cdk.Construct, id: Identifier, props: BudgetsProps) {
    super(scope, id.constructName);

    const budgetUSD = Variables.resolve<number>(id, RankLoc.Section, {
      dev: 500,
      prod: 1000,
    });

    const subscribers =  [ {
      subscriptionType: "SNS",
      address: props.notifyTopic.topicArn,
    } ];
    let actuals: Array<budgets.CfnBudget.NotificationWithSubscribersProperty> = [];
    for (let i=25; i<=100; i=i+25) {
      actuals.push({
        notification: {
          notificationType: "ACTUAL",
          comparisonOperator: "GREATER_THAN",
          threshold: i,
        },
        subscribers: subscribers,
      });
    }
    new budgets.CfnBudget(this, "Budgets", {
      budget: {
        budgetLimit: {
          amount: budgetUSD,
          unit: "USD",
        },
        timeUnit: "MONTHLY",
        budgetType: "COST",
      },
      notificationsWithSubscribers: [
        {
          notification: {
            notificationType: "FORECASTED",
            comparisonOperator: "GREATER_THAN",
            threshold: 100,
          },
          subscribers: subscribers,
        },
        ...actuals,
      ],
    });
  }
}
