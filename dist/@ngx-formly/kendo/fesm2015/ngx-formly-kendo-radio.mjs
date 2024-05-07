import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import * as i2 from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import * as i6 from '@ngx-formly/core/select';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FieldType, FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import * as i5 from '@progress/kendo-angular-label';
import { LabelModule } from '@progress/kendo-angular-label';
import * as i3 from '@progress/kendo-angular-inputs';
import { InputsModule } from '@progress/kendo-angular-inputs';

class FormlyFieldRadio extends FieldType {
    get disabledControl() {
        return new FormControl({ value: this.formControl.value, disabled: true });
    }
}
FormlyFieldRadio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldRadio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldRadio, selector: "formly-field-kendo-radio", usesInheritance: true, ngImport: i0, template: `
    <ng-container *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index">
      <input
        type="radio"
        #radioInput
        kendoRadioButton
        [id]="id + '_' + i"
        [name]="field.name || id"
        [value]="option.value"
        [formControl]="option.disabled ? disabledControl : formControl"
        [formlyAttributes]="field"
      />
      <label class="k-radio-label" [for]="id + '_' + i">
        {{ option.label }}
      </label>
    </ng-container>
  `, isInline: true, styles: [".k-form formly-field-kendo-radio .k-label{display:inherit}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { type: i3.RadioButtonDirective, selector: "input[kendoRadioButton]", inputs: ["size"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i5.LabelDirective, selector: "label[for]", inputs: ["for"] }], pipes: { "async": i1.AsyncPipe, "formlySelectOptions": i6.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, decorators: [{
            type: Component,
            args: [{ selector: 'formly-field-kendo-radio', template: `
    <ng-container *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index">
      <input
        type="radio"
        #radioInput
        kendoRadioButton
        [id]="id + '_' + i"
        [name]="field.name || id"
        [value]="option.value"
        [formControl]="option.disabled ? disabledControl : formControl"
        [formlyAttributes]="field"
      />
      <label class="k-radio-label" [for]="id + '_' + i">
        {{ option.label }}
      </label>
    </ng-container>
  `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".k-form formly-field-kendo-radio .k-label{display:inherit}\n"] }]
        }] });

class FormlyRadioModule {
}
FormlyRadioModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyRadioModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, declarations: [FormlyFieldRadio], imports: [CommonModule,
        ReactiveFormsModule,
        LabelModule,
        InputsModule,
        FormlyFormFieldModule,
        FormlySelectModule, i4.FormlyModule] });
FormlyRadioModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            LabelModule,
            InputsModule,
            FormlyFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldRadio],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        LabelModule,
                        InputsModule,
                        FormlyFormFieldModule,
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

export { FormlyFieldRadio, FormlyRadioModule };
//# sourceMappingURL=ngx-formly-kendo-radio.mjs.map
