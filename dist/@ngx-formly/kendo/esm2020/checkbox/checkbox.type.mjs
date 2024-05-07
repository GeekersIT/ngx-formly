import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/kendo/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@progress/kendo-angular-inputs";
import * as i3 from "@ngx-formly/core";
import * as i4 from "@progress/kendo-angular-label";
import * as i5 from "@angular/common";
export class FormlyFieldCheckbox extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            props: {
                hideLabel: true,
            },
        };
    }
}
FormlyFieldCheckbox.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldCheckbox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldCheckbox, selector: "formly-field-kendo-checkbox", usesInheritance: true, ngImport: i0, template: `
    <input type="checkbox" kendoCheckBox [formControl]="formControl" [formlyAttributes]="field" />
    <label [for]="id" class="k-checkbox-label">
      {{ props.label }}
      <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true" class="k-required">*</span>
    </label>
  `, isInline: true, styles: [".k-form formly-field-kendo-checkbox .k-label{display:inherit}\n"], directives: [{ type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { type: i2.CheckBoxDirective, selector: "input[kendoCheckBox]", inputs: ["size", "rounded"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i4.LabelDirective, selector: "label[for]", inputs: ["for"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, decorators: [{
            type: Component,
            args: [{ selector: 'formly-field-kendo-checkbox', template: `
    <input type="checkbox" kendoCheckBox [formControl]="formControl" [formlyAttributes]="field" />
    <label [for]="id" class="k-checkbox-label">
      {{ props.label }}
      <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true" class="k-required">*</span>
    </label>
  `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".k-form formly-field-kendo-checkbox .k-label{display:inherit}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9rZW5kby9jaGVja2JveC9zcmMvY2hlY2tib3gudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRTVGLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFxQjNFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxTQUF5QztJQWJsRjs7UUFjVyxtQkFBYyxHQUFHO1lBQ3hCLEtBQUssRUFBRTtnQkFDTCxTQUFTLEVBQUUsSUFBSTthQUNoQjtTQUNGLENBQUM7S0FDSDs7aUhBTlksbUJBQW1CO3FHQUFuQixtQkFBbUIsMEZBWHBCOzs7Ozs7R0FNVDs0RkFLVSxtQkFBbUI7a0JBYi9CLFNBQVM7K0JBQ0UsNkJBQTZCLFlBQzdCOzs7Ozs7R0FNVCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGVDb25maWcsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUsIEZvcm1seUZpZWxkUHJvcHMgfSBmcm9tICdAbmd4LWZvcm1seS9rZW5kby9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIENoZWNrYm94UHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5Q2hlY2tib3hGaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPENoZWNrYm94UHJvcHM+IHtcbiAgdHlwZTogJ2NoZWNrYm94JyB8IFR5cGU8Rm9ybWx5RmllbGRDaGVja2JveD47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1rZW5kby1jaGVja2JveCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGtlbmRvQ2hlY2tCb3ggW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCIgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIiAvPlxuICAgIDxsYWJlbCBbZm9yXT1cImlkXCIgY2xhc3M9XCJrLWNoZWNrYm94LWxhYmVsXCI+XG4gICAgICB7eyBwcm9wcy5sYWJlbCB9fVxuICAgICAgPHNwYW4gKm5nSWY9XCJwcm9wcy5yZXF1aXJlZCAmJiBwcm9wcy5oaWRlUmVxdWlyZWRNYXJrZXIgIT09IHRydWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImstcmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC50eXBlLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRDaGVja2JveCBleHRlbmRzIEZpZWxkVHlwZTxGaWVsZFR5cGVDb25maWc8Q2hlY2tib3hQcm9wcz4+IHtcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGhpZGVMYWJlbDogdHJ1ZSxcbiAgICB9LFxuICB9O1xufVxuIl19