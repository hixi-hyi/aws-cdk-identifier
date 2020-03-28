import cdk = require('@aws-cdk/core');
import { Identifier } from 'aws-cdk-identifier';
import sns = require('@aws-cdk/aws-sns');
import iam = require('@aws-cdk/aws-iam');

export interface ChatbotProps {}

export class Chatbot extends cdk.Construct {
  public readonly notifyTopic: sns.Topic
  constructor(scope: cdk.Construct, id: Identifier, props: ChatbotProps) {
    super(scope, id.constructName);
    this.notifyTopic = new sns.Topic(this, "NotifyTopic", {
      displayName: id.camelName,
    })
    const policy = new iam.PolicyStatement();
    policy.addActions(
      "SNS:GetTopicAttributes",
      "SNS:SetTopicAttributes",
      "SNS:AddPermission",
      "SNS:RemovePermission",
      "SNS:DeleteTopic",
      "SNS:Subscribe",
      "SNS:ListSubscriptionsByTopic",
      "SNS:Publish",
      "SNS:Receive",
    );
    policy.addPrincipals(new iam.AnyPrincipal());
    policy.addResources(this.notifyTopic.topicArn);
    this.notifyTopic.addToResourcePolicy(policy);

    //TODO connection snsTopic to AWS Chatbot
  }
}
