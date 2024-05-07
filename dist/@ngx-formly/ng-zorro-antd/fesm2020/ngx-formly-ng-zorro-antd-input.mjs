import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i4 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import * as i3 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i1 from 'ng-zorro-antd/input-number';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

class FormlyFieldInput extends FieldType {
}
FormlyFieldInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldInput, selector: "formly-field-nz-input", usesInheritance: true, ngImport: i0, template: `
    <input
      *ngIf="props.type !== 'number'; else numberTmp"
      nz-input
      [formControl]="formControl"
      [type]="props.type || 'text'"
      [formlyAttributes]="field"
    />
    <ng-template #numberTmp>
      <nz-input-number [formControl]="formControl" [formlyAttributes]="field"></nz-input-number>
    </ng-template>
  `, isInline: true, components: [{ type: i1.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-nz-input',
                    template: `
    <input
      *ngIf="props.type !== 'number'; else numberTmp"
      nz-input
      [formControl]="formControl"
      [type]="props.type || 'text'"
      [formlyAttributes]="field"
    />
    <ng-template #numberTmp>
      <nz-input-number [formControl]="formControl" [formlyAttributes]="field"></nz-input-number>
    </ng-template>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyNzInputModule {
}
FormlyNzInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNzInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzInputModule, declarations: [FormlyFieldInput], imports: [CommonModule,
        ReactiveFormsModule,
        NzInputModule,
        NzInputNumberModule,
        FormlyNzFormFieldModule, i5.FormlyModule] });
FormlyNzInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzInputModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzInputModule,
            NzInputNumberModule,
            FormlyNzFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldInput],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzInputModule,
                        NzInputNumberModule,
                        FormlyNzFormFieldModule,
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

export { FormlyFieldInput, FormlyNzInputModule };
//# sourceMappingURL=ngx-formly-ng-zorro-antd-input.mjs.map
