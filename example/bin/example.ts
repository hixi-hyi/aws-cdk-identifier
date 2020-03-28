#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { Identifier, Rank, RankLoc } from 'aws-cdk-identifier';
import { ManagementAlarmCommonStack, ManagementAlarmBudgetStack } from 'lib/stack';

function environment(): string {
  const sections = new Map<string, string>([
    ['${YOUR_DEV_AWS_ACCOUNT_ID}', 'dev'],
    ['${YOUR_PROD_AWS_ACCOUNT_ID}', 'prod'],
  ]);
  const account = process.env.CDK_DEFAULT_ACCOUNT || '';
  const section = sections.get(account);
  if (section !== undefined) {
    return section
  }
  throw new Error('Error: account not found')
}

const app = new cdk.App();
const id = new Identifier({
  empire: 'hixi',
  division: 'sample',
  section: 'dev',
  //section: environment(),
});

Rank.DEFAULT_START_LOC = RankLoc.Legion
// In example case, AWS Account is created separetely for `empire`(companyName) / `division`(projectName) / `section`(environmentName).
// e.g. AWS Account are `hixi-sample-dev`, `hixi-sample-prod`.
// At that time, we want the `StackName` to be created under the `legion` name, 
// so set RankLoc.Legion to Rank.DEFAULT_START_LOC.
// e.g. StackName are `ManagementAlarmCommon`, `ManagementAlarmBudget`.
//
// If you created 1 AWS Account per `division`. (e.g. `hixi-sample`).
// You can set RankLoc.Section to Rank.DEFAULT_START_LOC.
// In this case, StackName will be `DevManagementAlarmCommon`, `DevManagementAlarmBudget`

id.child({legion: 'management'}).scope((id: Identifier) => {
  id.child({family: 'alarm'}).scope((id: Identifier) => {
    const common = new ManagementAlarmCommonStack(app, id.child({genus: 'common'}), {});
    new ManagementAlarmBudgetStack(app, id.child({genus: 'budget'}), {
      notifyTopic: common.notifyTopic,
    })
  });
});
id.child({legion: 'service'}).scope((id: Identifier) => {
  // TODO
});
