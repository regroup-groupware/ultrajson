"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanImpl = void 0;
exports.BooleanImpl = {
    prefix: 'bool',
    match: function (value) {
        return typeof value === 'boolean';
    },
    deflate: function (value) {
        return {
            success: true,
            value: value
        };
    },
    inflate: function (value) {
        return (typeof value === 'boolean')
            ? {
                success: true,
                value: value
            }
            : {
                success: false
            };
    }
};
