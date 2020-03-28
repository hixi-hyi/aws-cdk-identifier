import cdk = require('@aws-cdk/core');
import { Identifier } from 'aws-cdk-identifier';
import { Budgets } from 'lib/construct';
import sns = require('@aws-cdk/aws-sns');

export interface ManagementAlarmBudgetStackProps extends cdk.StackProps {
  notifyTopic: sns.Topic;
}

export class ManagementAlarmBudgetStack extends cdk.Stack {
  constructor(app: cdk.App, id: Identifier, props: ManagementAlarmBudgetStackProps) {
    super(app, id.stackName, props);
    new Budgets(this, id.child('Budgets'), {
      notifyTopic: props.notifyTopic,
    });
  }
}

