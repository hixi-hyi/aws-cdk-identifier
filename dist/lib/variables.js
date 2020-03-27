"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rank_1 = require("./rank");
var Variables;
(function (Variables) {
    function resolve(id, loc, values) {
        const selector = id.rank.getValue(loc);
        if (selector in values) {
            return values[selector];
        }
        throw new Error(`Error: could not resolve values. loc: ${rank_1.RankLoc[loc]}, selector: ${selector}, values:${JSON.stringify(values)}`);
    }
    Variables.resolve = resolve;
})(Variables = exports.Variables || (exports.Variables = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3ZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFpQztBQUdqQyxJQUFpQixTQUFTLENBUXpCO0FBUkQsV0FBaUIsU0FBUztJQUN4QixTQUFnQixPQUFPLENBQUksRUFBYyxFQUFFLEdBQVksRUFBRSxNQUEwQjtRQUNqRixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxjQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsUUFBUSxZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BJLENBQUM7SUFOZSxpQkFBTyxVQU10QixDQUFBO0FBQ0gsQ0FBQyxFQVJnQixTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQVF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmtMb2MgfSBmcm9tICcuL3JhbmsnO1xuaW1wb3J0IHsgSWRlbnRpZmllciB9IGZyb20gJy4vaWRlbnRpZmllcic7XG5cbmV4cG9ydCBuYW1lc3BhY2UgVmFyaWFibGVzIHtcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmU8VD4oaWQ6IElkZW50aWZpZXIsIGxvYzogUmFua0xvYywgdmFsdWVzOiB7IFtrZXk6c3RyaW5nXTogVH0pOiBUIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGlkLnJhbmsuZ2V0VmFsdWUobG9jKTtcbiAgICBpZiAoc2VsZWN0b3IgaW4gdmFsdWVzKSB7XG4gICAgICByZXR1cm4gdmFsdWVzW3NlbGVjdG9yXTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogY291bGQgbm90IHJlc29sdmUgdmFsdWVzLiBsb2M6ICR7UmFua0xvY1tsb2NdfSwgc2VsZWN0b3I6ICR7c2VsZWN0b3J9LCB2YWx1ZXM6JHtKU09OLnN0cmluZ2lmeSh2YWx1ZXMpfWApO1xuICB9XG59XG4iXX0=