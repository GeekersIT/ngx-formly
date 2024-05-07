import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/kendo/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-inputs";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@ngx-formly/core";
export class FormlyFieldInput extends FieldType {
}
FormlyFieldInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldInput, selector: "formly-field-kendo-input", usesInheritance: true, ngImport: i0, template: `
    <input
      *ngIf="props.type !== 'number'; else numberTmp"
      kendoTextBox
      [type]="props.type || 'text'"
      [formlyAttributes]="field"
      [formControl]="formControl"
    />
    <ng-template #numberTmp>
      <kendo-numerictextbox [formlyAttributes]="field" [formControl]="formControl"> </kendo-numerictextbox>
    </ng-template>
  `, isInline: true, components: [{ type: i1.NumericTextBoxComponent, selector: "kendo-numerictextbox", inputs: ["focusableId", "disabled", "readonly", "title", "autoCorrect", "format", "max", "min", "decimals", "placeholder", "step", "spinners", "rangeValidation", "tabindex", "tabIndex", "changeValueOnScroll", "selectOnFocus", "value", "maxlength", "size", "rounded", "fillMode"], outputs: ["valueChange", "focus", "blur"], exportAs: ["kendoNumericTextBox"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.TextBoxDirective, selector: "input[kendoTextBox]", inputs: ["value"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-kendo-input',
                    template: `
    <input
      *ngIf="props.type !== 'number'; else numberTmp"
      kendoTextBox
      [type]="props.type || 'text'"
      [formlyAttributes]="field"
      [formControl]="formControl"
    />
    <ng-template #numberTmp>
      <kendo-numerictextbox [formlyAttributes]="field" [formControl]="formControl"> </kendo-numerictextbox>
    </ng-template>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9rZW5kby9pbnB1dC9zcmMvaW5wdXQudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sOEJBQThCLENBQUM7Ozs7OztBQXdCM0UsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQXNDOzs4R0FBL0QsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsdUZBZGpCOzs7Ozs7Ozs7OztHQVdUOzRGQUdVLGdCQUFnQjtrQkFoQjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZUNvbmZpZywgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSwgRm9ybWx5RmllbGRQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2tlbmRvL2Zvcm0tZmllbGQnO1xuXG5pbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIEZvcm1seUZpZWxkUHJvcHMge31cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtbHlJbnB1dEZpZWxkQ29uZmlnIGV4dGVuZHMgRm9ybWx5RmllbGRDb25maWc8SW5wdXRQcm9wcz4ge1xuICB0eXBlOiAnaW5wdXQnIHwgVHlwZTxGb3JtbHlGaWVsZElucHV0Pjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLWtlbmRvLWlucHV0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXRcbiAgICAgICpuZ0lmPVwicHJvcHMudHlwZSAhPT0gJ251bWJlcic7IGVsc2UgbnVtYmVyVG1wXCJcbiAgICAgIGtlbmRvVGV4dEJveFxuICAgICAgW3R5cGVdPVwicHJvcHMudHlwZSB8fCAndGV4dCdcIlxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAvPlxuICAgIDxuZy10ZW1wbGF0ZSAjbnVtYmVyVG1wPlxuICAgICAgPGtlbmRvLW51bWVyaWN0ZXh0Ym94IFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCIgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCI+IDwva2VuZG8tbnVtZXJpY3RleHRib3g+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkSW5wdXQgZXh0ZW5kcyBGaWVsZFR5cGU8RmllbGRUeXBlQ29uZmlnPElucHV0UHJvcHM+PiB7fVxuIl19