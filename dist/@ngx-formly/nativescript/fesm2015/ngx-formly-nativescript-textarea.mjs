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

class FormlyFieldTextArea extends FieldType {
}
FormlyFieldTextArea.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldTextArea.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldTextArea, selector: "formly-field-ns-textarea", usesInheritance: true, ngImport: i0, template: `
    <TextView
      class="input"
      [formlyAttributes]="field"
      [formControl]="formControl"
      [hint]="props.hint"
      [autocorrect]="props.autocorrect"
      [keyboardType]="props.keyboardType"
    >
    </TextView>
  `, isInline: true, directives: [{ type: i1.TextValueAccessor, selector: "TextField[ngModel],TextField[formControlName],TextField[formControl],textField[ngModel],textField[formControlName],textField[formControl],textfield[ngModel],textfield[formControlName],textfield[formControl],text-field[ngModel],text-field[formControlName],text-field[formControl],TextView[ngModel],TextView[formControlName],TextView[formControl],textView[ngModel],textView[formControlName],textView[formControl],textview[ngModel],textview[formControlName],textview[formControl],text-view[ngModel],text-view[formControlName],text-view[formControl],SearchBar[ngModel],SearchBar[formControlName],SearchBar[formControl],searchBar[ngModel],searchBar[formControlName],searchBar[formControl],searchbar[ngModel],searchbar[formControlName],searchbar[formControl],search-bar[ngModel], search-bar[formControlName],search-bar[formControl]" }, { type: i2.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ns-textarea',
                    template: `
    <TextView
      class="input"
      [formlyAttributes]="field"
      [formControl]="formControl"
      [hint]="props.hint"
      [autocorrect]="props.autocorrect"
      [keyboardType]="props.keyboardType"
    >
    </TextView>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyNsTextAreaFieldModule {
}
FormlyNsTextAreaFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextAreaFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNsTextAreaFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextAreaFieldModule, declarations: [FormlyFieldTextArea], imports: [CommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        FormlyNsFormFieldModule, i2.FormlyModule] });
FormlyNsTextAreaFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextAreaFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            FormlyNsFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextAreaFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldTextArea],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NativeScriptFormsModule,
                        FormlyNsFormFieldModule,
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
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

/** @deprecated use FormlyFieldDatePicker */
const FormlyNsTextareaFieldModule = FormlyNsTextAreaFieldModule;

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyNsTextAreaFieldModule, FormlyNsTextareaFieldModule };
//# sourceMappingURL=ngx-formly-nativescript-textarea.mjs.map
