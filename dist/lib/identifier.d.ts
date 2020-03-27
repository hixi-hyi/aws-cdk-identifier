import { IRank, Rank } from './rank';
export declare class Identifier {
    childs: string[];
    rank: Rank;
    constructor(r: IRank);
    child(value: string | IRank): Identifier;
    copy(): Identifier;
    scope(callback: (id: Identifier) => void): void;
    get stackId(): string;
    get constructId(): string;
    exportName(s: string): string;
    get id(): string;
}
