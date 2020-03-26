import { Rank, RankLoc } from '../lib';

describe('Rank', () => {
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

  it('capitalizeString', () => {
    // with 1 arg
    expect(rankA.capitalizeString(RankLoc.Empire)).toBe('CompanyDepartmentProjectEnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.capitalizeString(RankLoc.Kingdom)).toBe('DepartmentProjectEnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.capitalizeString(RankLoc.Division)).toBe('ProjectEnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.capitalizeString(RankLoc.Section)).toBe('EnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.capitalizeString(RankLoc.Legion)).toBe('Usage1Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.capitalizeString(RankLoc.Cohort)).toBe('Usage2Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.capitalizeString(RankLoc.Family)).toBe('Usage3Usage4Usage5Usage6Usage7');
    expect(rankA.capitalizeString(RankLoc.Tribe)).toBe('Usage4Usage5Usage6Usage7');
    expect(rankA.capitalizeString(RankLoc.Genus)).toBe('Usage5Usage6Usage7');
    expect(rankA.capitalizeString(RankLoc.Series)).toBe('Usage6Usage7');
    expect(rankA.capitalizeString(RankLoc.Species)).toBe('Usage7');

    // with 2 args
    expect(rankA.capitalizeString(RankLoc.Section, RankLoc.Family)).toBe('EnvironmentUsage1Usage2Usage3');
    expect(rankA.capitalizeString(RankLoc.Legion, RankLoc.Genus)).toBe('Usage1Usage2Usage3Usage4Usage5');

    // using default
    Rank.DEFAULT_START_LOC = RankLoc.Empire;
    expect(rankA.capitalizeString()).toBe('CompanyDepartmentProjectEnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');
    Rank.DEFAULT_START_LOC = RankLoc.Family;
    expect(rankA.capitalizeString()).toBe('Usage3Usage4Usage5Usage6Usage7');
    Rank.DEFAULT_START_LOC = RankLoc.Section;
    expect(rankA.capitalizeString()).toBe('EnvironmentUsage1Usage2Usage3Usage4Usage5Usage6Usage7');

  });
  it('slashString', () => {
    // with 1 arg
    expect(rankA.slashString(RankLoc.Empire)).toBe('company/department/project/environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.slashString(RankLoc.Kingdom)).toBe('department/project/environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.slashString(RankLoc.Division)).toBe('project/environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.slashString(RankLoc.Section)).toBe('environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.slashString(RankLoc.Legion)).toBe('usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.slashString(RankLoc.Cohort)).toBe('usage2/usage3/usage4/usage5/usage6/usage7');
    expect(rankA.slashString(RankLoc.Family)).toBe('usage3/usage4/usage5/usage6/usage7');
    expect(rankA.slashString(RankLoc.Tribe)).toBe('usage4/usage5/usage6/usage7');
    expect(rankA.slashString(RankLoc.Genus)).toBe('usage5/usage6/usage7');
    expect(rankA.slashString(RankLoc.Series)).toBe('usage6/usage7');
    expect(rankA.slashString(RankLoc.Species)).toBe('usage7');

    // with 2 args
    expect(rankA.slashString(RankLoc.Section, RankLoc.Family)).toBe('environment/usage1/usage2/usage3');
    expect(rankA.slashString(RankLoc.Legion, RankLoc.Genus)).toBe('usage1/usage2/usage3/usage4/usage5');

    // using default
    Rank.DEFAULT_START_LOC = RankLoc.Empire;
    expect(rankA.slashString()).toBe('company/department/project/environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
    Rank.DEFAULT_START_LOC = RankLoc.Family;
    expect(rankA.slashString()).toBe('usage3/usage4/usage5/usage6/usage7');
    Rank.DEFAULT_START_LOC = RankLoc.Section;
    expect(rankA.slashString()).toBe('environment/usage1/usage2/usage3/usage4/usage5/usage6/usage7');
  });
});

