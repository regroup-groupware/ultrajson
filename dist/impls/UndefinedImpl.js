"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndefinedImpl = void 0;
exports.UndefinedImpl = {
    prefix: 'undef',
    match: function (value) {
        return value === undefined;
    },
    deflate: function () {
        return {
            success: true
        };
    },
    inflate: function () {
        return {
            success: true,
            value: undefined
        };
    }
};
