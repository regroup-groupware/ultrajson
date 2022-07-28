"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UltrajsonDepthError = exports.UltrajsonInflateError = exports.UltrajsonDeflateError = void 0;
var UltrajsonDeflateError = /** @class */ (function (_super) {
    __extends(UltrajsonDeflateError, _super);
    function UltrajsonDeflateError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UltrajsonDeflateError;
}(Error));
exports.UltrajsonDeflateError = UltrajsonDeflateError;
var UltrajsonInflateError = /** @class */ (function (_super) {
    __extends(UltrajsonInflateError, _super);
    function UltrajsonInflateError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UltrajsonInflateError;
}(Error));
exports.UltrajsonInflateError = UltrajsonInflateError;
var UltrajsonDepthError = /** @class */ (function (_super) {
    __extends(UltrajsonDepthError, _super);
    function UltrajsonDepthError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UltrajsonDepthError;
}(Error));
exports.UltrajsonDepthError = UltrajsonDepthError;
