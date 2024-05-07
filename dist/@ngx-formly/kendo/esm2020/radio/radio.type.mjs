import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/kendo/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@progress/kendo-angular-inputs";
import * as i4 from "@ngx-formly/core";
import * as i5 from "@progress/kendo-angular-label";
import * as i6 from "@ngx-formly/core/select";
export class FormlyFieldRadio extends FieldType {
    get disabledControl() {
        return new FormControl({ value: this.formControl.value, disabled: true });
    }
}
FormlyFieldRadio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldRadio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldRadio, selector: "formly-field-kendo-radio", usesInheritance: true, ngImport: i0, template: `
    <ng-container *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index">
      <input
        type="radio"
        #radioInput
        kendoRadioButton
        [id]="id + '_' + i"
        [name]="field.name || id"
        [value]="option.value"
        [formControl]="option.disabled ? disabledControl : formControl"
        [formlyAttributes]="field"
      />
      <label class="k-radio-label" [for]="id + '_' + i">
        {{ option.label }}
      </label>
    </ng-container>
  `, isInline: true, styles: [".k-form formly-field-kendo-radio .k-label{display:inherit}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { type: i3.RadioButtonDirective, selector: "input[kendoRadioButton]", inputs: ["size"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i5.LabelDirective, selector: "label[for]", inputs: ["for"] }], pipes: { "async": i1.AsyncPipe, "formlySelectOptions": i6.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, decorators: [{
            type: Component,
            args: [{ selector: 'formly-field-kendo-radio', template: `
    <ng-container *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index">
      <input
        type="radio"
        #radioInput
        kendoRadioButton
        [id]="id + '_' + i"
        [name]="field.name || id"
        [value]="option.value"
        [formControl]="option.disabled ? disabledControl : formControl"
        [formlyAttributes]="field"
      />
      <label class="k-radio-label" [for]="id + '_' + i">
        {{ option.label }}
      </label>
    </ng-container>
  `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".k-form formly-field-kendo-radio .k-label{display:inherit}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8udHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9rZW5kby9yYWRpby9zcmMvcmFkaW8udHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0FBZ0N6RCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBc0M7SUFDMUUsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7OEdBSFUsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsdUZBckJqQjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVDs0RkFLVSxnQkFBZ0I7a0JBdkI1QixTQUFTOytCQUNFLDBCQUEwQixZQUMxQjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpZWxkVHlwZUNvbmZpZywgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2tlbmRvL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2tlbmRvL2Zvcm0tZmllbGQnO1xuXG5pbnRlcmZhY2UgUmFkaW9Qcm9wcyBleHRlbmRzIEZvcm1seUZpZWxkUHJvcHMge31cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtbHlSYWRpb0ZpZWxkQ29uZmlnIGV4dGVuZHMgRm9ybWx5RmllbGRDb25maWc8UmFkaW9Qcm9wcz4ge1xuICB0eXBlOiAncmFkaW8nIHwgVHlwZTxGb3JtbHlGaWVsZFJhZGlvPjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLWtlbmRvLXJhZGlvJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcHJvcHMub3B0aW9ucyB8IGZvcm1seVNlbGVjdE9wdGlvbnMgOiBmaWVsZCB8IGFzeW5jOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgI3JhZGlvSW5wdXRcbiAgICAgICAga2VuZG9SYWRpb0J1dHRvblxuICAgICAgICBbaWRdPVwiaWQgKyAnXycgKyBpXCJcbiAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZSB8fCBpZFwiXG4gICAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwib3B0aW9uLmRpc2FibGVkID8gZGlzYWJsZWRDb250cm9sIDogZm9ybUNvbnRyb2xcIlxuICAgICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiay1yYWRpby1sYWJlbFwiIFtmb3JdPVwiaWQgKyAnXycgKyBpXCI+XG4gICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fVxuICAgICAgPC9sYWJlbD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLnR5cGUuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFJhZGlvIGV4dGVuZHMgRmllbGRUeXBlPEZpZWxkVHlwZUNvbmZpZzxSYWRpb1Byb3BzPj4ge1xuICBnZXQgZGlzYWJsZWRDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogdGhpcy5mb3JtQ29udHJvbC52YWx1ZSwgZGlzYWJsZWQ6IHRydWUgfSk7XG4gIH1cbn1cbiJdfQ==