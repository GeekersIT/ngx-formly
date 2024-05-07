import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i3 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import * as i1 from '@progress/kendo-angular-inputs';
import { InputsModule } from '@progress/kendo-angular-inputs';

class FormlyFieldTextArea extends FieldType {
}
FormlyFieldTextArea.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldTextArea.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldTextArea, selector: "formly-field-kendo-textarea", usesInheritance: true, ngImport: i0, template: ` <textarea kendoTextArea [formControl]="formControl" [formlyAttributes]="field"></textarea> `, isInline: true, directives: [{ type: i1.TextAreaDirective, selector: "textarea[kendoTextArea]", inputs: ["autoSize", "value"], outputs: ["valueChange"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-kendo-textarea',
                    template: ` <textarea kendoTextArea [formControl]="formControl" [formlyAttributes]="field"></textarea> `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyTextAreaModule {
}
FormlyTextAreaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyTextAreaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyTextAreaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyTextAreaModule, declarations: [FormlyFieldTextArea], imports: [CommonModule,
        InputsModule,
        ReactiveFormsModule,
        FormlyFormFieldModule, i3.FormlyModule] });
FormlyTextAreaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyTextAreaModule, imports: [[
            CommonModule,
            InputsModule,
            ReactiveFormsModule,
            FormlyFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyTextAreaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldTextArea],
                    imports: [
                        CommonModule,
                        InputsModule,
                        ReactiveFormsModule,
                        FormlyFormFieldModule,
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

export { FormlyFieldTextArea, FormlyTextAreaModule };
//# sourceMappingURL=ngx-formly-kendo-textarea.mjs.map
