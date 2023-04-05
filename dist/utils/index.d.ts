export type ElementOptions = {
    [_: string]: any;
};
export declare const getTagName: (options: ElementOptions, tag?: string) => string;
export declare const mergeClassNames: (className: string, classNames: string) => string;
export declare const fixOptions: (options: ElementOptions, defaultOptions: ElementOptions) => ElementOptions;
