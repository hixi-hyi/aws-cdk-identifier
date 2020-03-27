import { RankLoc } from './rank';
import { Identifier } from './identifier';
export declare namespace Variables {
    function resolve<T>(id: Identifier, loc: RankLoc, values: {
        [key: string]: T;
    }): T;
}
