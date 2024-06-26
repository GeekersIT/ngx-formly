import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i3 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/material/slide-toggle';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';

class FormlyFieldToggle extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            props: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                hideLabel: true,
            },
        };
    }
    onContainerClick(event) {
        this.slideToggle.focus();
        super.onContainerClick(event);
    }
}
FormlyFieldToggle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldToggle, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldToggle.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldToggle, selector: "formly-field-mat-toggle", viewQueries: [{ propertyName: "slideToggle", first: true, predicate: MatSlideToggle, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <mat-slide-toggle
      [id]="id"
      [name]="field.name"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [color]="props.color"
      [tabIndex]="props.tabindex"
      [required]="required"
      [labelPosition]="props.labelPosition"
    >
      {{ props.label }}
    </mat-slide-toggle>
  `, isInline: true, components: [{ type: i1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }], directives: [{ type: i1.MatSlideToggleRequiredValidator, selector: "mat-slide-toggle[required][formControlName],             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldToggle, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-mat-toggle',
                    template: `
    <mat-slide-toggle
      [id]="id"
      [name]="field.name"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [color]="props.color"
      [tabIndex]="props.tabindex"
      [required]="required"
      [labelPosition]="props.labelPosition"
    >
      {{ props.label }}
    </mat-slide-toggle>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { slideToggle: [{
                type: ViewChild,
                args: [MatSlideToggle, { static: true }]
            }] } });

class FormlyMatToggleModule {
}
FormlyMatToggleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatToggleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatToggleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatToggleModule, declarations: [FormlyFieldToggle], imports: [CommonModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        FormlyMatFormFieldModule, i3.FormlyModule] });
FormlyMatToggleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatToggleModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatSlideToggleModule,
            FormlyMatFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'toggle',
                        component: FormlyFieldToggle,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatToggleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldToggle],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatSlideToggleModule,
                        FormlyMatFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'toggle',
                                    component: FormlyFieldToggle,
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

export { FormlyFieldToggle, FormlyMatToggleModule };
//# sourceMappingURL=ngx-formly-material-toggle.mjs.map
