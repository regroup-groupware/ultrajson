"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringImpl = void 0;
exports.StringImpl = {
    prefix: 'str',
    match: function (value) {
        return typeof value === 'string';
    },
    deflate: function (value) {
        return {
            success: true,
            value: value
        };
    },
    inflate: function (value) {
        return (typeof value === 'string')
            ? {
                success: true,
                value: value
            }
            : {
                success: false
            };
    }
};
