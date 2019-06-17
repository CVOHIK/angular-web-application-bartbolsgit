import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ParentcompComponent = /** @class */ (function () {
    function ParentcompComponent() {
        this.namen = ["tom peeters", "mieke vdp", "jan klaasen"];
    }
    ParentcompComponent.prototype.ngOnInit = function () {
    };
    ParentcompComponent = tslib_1.__decorate([
        Component({
            selector: 'app-parentcomp',
            templateUrl: './parentcomp.component.html',
            styleUrls: ['./parentcomp.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ParentcompComponent);
    return ParentcompComponent;
}());
export { ParentcompComponent };
//# sourceMappingURL=parentcomp.component.js.map