"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapImpl = void 0;
exports.MapImpl = {
    prefix: 'map',
    match: function (value) {
        return value instanceof Map;
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
                value: new Map(value)
            }
            : {
                success: false
            };
    }
};
