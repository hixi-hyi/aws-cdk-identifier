import * as lodash from 'lodash';
const _ = lodash;

export interface IRank {
  empire?: string;
  kingdom?: string;
  division?: string;
  section?: string;
  legion?: string;
  cohort?: string;
  family?: string;
  tribe?: string;
  genus?: string;
  series?: string;
  species?: string;
}

export enum RankLoc {
  Empire = 0,
  Kingdom,
  Division,
  Section,
  Legion,
  Cohort,
  Family,
  Tribe,
  Genus,
  Series,
  Species,
}

export interface RankLocArgs {
  start?: RankLoc;
  end?: RankLoc;
}

export class Rank implements IRank {
  public static DEFAULT_START_LOC:RankLoc = RankLoc.Empire;
  public empire: string = '';
  public kingdom: string = '';
  public division: string = '';
  public section: string = '';
  public legion: string = '';
  public cohort: string = '';
  public family: string = '';
  public tribe: string = '';
  public genus: string = '';
  public series: string = '';
  public species: string = '';

  constructor(r: IRank) {
    this.expands(r);
    this.validate();
  }

  private validate(): void {
    const values = this.toArray();
    values.forEach(v => {
      if (v !== v.toLowerCase()) {
        throw new Error(`Error: The capitalize string is not allowed. Because the value of IRank is used as a delimiter of StackName`);
      }
    });
  }

  private expands(r: IRank): void {
    this.empire = r.empire || this.empire;
    this.kingdom = r.kingdom || this.kingdom;
    this.division = r.division || this.division;
    this.section = r.section || this.section;
    this.legion = r.legion || this.legion;
    this.cohort = r.cohort || this.cohort;
    this.family = r.family || this.family;
    this.tribe = r.tribe || this.tribe;
    this.genus = r.genus || this.genus;
    this.series = r.series || this.series;
    this.species = r.species || this.species;
  }

  public copy(r?: IRank): Rank {
    const ret = _.cloneDeep(this);
    if (r) {
      ret.expands(r);
    }
    this.validate();
    return ret;
  }

  private toArray(): string[] {
    const array : string[] = new Array();
    array.push(this.empire);
    array.push(this.kingdom);
    array.push(this.division);
    array.push(this.section);
    array.push(this.legion);
    array.push(this.cohort);
    array.push(this.family);
    array.push(this.tribe);
    array.push(this.genus);
    array.push(this.series);
    array.push(this.species);
    return array;
  }

  private toArrayWithLoc(start?: RankLoc, end?: RankLoc): string[] {
    start = start !== undefined? start: Rank.DEFAULT_START_LOC;
    end = end !== undefined? end+1: undefined;
    const array = this.toArray().slice(start, end);
    return array.filter(Boolean);
  }

  public getValue(loc: RankLoc): string {
    return this.toArray()[loc];
  }

  public toCamelString(start?: RankLoc, end?: RankLoc): string {
    const array = this.toArrayWithLoc(start, end);
    return array.reduce((acc, word) => acc + word.charAt(0).toUpperCase() + word.slice(1), '');
  }

  public toSlashString(start?: RankLoc, end?: RankLoc): string {
    const array = this.toArrayWithLoc(start, end);
    return array.join('/');
  }

  public toDotString(start?: RankLoc, end?: RankLoc): string {
    const array = this.toArrayWithLoc(start, end);
    return array.join('.');
  }

}
