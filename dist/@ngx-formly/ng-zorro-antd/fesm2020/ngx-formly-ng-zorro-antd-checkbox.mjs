import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import * as i1 from 'ng-zorro-antd/checkbox';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

class FormlyFieldCheckbox extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            props: {
                indeterminate: true,
                hideLabel: true,
            },
        };
    }
}
FormlyFieldCheckbox.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldCheckbox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldCheckbox, selector: "formly-field-nz-checkbox", usesInheritance: true, ngImport: i0, template: `
    <label
      nz-checkbox
      [nzIndeterminate]="props.indeterminate && formControl.value == null"
      [formControl]="formControl"
      [formlyAttributes]="field"
      (ngModelChange)="props.change && props.change(field, $event)"
    >
      {{ props.label }}
    </label>
  `, isInline: true, components: [{ type: i1.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-nz-checkbox',
                    template: `
    <label
      nz-checkbox
      [nzIndeterminate]="props.indeterminate && formControl.value == null"
      [formControl]="formControl"
      [formlyAttributes]="field"
      (ngModelChange)="props.change && props.change(field, $event)"
    >
      {{ props.label }}
    </label>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyNzCheckboxModule {
}
FormlyNzCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNzCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzCheckboxModule, declarations: [FormlyFieldCheckbox], imports: [CommonModule,
        ReactiveFormsModule,
        NzCheckboxModule,
        FormlyNzFormFieldModule, i3.FormlyModule] });
FormlyNzCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzCheckboxModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzCheckboxModule,
            FormlyNzFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldCheckbox],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzCheckboxModule,
                        FormlyNzFormFieldModule,
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

export { FormlyFieldCheckbox, FormlyNzCheckboxModule };
//# sourceMappingURL=ngx-formly-ng-zorro-antd-checkbox.mjs.map
