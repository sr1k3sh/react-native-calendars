declare const XDate: any;
type XDateType = InstanceType<typeof XDate>;
export declare function padNumber(n: number): string | number;
export declare function xdateToData(date: XDateType | string): {
    year: any;
    month: any;
    day: any;
    timestamp: any;
    dateString: string;
};
export declare function parseDate(d?: any): any;
export declare function toMarkingFormat(d: XDateType): string;
export {};
//# sourceMappingURL=interface.d.ts.map