import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/checkbox";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-formly/core";
export class FormlyFieldCheckbox extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            props: {
                indeterminate: true,
                hideLabel: true,
            },
        };
    }
}
FormlyFieldCheckbox.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldCheckbox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldCheckbox, selector: "formly-field-nz-checkbox", usesInheritance: true, ngImport: i0, template: `
    <label
      nz-checkbox
      [nzIndeterminate]="props.indeterminate && formControl.value == null"
      [formControl]="formControl"
      [formlyAttributes]="field"
      (ngModelChange)="props.change && props.change(field, $event)"
    >
      {{ props.label }}
    </label>
  `, isInline: true, components: [{ type: i1.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-nz-checkbox',
                    template: `
    <label
      nz-checkbox
      [nzIndeterminate]="props.indeterminate && formControl.value == null"
      [formControl]="formControl"
      [formlyAttributes]="field"
      (ngModelChange)="props.change && props.change(field, $event)"
    >
      {{ props.label }}
    </label>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9uZy16b3Jyby1hbnRkL2NoZWNrYm94L3NyYy9jaGVja2JveC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBc0MsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUEwQmpGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxTQUF5QztJQWZsRjs7UUFnQlcsbUJBQWMsR0FBRztZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1NBQ0YsQ0FBQztLQUNIOztpSEFQWSxtQkFBbUI7cUdBQW5CLG1CQUFtQix1RkFicEI7Ozs7Ozs7Ozs7R0FVVDs0RkFHVSxtQkFBbUI7a0JBZi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZFR5cGVDb25maWcsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFByb3BzIH0gZnJvbSAnQG5neC1mb3JtbHkvbmctem9ycm8tYW50ZC9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIENoZWNrYm94UHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHtcbiAgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5Q2hlY2tib3hGaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPENoZWNrYm94UHJvcHM+IHtcbiAgdHlwZTogJ2NoZWNrYm94JyB8IFR5cGU8Rm9ybWx5RmllbGRDaGVja2JveD47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1uei1jaGVja2JveCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsXG4gICAgICBuei1jaGVja2JveFxuICAgICAgW256SW5kZXRlcm1pbmF0ZV09XCJwcm9wcy5pbmRldGVybWluYXRlICYmIGZvcm1Db250cm9sLnZhbHVlID09IG51bGxcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInByb3BzLmNoYW5nZSAmJiBwcm9wcy5jaGFuZ2UoZmllbGQsICRldmVudClcIlxuICAgID5cbiAgICAgIHt7IHByb3BzLmxhYmVsIH19XG4gICAgPC9sYWJlbD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkQ2hlY2tib3ggZXh0ZW5kcyBGaWVsZFR5cGU8RmllbGRUeXBlQ29uZmlnPENoZWNrYm94UHJvcHM+PiB7XG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgaGlkZUxhYmVsOiB0cnVlLFxuICAgIH0sXG4gIH07XG59XG4iXX0=