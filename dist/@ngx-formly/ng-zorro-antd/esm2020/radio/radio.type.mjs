import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/radio";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@ngx-formly/core/select";
export class FormlyFieldRadio extends FieldType {
}
FormlyFieldRadio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldRadio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldRadio, selector: "formly-field-nz-radio", usesInheritance: true, ngImport: i0, template: `
    <nz-radio-group [formControl]="formControl" (ngModelChange)="props.change && props.change(field, $event)">
      <label
        nz-radio
        *ngFor="let option of props.options | formlySelectOptions : field | async"
        [nzValue]="option.value"
        [nzDisabled]="option.disabled"
      >
        {{ option.label }}
      </label>
    </nz-radio-group>
  `, isInline: true, components: [{ type: i1.NzRadioGroupComponent, selector: "nz-radio-group", inputs: ["nzDisabled", "nzButtonStyle", "nzSize", "nzName"], exportAs: ["nzRadioGroup"] }, { type: i1.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i3.AsyncPipe, "formlySelectOptions": i4.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-nz-radio',
                    template: `
    <nz-radio-group [formControl]="formControl" (ngModelChange)="props.change && props.change(field, $event)">
      <label
        nz-radio
        *ngFor="let option of props.options | formlySelectOptions : field | async"
        [nzValue]="option.value"
        [nzDisabled]="option.disabled"
      >
        {{ option.label }}
      </label>
    </nz-radio-group>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8udHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9uZy16b3Jyby1hbnRkL3JhZGlvL3NyYy9yYWRpby50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBc0MsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBeUJqRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBc0M7OzhHQUEvRCxnQkFBZ0I7a0dBQWhCLGdCQUFnQixvRkFkakI7Ozs7Ozs7Ozs7O0dBV1Q7NEZBR1UsZ0JBQWdCO2tCQWhCNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZFR5cGVDb25maWcsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFByb3BzIH0gZnJvbSAnQG5neC1mb3JtbHkvbmctem9ycm8tYW50ZC9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIFJhZGlvUHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5UmFkaW9GaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPFJhZGlvUHJvcHM+IHtcbiAgdHlwZTogJ3JhZGlvJyB8IFR5cGU8Rm9ybWx5RmllbGRSYWRpbz47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1uei1yYWRpbycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIChuZ01vZGVsQ2hhbmdlKT1cInByb3BzLmNoYW5nZSAmJiBwcm9wcy5jaGFuZ2UoZmllbGQsICRldmVudClcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBuei1yYWRpb1xuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHByb3BzLm9wdGlvbnMgfCBmb3JtbHlTZWxlY3RPcHRpb25zIDogZmllbGQgfCBhc3luY1wiXG4gICAgICAgIFtuelZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgIFtuekRpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiXG4gICAgICA+XG4gICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fVxuICAgICAgPC9sYWJlbD5cbiAgICA8L256LXJhZGlvLWdyb3VwPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRSYWRpbyBleHRlbmRzIEZpZWxkVHlwZTxGaWVsZFR5cGVDb25maWc8UmFkaW9Qcm9wcz4+IHt9XG4iXX0=