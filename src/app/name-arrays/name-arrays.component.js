import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var NameArraysComponent = /** @class */ (function () {
    function NameArraysComponent() {
        this.isVoted = false;
        this.liked = null;
    }
    NameArraysComponent.prototype.like = function () {
        this.liked = true;
        this.isVoted = true;
    };
    NameArraysComponent.prototype.dislike = function () {
        this.liked = false;
        this.isVoted = true;
    };
    NameArraysComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NameArraysComponent.prototype, "naam", void 0);
    NameArraysComponent = tslib_1.__decorate([
        Component({
            selector: 'app-name-arrays',
            templateUrl: './name-arrays.component.html',
            styleUrls: ['./name-arrays.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NameArraysComponent);
    return NameArraysComponent;
}());
export { NameArraysComponent };
//# sourceMappingURL=name-arrays.component.js.map