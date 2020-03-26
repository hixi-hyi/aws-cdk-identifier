/* tslint:disable:no-shadowed-variable */
import { Identifier, RankLoc, Variables } from '../lib';

describe('Variables', () => {
  it('resolve', () => {
    const values = {
      dev: 'development',
      prod: 'production',
    };
    expect(
      Variables.resolve<string>(
      new Identifier({
        section: 'dev',
      }),
      RankLoc.Section,
      values,
      )
    ).toBe('development');
    expect(
      Variables.resolve<string>(
      new Identifier({
        section: 'prod',
      }),
      RankLoc.Section,
      values,
      )
    ).toBe('production');
  });
});
