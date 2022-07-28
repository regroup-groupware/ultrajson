"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetImpl = void 0;
exports.SetImpl = {
    prefix: 'set',
    match: function (value) {
        return value instanceof Set;
    },
    deflate: function (value) {
        return {
            success: true,
            value: value.entries()
        };
    },
    inflate: function (value) {
        return (Array.isArray(value))
            ? {
                success: true,
                value: new Set(value)
            }
            : {
                success: false
            };
    }
};
