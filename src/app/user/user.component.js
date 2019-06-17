import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.onvoted = new EventEmitter();
        this.isVoted = false;
    }
    UserComponent.prototype.like = function () {
        this.isVoted = true;
        this.onvoted.emit("like");
    };
    UserComponent.prototype.dislike = function () {
        this.isVoted = false;
        this.onvoted.emit("dislike");
    };
    UserComponent.prototype.onVoted = function (arg) {
        console.log(arg);
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], UserComponent.prototype, "naam", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], UserComponent.prototype, "onvoted", void 0);
    UserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map