import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, NgModule } from '@angular/core';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import * as i4 from '@progress/kendo-angular-label';
import { LabelModule } from '@progress/kendo-angular-label';
import * as i2 from '@progress/kendo-angular-inputs';
import { InputsModule } from '@progress/kendo-angular-inputs';

class FormlyFieldCheckbox extends FieldType {
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

class FormlyCheckboxModule {
}
FormlyCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, declarations: [FormlyFieldCheckbox], imports: [CommonModule,
        ReactiveFormsModule,
        InputsModule,
        LabelModule,
        FormlyFormFieldModule, i3.FormlyModule] });
FormlyCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            InputsModule,
            LabelModule,
            FormlyFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'checkbox',
                        component: FormlyFieldCheckbox,
                        wrappers: ['form-field'],
                    },
                    {
                        name: 'boolean',
                        extends: 'checkbox',
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldCheckbox],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        InputsModule,
                        LabelModule,
                        FormlyFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'checkbox',
                                    component: FormlyFieldCheckbox,
                                    wrappers: ['form-field'],
                                },
                                {
                                    name: 'boolean',
                                    extends: 'checkbox',
                                },
                            ],
                        }),
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyCheckboxModule, FormlyFieldCheckbox };
//# sourceMappingURL=ngx-formly-kendo-checkbox.mjs.map
