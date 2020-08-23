/* tslint:disable:no-shadowed-variable */
import { Identifier, Rank, RankLoc } from '../lib';

describe('Identifier', () => {
  it('automatic calibration', () => {
    expect(new Identifier({}).child('webapp').constructName).toBe('Webapp');
    expect(new Identifier({}).child('Webapp').constructName).toBe('Webapp');
  });
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
    expect(id.stackName).toBe('Usage1Usage2');
    expect(() => { return id.constructName; }).toThrow();

    id.child({family: 'webapp'}).scope((id: Identifier) => {
      expect(id.stackName).toBe('Usage1Usage2Webapp');
      expect(() => { return id.constructName; }).toThrow();
      expect(id.exportName('Name')).toBe('Usage1Usage2Webapp:Name');

      id.child('Construct').scope((id: Identifier) => {
        expect(id.stackName).toBe('Usage1Usage2Webapp');
        expect(id.constructName).toBe("Construct");
        expect(id.exportName('Name')).toBe('Usage1Usage2Webapp:Construct:Name');
        id.child('Construct2').scope((id: Identifier) => {
          expect(id.stackName).toBe('Usage1Usage2Webapp');
          expect(id.constructName).toBe("Construct2");
          expect(id.exportName('Name')).toBe('Usage1Usage2Webapp:ConstructConstruct2:Name');
          expect(id.slashName).toBe('usage1/usage2/webapp/construct/construct2');
          expect(id.dotName).toBe('usage1.usage2.webapp.construct.construct2');
          expect(id.dashName).toBe('usage1-usage2-webapp-construct-construct2');
        });
      });
    });
  });
});
