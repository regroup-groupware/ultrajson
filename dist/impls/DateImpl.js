"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateImpl = void 0;
exports.DateImpl = {
    prefix: 'date',
    match: function (value) {
        return value instanceof Date;
    },
    deflate: function (value) {
        return {
            success: true,
            value: value.toISOString()
        };
    },
    inflate: function (value) {
        return (typeof value === 'string')
            ? {
                success: true,
                value: new Date(value)
            }
            : {
                success: false
            };
    }
};
