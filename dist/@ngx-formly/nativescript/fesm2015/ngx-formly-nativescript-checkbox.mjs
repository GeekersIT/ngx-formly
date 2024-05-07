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

class FormlyFieldCheckbox extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            props: {
                hideLabel: true,
            },
        };
    }
}
FormlyFieldCheckbox.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldCheckbox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldCheckbox, selector: "formly-field-ns-checkbox", usesInheritance: true, ngImport: i0, template: `
    <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
      <Label class="label" [text]="props.label"></Label>
      <Switch class="switch input" [formlyAttributes]="field" [formControl]="formControl" col="1"></Switch>
    </GridLayout>
  `, isInline: true, directives: [{ type: i1.CheckedValueAccessor, selector: "Switch[ngModel],Switch[formControlName],Switch[formControl],switch[ngModel],switch[formControlName],switch[formControl]" }, { type: i2.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ns-checkbox',
                    template: `
    <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
      <Label class="label" [text]="props.label"></Label>
      <Switch class="switch input" [formlyAttributes]="field" [formControl]="formControl" col="1"></Switch>
    </GridLayout>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyNsCheckboxFieldModule {
}
FormlyNsCheckboxFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsCheckboxFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNsCheckboxFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsCheckboxFieldModule, declarations: [FormlyFieldCheckbox], imports: [CommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        FormlyNsFormFieldModule, i2.FormlyModule] });
FormlyNsCheckboxFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsCheckboxFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            FormlyNsFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsCheckboxFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldCheckbox],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NativeScriptFormsModule,
                        FormlyNsFormFieldModule,
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
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyNsCheckboxFieldModule };
//# sourceMappingURL=ngx-formly-nativescript-checkbox.mjs.map
