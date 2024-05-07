import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@ngx-formly/ionic/form-field";
export class FormlyFieldInput extends FieldType {
}
FormlyFieldInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldInput, selector: "formly-field-ion-input", usesInheritance: true, ngImport: i0, template: `
    <ion-input
      *ngIf="props.type !== 'number'; else numberTmp"
      [type]="props.type || 'text'"
      [label]="props.label"
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
    ></ion-input>
    <ng-template #numberTmp>
      <ion-input type="number" [formControl]="formControl" [ionFormlyAttributes]="field"></ion-input>
    </ng-template>
  `, isInline: true, styles: [":host{display:inherit}\n"], components: [{ type: i1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }, { type: i1.NumericValueAccessor, selector: "ion-input[type=number]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-input',
                    template: `
    <ion-input
      *ngIf="props.type !== 'number'; else numberTmp"
      [type]="props.type || 'text'"
      [label]="props.label"
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
    ></ion-input>
    <ng-template #numberTmp>
      <ion-input type="number" [formControl]="formControl" [ionFormlyAttributes]="field"></ion-input>
    </ng-template>
  `,
                    styles: [':host { display: inherit; }'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9pb25pYy9pbnB1dC9zcmMvaW5wdXQudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQTBCakYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQXNDOzs4R0FBL0QsZ0JBQWdCO2tHQUFoQixnQkFBZ0IscUZBZmpCOzs7Ozs7Ozs7OztHQVdUOzRGQUlVLGdCQUFnQjtrQkFqQjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO29CQUNELE1BQU0sRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUsIEZpZWxkVHlwZUNvbmZpZywgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZvcm1seUZpZWxkUHJvcHMgfSBmcm9tICdAbmd4LWZvcm1seS9pb25pYy9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5SW5wdXRGaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPElucHV0UHJvcHM+IHtcbiAgdHlwZTogJ2lucHV0JyB8IFR5cGU8Rm9ybWx5RmllbGRJbnB1dD47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1pb24taW5wdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpb24taW5wdXRcbiAgICAgICpuZ0lmPVwicHJvcHMudHlwZSAhPT0gJ251bWJlcic7IGVsc2UgbnVtYmVyVG1wXCJcbiAgICAgIFt0eXBlXT1cInByb3BzLnR5cGUgfHwgJ3RleHQnXCJcbiAgICAgIFtsYWJlbF09XCJwcm9wcy5sYWJlbFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2lvbkZvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgID48L2lvbi1pbnB1dD5cbiAgICA8bmctdGVtcGxhdGUgI251bWJlclRtcD5cbiAgICAgIDxpb24taW5wdXQgdHlwZT1cIm51bWJlclwiIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIFtpb25Gb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCI+PC9pb24taW5wdXQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgc3R5bGVzOiBbJzpob3N0IHsgZGlzcGxheTogaW5oZXJpdDsgfSddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRJbnB1dCBleHRlbmRzIEZpZWxkVHlwZTxGaWVsZFR5cGVDb25maWc8SW5wdXRQcm9wcz4+IHt9XG4iXX0=