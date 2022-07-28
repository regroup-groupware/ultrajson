"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.stringify = void 0;
var errors_1 = require("./errors");
var StringImpl_1 = require("./impls/StringImpl");
var NumberImpl_1 = require("./impls/NumberImpl");
var BooleanImpl_1 = require("./impls/BooleanImpl");
var ArrayImpl_1 = require("./impls/ArrayImpl");
var NullImpl_1 = require("./impls/NullImpl");
var UndefinedImpl_1 = require("./impls/UndefinedImpl");
var DateImpl_1 = require("./impls/DateImpl");
var MapImpl_1 = require("./impls/MapImpl");
var SetImpl_1 = require("./impls/SetImpl");
var impls = (_a = {},
    _a[StringImpl_1.StringImpl.prefix] = StringImpl_1.StringImpl,
    _a[NumberImpl_1.NumberImpl.prefix] = NumberImpl_1.NumberImpl,
    _a[BooleanImpl_1.BooleanImpl.prefix] = BooleanImpl_1.BooleanImpl,
    _a[ArrayImpl_1.ArrayImpl.prefix] = ArrayImpl_1.ArrayImpl,
    _a[NullImpl_1.NullImpl.prefix] = NullImpl_1.NullImpl,
    _a[UndefinedImpl_1.UndefinedImpl.prefix] = UndefinedImpl_1.UndefinedImpl,
    _a[DateImpl_1.DateImpl.prefix] = DateImpl_1.DateImpl,
    _a[MapImpl_1.MapImpl.prefix] = MapImpl_1.MapImpl,
    _a[SetImpl_1.SetImpl.prefix] = SetImpl_1.SetImpl,
    _a);
function deflate(obj, impls, maxDepth, depth) {
    if (maxDepth === void 0) { maxDepth = Infinity; }
    if (depth === void 0) { depth = 0; }
    if (depth > maxDepth) {
        throw new errors_1.UltrajsonDepthError('Maximum depth has been exceeded.');
    }
    if (typeof obj === 'object') {
        var matchedImpl = Object.keys(impls).find(function (key) { return impls[key].match(obj); });
        if (matchedImpl) {
            var result = impls[matchedImpl].deflate(obj, function (v) { return deflate(v, impls, maxDepth, depth + 1); });
            if (!(result === null || result === void 0 ? void 0 : result.success)) {
                throw new errors_1.UltrajsonDeflateError('Failed to deflate object.');
            }
            return result.value == null ? [matchedImpl] : [matchedImpl, result.value];
        }
        return Object.keys(obj).reduce(function (p, el) {
            p[el] = deflate(obj[el], impls, maxDepth, depth + 1);
            return p;
        }, {});
    }
    else {
        var matchedImpl = Object.keys(impls).find(function (key) { return impls[key].match(obj); });
        var result = matchedImpl
            ? impls[matchedImpl].deflate(obj, function (v) { return deflate(v, impls, maxDepth, depth + 1); })
            : undefined;
        if (!(result === null || result === void 0 ? void 0 : result.success)) {
            throw new errors_1.UltrajsonDeflateError('Failed to deflate primitive.');
        }
        return result.value == null ? [matchedImpl] : [matchedImpl, result.value];
    }
}
function inflate(obj, impls, maxDepth, depth) {
    var _a;
    if (maxDepth === void 0) { maxDepth = Infinity; }
    if (depth === void 0) { depth = 0; }
    if (depth > maxDepth) {
        throw new errors_1.UltrajsonDepthError('Maximum depth has been exceeded.');
    }
    if (typeof obj === 'object' && !Array.isArray(obj)) {
        return Object.keys(obj).reduce(function (p, el) {
            p[el] = inflate(obj[el], impls, maxDepth, depth + 1);
            return p;
        }, {});
    }
    else if (Array.isArray(obj)) {
        var matchedImpl = obj[0], value = obj[1];
        var result = (_a = impls[matchedImpl]) === null || _a === void 0 ? void 0 : _a.inflate(value, function (v) { return inflate(v, impls, maxDepth, depth + 1); });
        if (!(result === null || result === void 0 ? void 0 : result.success)) {
            throw new errors_1.UltrajsonInflateError('Failed to inflate data.');
        }
        return result.value;
    }
    else {
        return obj;
    }
}
function stringify(obj, maxDepth, ownImpls) {
    if (maxDepth === void 0) { maxDepth = Infinity; }
    return JSON.stringify(deflate(obj, __assign(__assign({}, impls), ownImpls), maxDepth));
}
exports.stringify = stringify;
function parse(data, maxDepth, ownImpls) {
    if (maxDepth === void 0) { maxDepth = Infinity; }
    return inflate(JSON.parse(data), __assign(__assign({}, impls), ownImpls), maxDepth);
}
exports.parse = parse;
