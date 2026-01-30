declare const XDate: any;
type XDateType = InstanceType<typeof XDate>;
export declare function sameMonth(a?: XDateType, b?: XDateType): boolean;
export declare function sameDate(a?: XDateType, b?: XDateType): boolean;
export declare function onSameDateRange({ firstDay, secondDay, numberOfDays, firstDateInRange }: {
    firstDay: string;
    secondDay: string;
    numberOfDays: number;
    firstDateInRange: string;
}): boolean;
export declare function sameWeek(a: string, b: string, firstDayOfWeek: number): boolean | undefined;
export declare function isPastDate(date: string): boolean;
export declare function isToday(date?: XDateType | string): boolean;
export declare function isGTE(a: XDateType, b: XDateType): boolean | undefined;
export declare function isLTE(a: XDateType, b: XDateType): boolean | undefined;
export declare function formatNumbers(date: any): any;
export declare function month(date: XDateType): any[];
export declare function weekDayNames(firstDayOfWeek?: number): any;
export declare function page(date: XDateType, firstDayOfWeek?: number, showSixWeeks?: boolean): any[];
export declare function isDateNotInRange(date: XDateType, minDate: string, maxDate: string): boolean | "";
export declare function getWeekDates(date: string, firstDay?: number, format?: string): any[] | undefined;
export declare function getPartialWeekDates(date?: string, numberOfDays?: number): string[];
export declare function generateDay(originDate: string | XDateType, daysOffset?: number): any;
export declare function getLocale(): any;
export {};
//# sourceMappingURL=dateutils.d.ts.map