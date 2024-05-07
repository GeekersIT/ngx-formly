import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@ngx-formly/ionic/form-field';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';

class FormlyFieldTextArea extends FieldType {
}
FormlyFieldTextArea.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldTextArea.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldTextArea, selector: "formly-field-ion-textarea", usesInheritance: true, ngImport: i0, template: `
    <ion-textarea
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
      [cols]="props.cols"
      [rows]="props.rows"
      [label]="props.label"
    >
    </ion-textarea>
  `, isInline: true, styles: [":host{display:inherit}\n"], components: [{ type: i1.IonTextarea, selector: "ion-textarea", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] }], directives: [{ type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-textarea',
                    template: `
    <ion-textarea
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
      [cols]="props.cols"
      [rows]="props.rows"
      [label]="props.label"
    >
    </ion-textarea>
  `,
                    styles: [':host { display: inherit; }'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyTextAreaModule {
}
FormlyTextAreaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyTextAreaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyTextAreaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyTextAreaModule, declarations: [FormlyFieldTextArea], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule, i1$1.FormlyModule] });
FormlyTextAreaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyTextAreaModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'textarea',
                        component: FormlyFieldTextArea,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyTextAreaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldTextArea],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        FormlyFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'textarea',
                                    component: FormlyFieldTextArea,
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

export { FormlyFieldTextArea, FormlyTextAreaModule };
//# sourceMappingURL=ngx-formly-ionic-textarea.mjs.map
