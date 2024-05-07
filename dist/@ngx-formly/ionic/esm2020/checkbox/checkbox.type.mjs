import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-formly/ionic/form-field";
export class FormlyFieldCheckbox extends FieldType {
}
FormlyFieldCheckbox.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldCheckbox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldCheckbox, selector: "formly-field-ion-checkbox", usesInheritance: true, ngImport: i0, template: `
    <ion-checkbox [formControl]="formControl" [ionFormlyAttributes]="field">
      {{ props.label }}
    </ion-checkbox>
  `, isInline: true, components: [{ type: i1.IonCheckbox, selector: "ion-checkbox", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] }], directives: [{ type: i1.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-checkbox',
                    template: `
    <ion-checkbox [formControl]="formControl" [ionFormlyAttributes]="field">
      {{ props.label }}
    </ion-checkbox>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9pb25pYy9jaGVja2JveC9zcmMvY2hlY2tib3gudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBa0JqRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBeUM7O2lIQUFyRSxtQkFBbUI7cUdBQW5CLG1CQUFtQix3RkFQcEI7Ozs7R0FJVDs0RkFHVSxtQkFBbUI7a0JBVC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZFR5cGVDb25maWcsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFByb3BzIH0gZnJvbSAnQG5neC1mb3JtbHkvaW9uaWMvZm9ybS1maWVsZCc7XG5cbmludGVyZmFjZSBDaGVja2JveFByb3BzIGV4dGVuZHMgRm9ybWx5RmllbGRQcm9wcyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seUNoZWNrYm94RmllbGRDb25maWcgZXh0ZW5kcyBGb3JtbHlGaWVsZENvbmZpZzxDaGVja2JveFByb3BzPiB7XG4gIHR5cGU6ICdjaGVja2JveCcgfCBUeXBlPEZvcm1seUZpZWxkQ2hlY2tib3g+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtaW9uLWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLWNoZWNrYm94IFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIFtpb25Gb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCI+XG4gICAgICB7eyBwcm9wcy5sYWJlbCB9fVxuICAgIDwvaW9uLWNoZWNrYm94PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRDaGVja2JveCBleHRlbmRzIEZpZWxkVHlwZTxGaWVsZFR5cGVDb25maWc8Q2hlY2tib3hQcm9wcz4+IHt9XG4iXX0=