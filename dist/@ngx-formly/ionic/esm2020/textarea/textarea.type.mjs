import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-formly/ionic/form-field";
export class FormlyFieldTextArea extends FieldType {
}
FormlyFieldTextArea.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldTextArea.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldTextArea, selector: "formly-field-ion-textarea", usesInheritance: true, ngImport: i0, template: `
    <ion-textarea
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
      [cols]="props.cols"
      [rows]="props.rows"
      [label]="props.label"
    >
    </ion-textarea>
  `, isInline: true, styles: [":host{display:inherit}\n"], components: [{ type: i1.IonTextarea, selector: "ion-textarea", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }], directives: [{ type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-textarea',
                    template: `
    <ion-textarea
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
      [cols]="props.cols"
      [rows]="props.rows"
      [label]="props.label"
    >
    </ion-textarea>
  `,
                    styles: [':host { display: inherit; }'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9pb25pYy90ZXh0YXJlYS9zcmMvdGV4dGFyZWEudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBd0JqRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBeUM7O2lIQUFyRSxtQkFBbUI7cUdBQW5CLG1CQUFtQix3RkFicEI7Ozs7Ozs7OztHQVNUOzRGQUlVLG1CQUFtQjtrQkFmL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO29CQUNELE1BQU0sRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUsIEZpZWxkVHlwZUNvbmZpZywgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZvcm1seUZpZWxkUHJvcHMgfSBmcm9tICdAbmd4LWZvcm1seS9pb25pYy9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIFRleHRBcmVhUHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5VGV4dEFyZWFGaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPFRleHRBcmVhUHJvcHM+IHtcbiAgdHlwZTogJ3RleHRhcmVhJyB8IFR5cGU8Rm9ybWx5RmllbGRUZXh0QXJlYT47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1pb24tdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpb24tdGV4dGFyZWFcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICBbaW9uRm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbY29sc109XCJwcm9wcy5jb2xzXCJcbiAgICAgIFtyb3dzXT1cInByb3BzLnJvd3NcIlxuICAgICAgW2xhYmVsXT1cInByb3BzLmxhYmVsXCJcbiAgICA+XG4gICAgPC9pb24tdGV4dGFyZWE+XG4gIGAsXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGluaGVyaXQ7IH0nXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkVGV4dEFyZWEgZXh0ZW5kcyBGaWVsZFR5cGU8RmllbGRUeXBlQ29uZmlnPFRleHRBcmVhUHJvcHM+PiB7fVxuIl19