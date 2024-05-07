import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-formly/ionic/form-field";
export class FormlyFieldToggle extends FieldType {
}
FormlyFieldToggle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldToggle, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldToggle.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldToggle, selector: "formly-field-ion-toggle", usesInheritance: true, ngImport: i0, template: `
    <ion-toggle [formControl]="formControl" [ionFormlyAttributes]="field">
      {{ props.label }}
    </ion-toggle>
  `, isInline: true, components: [{ type: i1.IonToggle, selector: "ion-toggle", inputs: ["checked", "color", "disabled", "enableOnOffLabels", "mode", "name", "value"] }], directives: [{ type: i1.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldToggle, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-toggle',
                    template: `
    <ion-toggle [formControl]="formControl" [ionFormlyAttributes]="field">
      {{ props.label }}
    </ion-toggle>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvaW9uaWMvdG9nZ2xlL3NyYy90b2dnbGUudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBa0JqRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsU0FBdUM7OytHQUFqRSxpQkFBaUI7bUdBQWpCLGlCQUFpQixzRkFQbEI7Ozs7R0FJVDs0RkFHVSxpQkFBaUI7a0JBVDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZFR5cGVDb25maWcsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFByb3BzIH0gZnJvbSAnQG5neC1mb3JtbHkvaW9uaWMvZm9ybS1maWVsZCc7XG5cbmludGVyZmFjZSBUb2dnbGVQcm9wcyBleHRlbmRzIEZvcm1seUZpZWxkUHJvcHMge31cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtbHlUb2dnbGVGaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPFRvZ2dsZVByb3BzPiB7XG4gIHR5cGU6ICd0b2dnbGUnIHwgVHlwZTxGb3JtbHlGaWVsZFRvZ2dsZT47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1pb24tdG9nZ2xlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLXRvZ2dsZSBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIiBbaW9uRm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiPlxuICAgICAge3sgcHJvcHMubGFiZWwgfX1cbiAgICA8L2lvbi10b2dnbGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFRvZ2dsZSBleHRlbmRzIEZpZWxkVHlwZTxGaWVsZFR5cGVDb25maWc8VG9nZ2xlUHJvcHM+PiB7fVxuIl19