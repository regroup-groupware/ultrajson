"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberImpl = void 0;
exports.NumberImpl = {
    prefix: 'num',
    match: function (value) {
        return typeof value === 'number';
    },
    deflate: function (value) {
        var _value = value;
        if (value === Infinity) {
            _value = 'inf';
        }
        else if (value === -Infinity) {
            _value = '-inf';
        }
        else if (isNaN(value)) {
            _value = 'nan';
        }
        else if (Object.is(value, -0)) {
            _value = '-0';
        }
        return {
            success: true,
            value: _value
        };
    },
    inflate: function (value) {
        var _value;
        if (typeof value === 'number') {
            _value = value;
        }
        else if (value === 'inf') {
            _value = Infinity;
        }
        else if (value === '-inf') {
            _value = -Infinity;
        }
        else if (value === 'nan') {
            _value = NaN;
        }
        else if (value === '-0') {
            _value = -0;
        }
        return (_value === undefined)
            ? {
                success: false
            }
            : {
                success: true,
                value: _value
            };
    }
};
