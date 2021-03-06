import { IRank, Rank } from './rank';
export declare class Identifier {
    private childs;
    rank: Rank;
    constructor(r: IRank);
    child(value: string | IRank): Identifier;
    copy(): Identifier;
    get getChilds(): string[];
    get parent(): Identifier;
    scope(callback: (id: Identifier) => void): void;
    get stackName(): string;
    get constructName(): string;
    exportName(s: string): string;
    get camelName(): string;
    get slashName(): string;
    get dotName(): string;
    get dashName(): string;
}
