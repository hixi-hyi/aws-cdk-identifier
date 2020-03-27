"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-shadowed-variable */
const lib_1 = require("../lib");
describe('Variables', () => {
    it('resolve', () => {
        const values = {
            dev: 'development',
            prod: 'production',
        };
        expect(lib_1.Variables.resolve(new lib_1.Identifier({
            section: 'dev',
        }), lib_1.RankLoc.Section, values)).toBe('development');
        expect(lib_1.Variables.resolve(new lib_1.Identifier({
            section: 'prod',
        }), lib_1.RankLoc.Section, values)).toBe('production');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC92YXJpYWJsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBeUM7QUFDekMsZ0NBQXdEO0FBRXhELFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ2pCLE1BQU0sTUFBTSxHQUFHO1lBQ2IsR0FBRyxFQUFFLGFBQWE7WUFDbEIsSUFBSSxFQUFFLFlBQVk7U0FDbkIsQ0FBQztRQUNGLE1BQU0sQ0FDSixlQUFTLENBQUMsT0FBTyxDQUNqQixJQUFJLGdCQUFVLENBQUM7WUFDYixPQUFPLEVBQUUsS0FBSztTQUNmLENBQUMsRUFDRixhQUFPLENBQUMsT0FBTyxFQUNmLE1BQU0sQ0FDTCxDQUNGLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FDSixlQUFTLENBQUMsT0FBTyxDQUNqQixJQUFJLGdCQUFVLENBQUM7WUFDYixPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDLEVBQ0YsYUFBTyxDQUFDLE9BQU8sRUFDZixNQUFNLENBQ0wsQ0FDRixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgKi9cbmltcG9ydCB7IElkZW50aWZpZXIsIFJhbmtMb2MsIFZhcmlhYmxlcyB9IGZyb20gJy4uL2xpYic7XG5cbmRlc2NyaWJlKCdWYXJpYWJsZXMnLCAoKSA9PiB7XG4gIGl0KCdyZXNvbHZlJywgKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIGRldjogJ2RldmVsb3BtZW50JyxcbiAgICAgIHByb2Q6ICdwcm9kdWN0aW9uJyxcbiAgICB9O1xuICAgIGV4cGVjdChcbiAgICAgIFZhcmlhYmxlcy5yZXNvbHZlPHN0cmluZz4oXG4gICAgICBuZXcgSWRlbnRpZmllcih7XG4gICAgICAgIHNlY3Rpb246ICdkZXYnLFxuICAgICAgfSksXG4gICAgICBSYW5rTG9jLlNlY3Rpb24sXG4gICAgICB2YWx1ZXMsXG4gICAgICApXG4gICAgKS50b0JlKCdkZXZlbG9wbWVudCcpO1xuICAgIGV4cGVjdChcbiAgICAgIFZhcmlhYmxlcy5yZXNvbHZlPHN0cmluZz4oXG4gICAgICBuZXcgSWRlbnRpZmllcih7XG4gICAgICAgIHNlY3Rpb246ICdwcm9kJyxcbiAgICAgIH0pLFxuICAgICAgUmFua0xvYy5TZWN0aW9uLFxuICAgICAgdmFsdWVzLFxuICAgICAgKVxuICAgICkudG9CZSgncHJvZHVjdGlvbicpO1xuICB9KTtcbn0pO1xuIl19