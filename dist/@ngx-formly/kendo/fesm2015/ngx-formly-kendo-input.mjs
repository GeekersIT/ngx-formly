import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import * as i3 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import * as i1 from '@progress/kendo-angular-inputs';
import { InputsModule } from '@progress/kendo-angular-inputs';

class FormlyFieldInput extends FieldType {
}
FormlyFieldInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldInput, selector: "formly-field-kendo-input", usesInheritance: true, ngImport: i0, template: `
    <input
      *ngIf="props.type !== 'number'; else numberTmp"
      kendoTextBox
      [type]="props.type || 'text'"
      [formlyAttributes]="field"
      [formControl]="formControl"
    />
    <ng-template #numberTmp>
      <kendo-numerictextbox [formlyAttributes]="field" [formControl]="formControl"> </kendo-numerictextbox>
    </ng-template>
  `, isInline: true, components: [{ type: i1.NumericTextBoxComponent, selector: "kendo-numerictextbox", inputs: ["focusableId", "disabled", "readonly", "title", "autoCorrect", "format", "max", "min", "decimals", "placeholder", "step", "spinners", "rangeValidation", "tabindex", "tabIndex", "changeValueOnScroll", "selectOnFocus", "value", "maxlength", "size", "rounded", "fillMode"], outputs: ["valueChange", "focus", "blur"], exportAs: ["kendoNumericTextBox"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.TextBoxDirective, selector: "input[kendoTextBox]", inputs: ["value"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-kendo-input',
                    template: `
    <input
      *ngIf="props.type !== 'number'; else numberTmp"
      kendoTextBox
      [type]="props.type || 'text'"
      [formlyAttributes]="field"
      [formControl]="formControl"
    />
    <ng-template #numberTmp>
      <kendo-numerictextbox [formlyAttributes]="field" [formControl]="formControl"> </kendo-numerictextbox>
    </ng-template>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyInputModule {
}
FormlyInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, declarations: [FormlyFieldInput], imports: [CommonModule,
        ReactiveFormsModule,
        FormlyFormFieldModule,
        InputsModule, i4.FormlyModule] });
FormlyInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormlyFormFieldModule,
            InputsModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'input',
                        component: FormlyFieldInput,
                        wrappers: ['form-field'],
                    },
                    { name: 'string', extends: 'input' },
                    {
                        name: 'number',
                        extends: 'input',
                        defaultOptions: {
                            props: {
                                type: 'number',
                            },
                        },
                    },
                    {
                        name: 'integer',
                        extends: 'input',
                        defaultOptions: {
                            props: {
                                type: 'number',
                            },
                        },
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldInput],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormlyFormFieldModule,
                        InputsModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'input',
                                    component: FormlyFieldInput,
                                    wrappers: ['form-field'],
                                },
                                { name: 'string', extends: 'input' },
                                {
                                    name: 'number',
                                    extends: 'input',
                                    defaultOptions: {
                                        props: {
                                            type: 'number',
                                        },
                                    },
                                },
                                {
                                    name: 'integer',
                                    extends: 'input',
                                    defaultOptions: {
                                        props: {
                                            type: 'number',
                                        },
                                    },
                                },
                            ],
                        }),
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldInput, FormlyInputModule };
//# sourceMappingURL=ngx-formly-kendo-input.mjs.map
