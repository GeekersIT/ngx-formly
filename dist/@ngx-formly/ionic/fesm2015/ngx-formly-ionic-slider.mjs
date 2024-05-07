import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i3 from '@ngx-formly/ionic/form-field';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';

class FormlyFieldSlider extends FieldType {
}
FormlyFieldSlider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSlider, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldSlider.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldSlider, selector: "formly-field-ion-range", usesInheritance: true, ngImport: i0, template: `
    <ion-range
      [min]="props.min"
      [max]="props.max"
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
      [label]="props.label"
    >
      <ion-label slot="start">{{ props.min }}</ion-label>
      <ion-label slot="end">{{ props.max }}</ion-label>
    </ion-range>
  `, isInline: true, styles: [":host{display:inherit}\n"], components: [{ type: i1.IonRange, selector: "ion-range", inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }], directives: [{ type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSlider, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-range',
                    template: `
    <ion-range
      [min]="props.min"
      [max]="props.max"
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
      [label]="props.label"
    >
      <ion-label slot="start">{{ props.min }}</ion-label>
      <ion-label slot="end">{{ props.max }}</ion-label>
    </ion-range>
  `,
                    styles: [':host { display: inherit; }'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlySliderModule {
}
FormlySliderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlySliderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySliderModule, declarations: [FormlyFieldSlider], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule, i1$1.FormlyModule] });
FormlySliderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySliderModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyFormFieldModule,
            FormlyModule.forChild({
                types: [
                    { name: 'slider', component: FormlyFieldSlider, wrappers: ['form-field'] },
                    { name: 'range', extends: 'slider' },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySliderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldSlider],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        FormlyFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                { name: 'slider', component: FormlyFieldSlider, wrappers: ['form-field'] },
                                { name: 'range', extends: 'slider' },
                            ],
                        }),
                    ],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlySliderModule };
//# sourceMappingURL=ngx-formly-ionic-slider.mjs.map
