import cdk = require('@aws-cdk/core');
import { Identifier } from 'aws-cdk-identifier';
import { Chatbot } from 'lib/construct/chatbot';
import sns = require('@aws-cdk/aws-sns');

export interface ManagementAlarmCommonStackProps extends cdk.StackProps {}

export class ManagementAlarmCommonStack extends cdk.Stack {
  public readonly notifyTopic: sns.Topic
  constructor(app: cdk.App, id: Identifier, props: ManagementAlarmCommonStackProps) {
    super(app, id.stackName, props);
    const chatbot = new Chatbot(this, id.child("Chatbot"), {});
    this.notifyTopic = chatbot.notifyTopic;
  }
}
