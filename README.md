# aws-cdk-identifier
The library is useful for structuring aws-cdk.

## Example
[Please show](./example)

## Why you need this library

### Creating rules
The aws-cdk has no restrictions on writing and must be implemented by trial and error. This library clarifies some things to consider first by creating rules that should be written this way.

#### Restrict stack names.
* `Identifier.stackName`

The stack names should be structed, since cdk can operate with `*`.
For example, When `ServiceWebappApi`,`AnalyticalWebappApi`, `AnalyticalBudgets` exist, you can deploy all stacks under `Analytical` using `cdk deploy Analytical*`


#### You should create lib/construct directory.
* `Variables.resolve()`

The `@aws-cdk/aws-xxx` is made for general purpose.
However, you must have your own or company rules.
For example, The S3 bucket should be restrict ip address in dvelopment environment, The web applications provided to end users must be monitored and alarted for immediate action.
Such rules can be written in lib/construct to prevent them from deviating.
`aws-cdk-identifier` helps you set values that change depending on your environment and type.
Of course, variables can be given from the stack.ts, but they are less readable and more prone to errors.

#### Name rules for reuse
* `Identifier.camelName()`
* `Identifier.slashName()`
* `Identifier.dotName()`
* `Identifier.exportName()`

These method returns string that created from structure of aws-cdk-identifier.
If the value of aws-cdk-identifier instance is different, a different string will be returned.
lib/stack/ or lib/construct/ can be reused.

## FAQ
### Why isn't RankLoc a direct name?
I think that giving as direct name is to restrictive.
If I must choose, I think following structure is good in my current idea.
```
const id = new Identifier({
  empire: 'hixi',
  division: 'cdk',
  section: 'dev',
})
id.child({legion: 'management'}).scope((id:Identifier) => {
    new Billing(this, id.child({tribe: 'billing'});
    new Audit(this, id.child({tribe: 'audit'});
});
const serviceSet = function(id: Identifier) {
   const common = new CommonStack(this, id.child({ tribe: 'common'}); // vpc, db, ...
   id.child({tribe:'webapp'}).scope((id:Identifier) => {
       new ApiStack(this, id.child({ genus: 'api' }, { common });
       new AdmintoolStack(this, id.child({ genus: 'admintool'}, { common });
   });
   id.child({tribe:'batch'}).scope(id:Identifier) => {
       new Batch1Stack(this, id.child({ genus: 'batch1'}, { common })
   });
}
id.child({legion:'service'}).scope((id:Identifier) => {
    id.child({cohort: 'standard'}).scope(serviceSet);
    id.child({cohort: 'testing'}).scope(serviceSet);
});
```



