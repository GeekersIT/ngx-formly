import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i4 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import * as i1 from '@angular/material/input';
import { MAT_INPUT_VALUE_ACCESSOR, MatInputModule } from '@angular/material/input';
import * as i3 from '@angular/cdk/text-field';

class FormlyFieldTextArea extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            props: {
                cols: 1,
                rows: 1,
            },
        };
    }
}
FormlyFieldTextArea.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldTextArea.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldTextArea, selector: "formly-field-mat-textarea", providers: [
        // fix for https://github.com/ngx-formly/ngx-formly/issues/1688
        // rely on formControl value instead of elementRef which return empty value in Firefox.
        { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: FormlyFieldTextArea },
    ], usesInheritance: true, ngImport: i0, template: `
    <textarea
      matInput
      [id]="id"
      [name]="field.name"
      [readonly]="props.readonly"
      [required]="required"
      [formControl]="formControl"
      [errorStateMatcher]="errorStateMatcher"
      [cols]="props.cols"
      [rows]="props.rows"
      [formlyAttributes]="field"
      [placeholder]="props.placeholder"
      [tabindex]="props.tabindex"
      [cdkTextareaAutosize]="props.autosize"
      [cdkAutosizeMinRows]="props.autosizeMinRows"
      [cdkAutosizeMaxRows]="props.autosizeMaxRows"
      [class.cdk-textarea-autosize]="props.autosize"
    ></textarea>
  `, isInline: true, directives: [{ type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.CdkTextareaAutosize, selector: "textarea[cdkTextareaAutosize]", inputs: ["cdkAutosizeMinRows", "cdkAutosizeMaxRows", "cdkTextareaAutosize", "placeholder"], exportAs: ["cdkTextareaAutosize"] }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-mat-textarea',
                    template: `
    <textarea
      matInput
      [id]="id"
      [name]="field.name"
      [readonly]="props.readonly"
      [required]="required"
      [formControl]="formControl"
      [errorStateMatcher]="errorStateMatcher"
      [cols]="props.cols"
      [rows]="props.rows"
      [formlyAttributes]="field"
      [placeholder]="props.placeholder"
      [tabindex]="props.tabindex"
      [cdkTextareaAutosize]="props.autosize"
      [cdkAutosizeMinRows]="props.autosizeMinRows"
      [cdkAutosizeMaxRows]="props.autosizeMaxRows"
      [class.cdk-textarea-autosize]="props.autosize"
    ></textarea>
  `,
                    providers: [
                        // fix for https://github.com/ngx-formly/ngx-formly/issues/1688
                        // rely on formControl value instead of elementRef which return empty value in Firefox.
                        { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: FormlyFieldTextArea },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyMatTextAreaModule {
}
FormlyMatTextAreaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatTextAreaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatTextAreaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatTextAreaModule, declarations: [FormlyFieldTextArea], imports: [CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        FormlyMatFormFieldModule, i4.FormlyModule] });
FormlyMatTextAreaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatTextAreaModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            FormlyMatFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'textarea',
                        component: FormlyFieldTextArea,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatTextAreaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldTextArea],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        FormlyMatFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'textarea',
                                    component: FormlyFieldTextArea,
                                    wrappers: ['form-field'],
                                },
                            ],
                        }),
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldTextArea, FormlyMatTextAreaModule };
//# sourceMappingURL=ngx-formly-material-textarea.mjs.map
