import * as i0 from '@angular/core';
import { Component, Directive, Inject, Input, NgModule } from '@angular/core';
import * as i3 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i2 from '@ngx-formly/core';
import { FieldWrapper, ɵFormlyAttributes, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@ionic/angular';
import { IonRadio, IonicModule } from '@ionic/angular';

class FormlyWrapperFormField extends FieldWrapper {
}
FormlyWrapperFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyWrapperFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyWrapperFormField, selector: "formly-wrapper-ion-form-field", usesInheritance: true, ngImport: i0, template: `
    <ion-item [lines]="props.itemLines">
      <ion-label [position]="props.labelPosition" *ngIf="props.legacyLabel">
        {{ props.label }}
        <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true">*</span>
      </ion-label>
      <ng-template #fieldComponent></ng-template>
    </ion-item>
    <ion-item lines="none" *ngIf="showError">
      <ion-label>
        <ion-text color="danger">
          <p>
            <formly-validation-message [field]="field"></formly-validation-message>
          </p>
        </ion-text>
      </ion-label>
    </ion-item>
  `, isInline: true, components: [{ type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonText, selector: "ion-text", inputs: ["color", "mode"] }, { type: i2.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-wrapper-ion-form-field',
                    template: `
    <ion-item [lines]="props.itemLines">
      <ion-label [position]="props.labelPosition" *ngIf="props.legacyLabel">
        {{ props.label }}
        <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true">*</span>
      </ion-label>
      <ng-template #fieldComponent></ng-template>
    </ion-item>
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
                }]
        }] });

class IonFormlyAttributes extends ɵFormlyAttributes {
    constructor(renderer, elementRef, _document) {
        super(renderer, elementRef, _document);
    }
}
IonFormlyAttributes.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonFormlyAttributes, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Directive });
IonFormlyAttributes.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.12", type: IonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: { field: ["ionFormlyAttributes", "field"] }, host: { listeners: { "ionFocus": "onFocus($event)", "ionBlur": "onBlur($event)", "ionChange": "onChange($event)" } }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: IonFormlyAttributes, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line
                    selector: '[ionFormlyAttributes]',
                    host: {
                        '(ionFocus)': 'onFocus($event)',
                        '(ionBlur)': 'onBlur($event)',
                        '(ionChange)': 'onChange($event)',
                    },
                }]
        }], ctorParameters: function () {
        return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }];
    }, propDecorators: { field: [{
                type: Input,
                args: ['ionFormlyAttributes']
            }] } });

function formFieldLegacyExtension(field) {
    var _a;
    if ((_a = field.props) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('legacyLabel')) {
        return;
    }
    field.props = Object.assign({ legacyLabel: !IonRadio.prototype.hasOwnProperty('legacy') }, (field.props || {}));
}
class FormlyFormFieldModule {
}
FormlyFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, declarations: [FormlyWrapperFormField, IonFormlyAttributes], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule, i2.FormlyModule], exports: [IonFormlyAttributes] });
FormlyFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
                extensions: [{ name: 'form-field-legacy', extension: { postPopulate: formFieldLegacyExtension } }],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperFormField, IonFormlyAttributes],
                    exports: [IonFormlyAttributes],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'form-field',
                                    component: FormlyWrapperFormField,
                                },
                            ],
                            extensions: [{ name: 'form-field-legacy', extension: { postPopulate: formFieldLegacyExtension } }],
                        }),
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFormFieldModule, IonFormlyAttributes as ɵIonFormlyAttributes };
//# sourceMappingURL=ngx-formly-ionic-form-field.mjs.map
