import { IRank, Rank } from './rank';

function toCamel(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toCamels(s: string[]): string {
  return s.reduce((acc, word) => acc + toCamel(word), '');
}

export class Identifier {
  private childs: string[] = new Array();
  public rank: Rank;
  constructor(r: IRank) {
    this.rank = new Rank(r);
  }

  public child(value: string | IRank): Identifier {
    const id = this.copy();
    if (typeof value === 'string') {
      id.childs.push(toCamel(value));
      return id;
    } else {
      if (id.childs.length !== 0) {
        throw new Error(`Error: It is forbidden to call 'child(IRank)' functions, after 'child(string)`);
      }
      id.rank = id.rank.copy(value);
      return id;
    }
  }

  public copy(): Identifier {
    const id = new Identifier(this.rank);
    id.childs = Array.from(this.childs);
    return id;
  }

  public scope(callback: (id: Identifier) => void) {
    callback(this.copy());
  }

  public get stackName(): string{
    return this.rank.toCamelString();
  }

  public get constructName(): string{
    const length = this.childs.length;
    if (length === 0) {
      throw new Error(`Error: Does not have any child. Please call 'child(string)'`);
    }
    // The cdk.Construct names `LogicalId` using `scope`(args[0]) and `id`(args[1]).
    // The scope that nested function already set `id` to `scope`, so constructName() only return last value of array.
    const word = this.childs[length-1];
    return toCamel(word);
  }

  public exportName(s: string): string {
    if (this.childs.length === 0) {
      return this.stackName + ':' + s;
    }
    return this.stackName + ':' + toCamels(this.childs)  + ':' + toCamel(s);
  }

  public get camelName(): string {
    return this.stackName + toCamels(this.childs);
  }

  public get slashName(): string {
    const array = [ this.rank.toSlashString(), ...this.childs];
    return array.join('/').toLowerCase();
  }

  public get dotName(): string {
    const array = [ this.rank.toDotString(), ...this.childs];
    return array.join('.').toLowerCase();
  }

  public get dashName(): string {
    const array = [ this.rank.toDashString(), ...this.childs];
    return array.join('-').toLowerCase();
  }
}
