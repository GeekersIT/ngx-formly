import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/input-number";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "@angular/forms";
import * as i5 from "@ngx-formly/core";
export class FormlyFieldInput extends FieldType {
}
FormlyFieldInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldInput, selector: "formly-field-nz-input", usesInheritance: true, ngImport: i0, template: `
    <input
      *ngIf="props.type !== 'number'; else numberTmp"
      nz-input
      [formControl]="formControl"
      [type]="props.type || 'text'"
      [formlyAttributes]="field"
    />
    <ng-template #numberTmp>
      <nz-input-number [formControl]="formControl" [formlyAttributes]="field"></nz-input-number>
    </ng-template>
  `, isInline: true, components: [{ type: i1.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-nz-input',
                    template: `
    <input
      *ngIf="props.type !== 'number'; else numberTmp"
      nz-input
      [formControl]="formControl"
      [type]="props.type || 'text'"
      [formlyAttributes]="field"
    />
    <ng-template #numberTmp>
      <nz-input-number [formControl]="formControl" [formlyAttributes]="field"></nz-input-number>
    </ng-template>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9uZy16b3Jyby1hbnRkL2lucHV0L3NyYy9pbnB1dC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBc0MsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztBQXlCakYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQXNDOzs4R0FBL0QsZ0JBQWdCO2tHQUFoQixnQkFBZ0Isb0ZBZGpCOzs7Ozs7Ozs7OztHQVdUOzRGQUdVLGdCQUFnQjtrQkFoQjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSwgRmllbGRUeXBlQ29uZmlnLCBGb3JtbHlGaWVsZENvbmZpZyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L25nLXpvcnJvLWFudGQvZm9ybS1maWVsZCc7XG5cbmludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgRm9ybWx5RmllbGRQcm9wcyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seUlucHV0RmllbGRDb25maWcgZXh0ZW5kcyBGb3JtbHlGaWVsZENvbmZpZzxJbnB1dFByb3BzPiB7XG4gIHR5cGU6ICdpbnB1dCcgfCBUeXBlPEZvcm1seUZpZWxkSW5wdXQ+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbnotaW5wdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dFxuICAgICAgKm5nSWY9XCJwcm9wcy50eXBlICE9PSAnbnVtYmVyJzsgZWxzZSBudW1iZXJUbXBcIlxuICAgICAgbnotaW5wdXRcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICBbdHlwZV09XCJwcm9wcy50eXBlIHx8ICd0ZXh0J1wiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgLz5cbiAgICA8bmctdGVtcGxhdGUgI251bWJlclRtcD5cbiAgICAgIDxuei1pbnB1dC1udW1iZXIgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCIgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIj48L256LWlucHV0LW51bWJlcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRJbnB1dCBleHRlbmRzIEZpZWxkVHlwZTxGaWVsZFR5cGVDb25maWc8SW5wdXRQcm9wcz4+IHt9XG4iXX0=