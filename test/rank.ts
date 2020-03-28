import { Rank, RankLoc } from '../lib';

describe('Rank', () => {
  it('validate', () => {
    expect(() => { new Rank({ empire: 'Company' }); }).toThrow();
  });
  const rankA = new Rank({
    empire: 'company', // hixi
    kingdom: 'department',
    division: 'project', // aws-cdk
    section: 'environment', // dev, prod
    legion: 'usage1', // service, audit
    cohort: 'usage2', // standard, qa, personal
    family: 'usage3', // '', hixi
    tribe: 'usage4',  // common, webapp, batch
    genus: 'usage5',
    series: 'usage6', // api, admintool
    species: 'usage7',
  });
  it('get', () => {
    expect(rankA.getValue(RankLoc.Empire)).toBe('company');
    expect(rankA.getValue(RankLoc.Kingdom)).toBe('department');
    expect(rankA.getValue(RankLoc.Division)).toBe('project');
    expect(rankA.getValue(RankLoc.Section)).toBe('environment');
    expect(rankA.getValue(RankLoc.Legion)).toBe('usage1');
    expect(rankA.getValue(RankLoc.Cohort)).toBe('usage2');
    expect(rankA.getValue(RankLoc.Family)).toBe('usage3');
    expect(rankA.getValue(RankLoc.Tribe)).toBe('usage4');
    expect(rankA.getValue(RankLoc.Genus)).toBe('usage5');
    expect(rankA.getValue(RankLoc.Series)).toBe('usage6');
    expect(rankA.getValue(RankLoc.Species)).toBe('usage7');
  });

  it('toCamelString', () => {
    // with 1 arg
    expect(rankA.toCamelString(RankLoc.Empire)).toBe('CompanyDepartmentProjectEnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.toCamelString(RankLoc.Kingdom)).toBe('DepartmentProjectEnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.toCamelString(RankLoc.Division)).toBe('ProjectEnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.toCamelString(RankLoc.Section)).toBe('EnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.toCamelString(RankLoc.Legion)).toBe('Usage1Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.toCamelString(RankLoc.Cohort)).toBe('Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.toCamelString(RankLoc.Family)).toBe('Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.toCamelString(RankLoc.Tribe)).toBe('Usage4Usage5Usage6Usage7');
    expect(rankA.toCamelString(RankLoc.Genus)).toBe('Usage5Usage6Usage7');
    expect(rankA.toCamelString(RankLoc.Series)).toBe('Usage6Usage7');
    expect(rankA.toCamelString(RankLoc.Species)).toBe('Usage7');

    // with 2 args
    expect(rankA.toCamelString(RankLoc.Section, RankLoc.Family)).toBe('EnvironmentUsage1Usage2Usage3');
    expect(rankA.toCamelString(RankLoc.Legion, RankLoc.Genus)).toBe('Usage1Usage2Usage3Usage4Usage5');

    // using default
    Rank.DEFAULT_START_LOC = RankLoc.Empire;
    expect(rankA.toCamelString()).toBe('CompanyDepartmentProjectEnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');
    Rank.DEFAULT_START_LOC = RankLoc.Family;
    expect(rankA.toCamelString()).toBe('Usage3Usage4Usage5Usage6Usage7');
    Rank.DEFAULT_START_LOC = RankLoc.Section;
    expect(rankA.toCamelString()).toBe('EnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');

  });
  it('toSlashString', () => {
    // with 1 arg
    expect(rankA.toSlashString(RankLoc.Empire)).toBe('company/department/project/environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.toSlashString(RankLoc.Kingdom)).toBe('department/project/environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.toSlashString(RankLoc.Division)).toBe('project/environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.toSlashString(RankLoc.Section)).toBe('environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.toSlashString(RankLoc.Legion)).toBe('usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.toSlashString(RankLoc.Cohort)).toBe('usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.toSlashString(RankLoc.Family)).toBe('usage3/usage4/usage5/usage6/usage7');
    expect(rankA.toSlashString(RankLoc.Tribe)).toBe('usage4/usage5/usage6/usage7');
    expect(rankA.toSlashString(RankLoc.Genus)).toBe('usage5/usage6/usage7');
    expect(rankA.toSlashString(RankLoc.Series)).toBe('usage6/usage7');
    expect(rankA.toSlashString(RankLoc.Species)).toBe('usage7');

    // with 2 args
    expect(rankA.toSlashString(RankLoc.Section, RankLoc.Family)).toBe('environment/usage1/usage2/usage3');
    expect(rankA.toSlashString(RankLoc.Legion, RankLoc.Genus)).toBe('usage1/usage2/usage3/usage4/usage5');

    // using default
    Rank.DEFAULT_START_LOC = RankLoc.Empire;
    expect(rankA.toSlashString()).toBe('company/department/project/environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    Rank.DEFAULT_START_LOC = RankLoc.Family;
    expect(rankA.toSlashString()).toBe('usage3/usage4/usage5/usage6/usage7');
    Rank.DEFAULT_START_LOC = RankLoc.Section;
    expect(rankA.toSlashString()).toBe('environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
  });
});

