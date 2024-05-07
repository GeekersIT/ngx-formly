import * as i0 from '@angular/core';
import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from '@ngx-formly/core';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from '@nativescript/angular';

class FormlyWrapperFormField extends FieldWrapper {
}
FormlyWrapperFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyWrapperFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyWrapperFormField, selector: "formly-wrapper-ns-form-field", usesInheritance: true, ngImport: i0, template: `
    <StackLayout class="form">
      <StackLayout class="input-field">
        <Label *ngIf="props.label && props.hideLabel !== true" class="label" [text]="props.label"></Label>
        <ng-container #fieldComponent></ng-container>
        <StackLayout class="hr-light"></StackLayout>
        <ng-container *ngIf="showError">
          <formly-validation-message #validationMessage [field]="field"></formly-validation-message>
          <Label class="text-danger" [text]="validationMessage.errorMessage"></Label>
        </ng-container>
      </StackLayout>
    </StackLayout>
  `, isInline: true, components: [{ type: i1.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-wrapper-ns-form-field',
                    template: `
    <StackLayout class="form">
      <StackLayout class="input-field">
        <Label *ngIf="props.label && props.hideLabel !== true" class="label" [text]="props.label"></Label>
        <ng-container #fieldComponent></ng-container>
        <StackLayout class="hr-light"></StackLayout>
        <ng-container *ngIf="showError">
          <formly-validation-message #validationMessage [field]="field"></formly-validation-message>
          <Label class="text-danger" [text]="validationMessage.errorMessage"></Label>
        </ng-container>
      </StackLayout>
    </StackLayout>
  `,
                }]
        }] });

class FormlyNsFormFieldModule {
}
FormlyNsFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNsFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsFormFieldModule, declarations: [FormlyWrapperFormField], imports: [CommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule, i1.FormlyModule] });
FormlyNsFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsFormFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperFormField],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NativeScriptFormsModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'form-field',
                                    component: FormlyWrapperFormField,
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

export { FormlyNsFormFieldModule };
//# sourceMappingURL=ngx-formly-nativescript-form-field.mjs.map
