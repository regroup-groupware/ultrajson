import { Impl } from './types';
export declare function stringify(obj: any, maxDepth?: number, ownImpls?: Record<string, Impl>): string;
export declare function parse(data: string, maxDepth?: number, ownImpls?: Record<string, Impl>): any;
