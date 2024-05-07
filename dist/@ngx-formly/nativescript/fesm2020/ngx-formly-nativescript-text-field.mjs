import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i2 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i3 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@nativescript/angular';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { FormlyNsFormFieldModule } from '@ngx-formly/nativescript/form-field';

class FormlyFieldInput extends FieldType {
}
FormlyFieldInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldInput, selector: "formly-field-ns-input", usesInheritance: true, ngImport: i0, template: `
    <TextField
      class="input"
      [formlyAttributes]="field"
      [formControl]="formControl"
      [autocorrect]="props.autocorrect"
      [secure]="props.secure"
      [hint]="props.hint"
      [keyboardType]="props.keyboardType"
    >
    </TextField>
  `, isInline: true, directives: [{ type: i1.TextValueAccessor, selector: "TextField[ngModel],TextField[formControlName],TextField[formControl],textField[ngModel],textField[formControlName],textField[formControl],textfield[ngModel],textfield[formControlName],textfield[formControl],text-field[ngModel],text-field[formControlName],text-field[formControl],TextView[ngModel],TextView[formControlName],TextView[formControl],textView[ngModel],textView[formControlName],textView[formControl],textview[ngModel],textview[formControlName],textview[formControl],text-view[ngModel],text-view[formControlName],text-view[formControl],SearchBar[ngModel],SearchBar[formControlName],SearchBar[formControl],searchBar[ngModel],searchBar[formControlName],searchBar[formControl],searchbar[ngModel],searchbar[formControlName],searchbar[formControl],search-bar[ngModel], search-bar[formControlName],search-bar[formControl]" }, { type: i2.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ns-input',
                    template: `
    <TextField
      class="input"
      [formlyAttributes]="field"
      [formControl]="formControl"
      [autocorrect]="props.autocorrect"
      [secure]="props.secure"
      [hint]="props.hint"
      [keyboardType]="props.keyboardType"
    >
    </TextField>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyNsTextFieldModule {
}
FormlyNsTextFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNsTextFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextFieldModule, declarations: [FormlyFieldInput], imports: [CommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        FormlyNsFormFieldModule, i2.FormlyModule] });
FormlyNsTextFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            FormlyNsFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'text-field',
                        component: FormlyFieldInput,
                        wrappers: ['form-field'],
                    },
                    { name: 'input', extends: 'text-field' },
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldInput],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NativeScriptFormsModule,
                        FormlyNsFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'text-field',
                                    component: FormlyFieldInput,
                                    wrappers: ['form-field'],
                                },
                                { name: 'input', extends: 'text-field' },
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
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyNsTextFieldModule };
//# sourceMappingURL=ngx-formly-nativescript-text-field.mjs.map
