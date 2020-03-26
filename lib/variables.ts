import { RankLoc } from './rank';
import { Identifier } from './identifier';

export namespace Variables {
  export function resolve<T>(id: Identifier, loc: RankLoc, values: { [key:string]: T}): T {
    const selector = id.rank.getValue(loc);
    if (selector in values) {
      return values[selector];
    }
    throw new Error(`Error: could not resolve values. loc: ${RankLoc[loc]}, selector: ${selector}, values:${JSON.stringify(values)}`);
  }
}
