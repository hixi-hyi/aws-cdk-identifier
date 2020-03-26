/* tslint:disable:no-shadowed-variable */
import { Identifier, Rank, RankLoc } from '../lib';

describe('Identifier', () => {
  it('identifier', () => {
    const id = new Identifier({
      empire: 'company',
      kingdom: 'depertment',
      division: 'project',
      section: 'environment',
      legion: 'usage1',
      cohort: 'usage2',
    });
    Rank.DEFAULT_START_LOC = RankLoc.Legion;
    expect(id.stackId).toBe('Usage1Usage2');
    expect(() => { return id.constructId; }).toThrow();

    id.child({family: 'webapp'}).scope((id: Identifier) => {
      expect(id.stackId).toBe('Usage1Usage2Webapp');
      expect(() => { return id.constructId; }).toThrow();
      expect(id.exportName('Name')).toBe('Usage1Usage2Webapp:Name');

      id.child('construct').scope((id: Identifier) => {
        expect(id.stackId).toBe('Usage1Usage2Webapp');
        expect(id.constructId).toBe("Construct");
        expect(id.exportName('Name')).toBe('Usage1Usage2Webapp:Construct:Name');
      });
    });
  });
});
