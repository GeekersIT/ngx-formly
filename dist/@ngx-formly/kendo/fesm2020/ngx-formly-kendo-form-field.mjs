import * as i0 from '@angular/core';
import { Component, ViewChild, NgModule, Directive, ViewChildren } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@ngx-formly/core';
import { FieldWrapper, ɵdefineHiddenProp, FormlyModule, FieldType as FieldType$1 } from '@ngx-formly/core';
import { ReactiveFormsModule, NgControl } from '@angular/forms';
import * as i1 from '@progress/kendo-angular-inputs';
import { FormFieldComponent, FormFieldModule } from '@progress/kendo-angular-inputs';
import * as i4 from '@progress/kendo-angular-label';
import { LabelModule } from '@progress/kendo-angular-label';

class FormlyWrapperFormField extends FieldWrapper {
    ngOnInit() {
        ɵdefineHiddenProp(this.field, '_formField', this.formfield);
        ɵdefineHiddenProp(this.formfield, 'formControls', undefined);
        this.formfield['showErrorsInitial'] = () => this.showError;
        this.formfield['showHintsInitial'] = () => !this.showError;
        const disabledElement = this.formfield['disabledElement'].bind(this);
        this.formfield['disabledElement'] = () => {
            if (this.formfield.controlElementRefs.length === 0) {
                return false;
            }
            return disabledElement();
        };
    }
}
FormlyWrapperFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyWrapperFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyWrapperFormField, selector: "formly-wrapper-kendo-form-field", viewQueries: [{ propertyName: "formfield", first: true, predicate: FormFieldComponent, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <kendo-formfield [orientation]="props.orientation">
      <label *ngIf="props.label && props.hideLabel !== true" [for]="id">
        {{ props.label }}
        <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true" class="k-required">*</span>
      </label>

      <ng-container #fieldComponent></ng-container>

      <kendo-formhint *ngIf="props.description">{{ props.description }}</kendo-formhint>
      <kendo-formerror *ngIf="showError">
        <formly-validation-message [field]="field"></formly-validation-message>
      </kendo-formerror>
    </kendo-formfield>
  `, isInline: true, components: [{ type: i1.FormFieldComponent, selector: "kendo-formfield", inputs: ["showHints", "orientation", "showErrors"] }, { type: i1.HintComponent, selector: "kendo-formhint", inputs: ["align"] }, { type: i1.ErrorComponent, selector: "kendo-formerror", inputs: ["align"] }, { type: i2.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.LabelDirective, selector: "label[for]", inputs: ["for"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-wrapper-kendo-form-field',
                    template: `
    <kendo-formfield [orientation]="props.orientation">
      <label *ngIf="props.label && props.hideLabel !== true" [for]="id">
        {{ props.label }}
        <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true" class="k-required">*</span>
      </label>

      <ng-container #fieldComponent></ng-container>

      <kendo-formhint *ngIf="props.description">{{ props.description }}</kendo-formhint>
      <kendo-formerror *ngIf="showError">
        <formly-validation-message [field]="field"></formly-validation-message>
      </kendo-formerror>
    </kendo-formfield>
  `,
                }]
        }], propDecorators: { formfield: [{
                type: ViewChild,
                args: [FormFieldComponent, { static: true }]
            }] } });

class FormlyFormFieldModule {
}
FormlyFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, declarations: [FormlyWrapperFormField], imports: [CommonModule,
        ReactiveFormsModule,
        FormFieldModule,
        LabelModule, i2.FormlyModule] });
FormlyFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormFieldModule,
            LabelModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperFormField],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormFieldModule,
                        LabelModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'form-field',
                                    component: FormlyWrapperFormField,
                                },
                            ],
                        }),
                    ],
                }]
        }] });

class FieldType extends FieldType$1 {
    set formControls(formControls) {
        if (this.formField) {
            this.formField['control'] = formControls.first;
        }
    }
    get formField() {
        return this.field?.['_formField'];
    }
}
FieldType.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FieldType, deps: null, target: i0.ɵɵFactoryTarget.Directive });
FieldType.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.12", type: FieldType, viewQueries: [{ propertyName: "formControls", predicate: NgControl, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FieldType, decorators: [{
            type: Directive
        }], propDecorators: { formControls: [{
                type: ViewChildren,
                args: [NgControl]
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { FieldType, FormlyFormFieldModule };
//# sourceMappingURL=ngx-formly-kendo-form-field.mjs.map
