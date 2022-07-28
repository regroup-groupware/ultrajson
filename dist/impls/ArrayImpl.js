"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayImpl = void 0;
exports.ArrayImpl = {
    prefix: 'arr',
    match: function (value) {
        return Array.isArray(value);
    },
    deflate: function (value, deflate) {
        return {
            success: true,
            value: value.map(deflate)
        };
    },
    inflate: function (value, inflate) {
        return (Array.isArray(value))
            ? {
                success: true,
                value: value.map(inflate)
            }
            : {
                success: false
            };
    }
};
