import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i3 from '@ngx-formly/ionic/form-field';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';

class FormlyFieldToggle extends FieldType {
}
FormlyFieldToggle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldToggle, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldToggle.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldToggle, selector: "formly-field-ion-toggle", usesInheritance: true, ngImport: i0, template: `
    <ion-toggle [formControl]="formControl" [ionFormlyAttributes]="field">
      {{ props.label }}
    </ion-toggle>
  `, isInline: true, components: [{ type: i1.IonToggle, selector: "ion-toggle", inputs: ["checked", "color", "disabled", "enableOnOffLabels", "mode", "name", "value"] }], directives: [{ type: i1.BooleanValueAccessor, selector: "ion-checkbox,ion-toggle" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldToggle, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-toggle',
                    template: `
    <ion-toggle [formControl]="formControl" [ionFormlyAttributes]="field">
      {{ props.label }}
    </ion-toggle>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyToggleModule {
}
FormlyToggleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyToggleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyToggleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyToggleModule, declarations: [FormlyFieldToggle], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule, i1$1.FormlyModule] });
FormlyToggleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyToggleModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyToggleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldToggle],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        FormlyFormFieldModule,
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

export { FormlyToggleModule };
//# sourceMappingURL=ngx-formly-ionic-toggle.mjs.map
