import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i3 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i6 from '@ngx-formly/core/select';
import { FormlySelectModule } from '@ngx-formly/core/select';
import * as i4 from '@ngx-formly/ionic/form-field';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';

class FormlyFieldRadio extends FieldType {
}
FormlyFieldRadio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldRadio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldRadio, selector: "formly-field-ion-radio", usesInheritance: true, ngImport: i0, template: `
    <ion-list>
      <ion-radio-group [formControl]="formControl" [ionFormlyAttributes]="field">
        <ion-list-header>{{ props.label }}</ion-list-header>
        <ion-item
          *ngFor="let option of props.options | formlySelectOptions : field | async"
          [disabled]="option.disabled || formControl.disabled"
        >
          <ion-label *ngIf="props.legacyLabel">{{ option.label }}</ion-label>
          <ion-radio [value]="option.value">
            {{ option.label }}
          </ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
    <ion-item lines="none" *ngIf="showError">
      <ion-label>
        <ion-text color="danger">
          <p>
            <formly-validation-message [field]="field"></formly-validation-message>
          </p>
        </ion-text>
      </ion-label>
    </ion-item>
  `, isInline: true, components: [{ type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i1.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }, { type: i1.IonText, selector: "ion-text", inputs: ["color", "mode"] }, { type: i2.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.RadioValueAccessor, selector: "ion-radio" }], pipes: { "async": i5.AsyncPipe, "formlySelectOptions": i6.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-radio',
                    template: `
    <ion-list>
      <ion-radio-group [formControl]="formControl" [ionFormlyAttributes]="field">
        <ion-list-header>{{ props.label }}</ion-list-header>
        <ion-item
          *ngFor="let option of props.options | formlySelectOptions : field | async"
          [disabled]="option.disabled || formControl.disabled"
        >
          <ion-label *ngIf="props.legacyLabel">{{ option.label }}</ion-label>
          <ion-radio [value]="option.value">
            {{ option.label }}
          </ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
    <ion-item lines="none" *ngIf="showError">
      <ion-label>
        <ion-text color="danger">
          <p>
            <formly-validation-message [field]="field"></formly-validation-message>
          </p>
        </ion-text>
      </ion-label>
    </ion-item>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyRadioModule {
}
FormlyRadioModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyRadioModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, declarations: [FormlyFieldRadio], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule,
        FormlySelectModule, i2.FormlyModule] });
FormlyRadioModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'radio',
                        component: FormlyFieldRadio,
                        wrappers: [],
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
                        IonicModule,
                        FormlyFormFieldModule,
                        FormlySelectModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'radio',
                                    component: FormlyFieldRadio,
                                    wrappers: [],
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
//# sourceMappingURL=ngx-formly-ionic-radio.mjs.map
