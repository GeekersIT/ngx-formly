import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@ngx-formly/core';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import * as i1 from 'ng-zorro-antd/form';
import { NzFormModule } from 'ng-zorro-antd/form';
import * as i3 from 'ng-zorro-antd/grid';

class FormlyWrapperFormField extends FieldWrapper {
    get errorState() {
        return this.showError ? 'error' : '';
    }
}
FormlyWrapperFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyWrapperFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyWrapperFormField, selector: "formly-wrapper-nz-form-field", usesInheritance: true, ngImport: i0, template: `
    <nz-form-item>
      <ng-container *ngIf="props.label && props.hideLabel !== true">
        <nz-form-label [nzRequired]="props.required && props.hideRequiredMarker !== true" [nzFor]="id">
          {{ props.label }}
        </nz-form-label>
      </ng-container>
      <nz-form-control [nzValidateStatus]="errorState" [nzErrorTip]="errorTpl" [nzExtra]="props.description">
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTpl let-control>
          <formly-validation-message [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `, isInline: true, components: [{ type: i1.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { type: i1.NzFormLabelComponent, selector: "nz-form-label", inputs: ["nzFor", "nzRequired", "nzNoColon", "nzTooltipTitle", "nzTooltipIcon"], exportAs: ["nzFormLabel"] }, { type: i1.NzFormControlComponent, selector: "nz-form-control", inputs: ["nzSuccessTip", "nzWarningTip", "nzErrorTip", "nzValidatingTip", "nzExtra", "nzAutoTips", "nzDisableAutoTips", "nzHasFeedback", "nzValidateStatus"], exportAs: ["nzFormControl"] }, { type: i2.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i3.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-wrapper-nz-form-field',
                    template: `
    <nz-form-item>
      <ng-container *ngIf="props.label && props.hideLabel !== true">
        <nz-form-label [nzRequired]="props.required && props.hideRequiredMarker !== true" [nzFor]="id">
          {{ props.label }}
        </nz-form-label>
      </ng-container>
      <nz-form-control [nzValidateStatus]="errorState" [nzErrorTip]="errorTpl" [nzExtra]="props.description">
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTpl let-control>
          <formly-validation-message [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
                }]
        }] });

class FormlyNzFormFieldModule {
}
FormlyNzFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNzFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzFormFieldModule, declarations: [FormlyWrapperFormField], imports: [CommonModule,
        ReactiveFormsModule,
        NzFormModule, i2.FormlyModule] });
FormlyNzFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzFormFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzFormModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperFormField],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzFormModule,
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

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyNzFormFieldModule };
//# sourceMappingURL=ngx-formly-ng-zorro-antd-form-field.mjs.map
