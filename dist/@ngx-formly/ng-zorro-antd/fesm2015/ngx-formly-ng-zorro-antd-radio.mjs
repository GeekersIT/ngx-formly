import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i4 from '@ngx-formly/core/select';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import * as i1 from 'ng-zorro-antd/radio';
import { NzRadioModule } from 'ng-zorro-antd/radio';

class FormlyFieldRadio extends FieldType {
}
FormlyFieldRadio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldRadio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldRadio, selector: "formly-field-nz-radio", usesInheritance: true, ngImport: i0, template: `
    <nz-radio-group [formControl]="formControl" (ngModelChange)="props.change && props.change(field, $event)">
      <label
        nz-radio
        *ngFor="let option of props.options | formlySelectOptions : field | async"
        [nzValue]="option.value"
        [nzDisabled]="option.disabled"
      >
        {{ option.label }}
      </label>
    </nz-radio-group>
  `, isInline: true, components: [{ type: i1.NzRadioGroupComponent, selector: "nz-radio-group", inputs: ["nzDisabled", "nzButtonStyle", "nzSize", "nzName"], exportAs: ["nzRadioGroup"] }, { type: i1.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i3.AsyncPipe, "formlySelectOptions": i4.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-nz-radio',
                    template: `
    <nz-radio-group [formControl]="formControl" (ngModelChange)="props.change && props.change(field, $event)">
      <label
        nz-radio
        *ngFor="let option of props.options | formlySelectOptions : field | async"
        [nzValue]="option.value"
        [nzDisabled]="option.disabled"
      >
        {{ option.label }}
      </label>
    </nz-radio-group>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyNzRadioModule {
}
FormlyNzRadioModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNzRadioModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzRadioModule, declarations: [FormlyFieldRadio], imports: [CommonModule,
        ReactiveFormsModule,
        NzRadioModule,
        FormlyNzFormFieldModule,
        FormlySelectModule, i1$1.FormlyModule] });
FormlyNzRadioModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzRadioModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzRadioModule,
            FormlyNzFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'radio',
                        component: FormlyFieldRadio,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldRadio],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzRadioModule,
                        FormlyNzFormFieldModule,
                        FormlySelectModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'radio',
                                    component: FormlyFieldRadio,
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

export { FormlyFieldRadio, FormlyNzRadioModule };
//# sourceMappingURL=ngx-formly-ng-zorro-antd-radio.mjs.map
