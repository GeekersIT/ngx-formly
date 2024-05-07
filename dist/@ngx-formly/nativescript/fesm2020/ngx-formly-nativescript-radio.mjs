import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i2 from '@ngx-formly/core/select';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { FormlyNsFormFieldModule } from '@ngx-formly/nativescript/form-field';

class FormlyFieldRadio extends FieldType {
    tap(id) {
        const value = this.formControl.value === id ? null : id;
        setTimeout(() => {
            this.formControl.patchValue(value);
            this.formControl.markAsTouched();
        }, 100);
    }
}
FormlyFieldRadio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldRadio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldRadio, selector: "formly-field-ns-radio", usesInheritance: true, ngImport: i0, template: `
    <ng-container *ngFor="let option of props.options | formlySelectOptions : field | async">
      <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
        <Label class="label" [text]="option.label"></Label>
        <Switch col="1" class="switch input" [checked]="formControl.value === option.value" (tap)="tap(option.value)">
        </Switch>
      </GridLayout>
    </ng-container>
  `, isInline: true, directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i1.AsyncPipe, "formlySelectOptions": i2.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ns-radio',
                    template: `
    <ng-container *ngFor="let option of props.options | formlySelectOptions : field | async">
      <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
        <Label class="label" [text]="option.label"></Label>
        <Switch col="1" class="switch input" [checked]="formControl.value === option.value" (tap)="tap(option.value)">
        </Switch>
      </GridLayout>
    </ng-container>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyNsRadioFieldModule {
}
FormlyNsRadioFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsRadioFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNsRadioFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsRadioFieldModule, declarations: [FormlyFieldRadio], imports: [CommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        FormlyNsFormFieldModule,
        FormlySelectModule, i1$1.FormlyModule] });
FormlyNsRadioFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsRadioFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            FormlyNsFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsRadioFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldRadio],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NativeScriptFormsModule,
                        FormlyNsFormFieldModule,
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
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyNsRadioFieldModule };
//# sourceMappingURL=ngx-formly-nativescript-radio.mjs.map
