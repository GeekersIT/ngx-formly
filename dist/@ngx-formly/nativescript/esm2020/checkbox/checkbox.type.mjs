import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@nativescript/angular";
import * as i2 from "@ngx-formly/core";
import * as i3 from "@angular/forms";
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
FormlyFieldCheckbox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldCheckbox, selector: "formly-field-ns-checkbox", usesInheritance: true, ngImport: i0, template: `
    <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
      <Label class="label" [text]="props.label"></Label>
      <Switch class="switch input" [formlyAttributes]="field" [formControl]="formControl" col="1"></Switch>
    </GridLayout>
  `, isInline: true, directives: [{ type: i1.CheckedValueAccessor, selector: "Switch[ngModel],Switch[formControlName],Switch[formControl],switch[ngModel],switch[formControlName],switch[formControl]" }, { type: i2.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ns-checkbox',
                    template: `
    <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
      <Label class="label" [text]="props.label"></Label>
      <Switch class="switch input" [formlyAttributes]="field" [formControl]="formControl" col="1"></Switch>
    </GridLayout>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9uYXRpdmVzY3JpcHQvY2hlY2tib3gvc3JjL2NoZWNrYm94LnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFzQyxNQUFNLGtCQUFrQixDQUFDOzs7OztBQW1CakYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQXlDO0lBVmxGOztRQVdXLG1CQUFjLEdBQUc7WUFDeEIsS0FBSyxFQUFFO2dCQUNMLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1NBQ0YsQ0FBQztLQUNIOztpSEFOWSxtQkFBbUI7cUdBQW5CLG1CQUFtQix1RkFScEI7Ozs7O0dBS1Q7NEZBR1UsbUJBQW1CO2tCQVYvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRTs7Ozs7R0FLVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUsIEZpZWxkVHlwZUNvbmZpZywgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZvcm1seUZpZWxkUHJvcHMgfSBmcm9tICdAbmd4LWZvcm1seS9uYXRpdmVzY3JpcHQvZm9ybS1maWVsZCc7XG5cbmludGVyZmFjZSBDaGVja2JveFByb3BzIGV4dGVuZHMgRm9ybWx5RmllbGRQcm9wcyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seUNoZWNrYm94RmllbGRDb25maWcgZXh0ZW5kcyBGb3JtbHlGaWVsZENvbmZpZzxDaGVja2JveFByb3BzPiB7XG4gIHR5cGU6ICdjaGVja2JveCcgfCBUeXBlPEZvcm1seUZpZWxkQ2hlY2tib3g+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbnMtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiaW5wdXQtZmllbGQgaW5wdXQtc2lkZXNcIiByb3dzPVwiYXV0bywgYXV0b1wiIGNvbHVtbnM9XCIqLCpcIj5cbiAgICAgIDxMYWJlbCBjbGFzcz1cImxhYmVsXCIgW3RleHRdPVwicHJvcHMubGFiZWxcIj48L0xhYmVsPlxuICAgICAgPFN3aXRjaCBjbGFzcz1cInN3aXRjaCBpbnB1dFwiIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCIgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCIgY29sPVwiMVwiPjwvU3dpdGNoPlxuICAgIDwvR3JpZExheW91dD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkQ2hlY2tib3ggZXh0ZW5kcyBGaWVsZFR5cGU8RmllbGRUeXBlQ29uZmlnPENoZWNrYm94UHJvcHM+PiB7XG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHByb3BzOiB7XG4gICAgICBoaWRlTGFiZWw6IHRydWUsXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==