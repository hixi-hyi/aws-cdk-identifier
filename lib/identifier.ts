import { IRank, Rank } from './rank';

export class Identifier {
  public childs: string[] = new Array();
  public rank: Rank;
  constructor(r: IRank) {
    this.rank = new Rank(r);
  }

  public child(value: string | IRank): Identifier {
    const id = this.copy();
    if (typeof value === 'string') {
      id.childs.push(value);
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

  public get stackId(): string{
    return this.rank.capitalizeString();
  }

  public get constructId(): string{
    const length = this.childs.length;
    if (length === 0) {
      throw new Error(`Error: Does not have any child. Please call 'child(string)'`);
    }
    const word = this.childs[length-1];
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  public exportName(s: string): string {
    if (this.childs.length === 0) {
      return this.stackId + ':' + s;
    }
    return this.stackId + ':' + this.childs.reduce((acc, word) => acc + word.charAt(0).toUpperCase() + word.slice(1), '') + ':' + s;
  }

  public get id(): string {
    return this.stackId + this.childs.reduce((acc, word) => acc + word.charAt(0).toUpperCase() + word.slice(1), '');
  }

}
