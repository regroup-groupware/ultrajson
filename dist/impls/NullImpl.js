"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullImpl = void 0;
exports.NullImpl = {
    prefix: 'null',
    match: function (value) {
        return value === null;
    },
    deflate: function () {
        return {
            success: true
        };
    },
    inflate: function () {
        return {
            success: true,
            value: null
        };
    }
};
