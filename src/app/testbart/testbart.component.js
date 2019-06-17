import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TestbartComponent = /** @class */ (function () {
    function TestbartComponent() {
        this.counter = 0;
    }
    TestbartComponent.prototype.ButtonClick = function () {
        this.counter++;
    };
    TestbartComponent.prototype.ngOnInit = function () {
    };
    TestbartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-testbart',
            templateUrl: './testbart.component.html',
            styleUrls: ['./testbart.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TestbartComponent);
    return TestbartComponent;
}());
export { TestbartComponent };
//# sourceMappingURL=testbart.component.js.map