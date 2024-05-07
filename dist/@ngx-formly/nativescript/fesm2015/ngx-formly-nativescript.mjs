import * as i0 from '@angular/core';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormlyNsFormFieldModule } from '@ngx-formly/nativescript/form-field';
import { FormlyNsTextFieldModule } from '@ngx-formly/nativescript/text-field';
import { FormlyNsTextAreaFieldModule } from '@ngx-formly/nativescript/textarea';
import { FormlyNsCheckboxFieldModule } from '@ngx-formly/nativescript/checkbox';
import { FormlyNsRadioFieldModule } from '@ngx-formly/nativescript/radio';
import { FormlyNsSelectFieldModule } from '@ngx-formly/nativescript/select';

class FormlyNativescriptModule {
}
FormlyNativescriptModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNativescriptModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNativescriptModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNativescriptModule, imports: [FormlyNsFormFieldModule,
        FormlyNsTextFieldModule,
        FormlyNsTextAreaFieldModule,
        FormlyNsCheckboxFieldModule,
        FormlyNsRadioFieldModule,
        FormlyNsSelectFieldModule] });
FormlyNativescriptModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNativescriptModule, imports: [[
            FormlyNsFormFieldModule,
            FormlyNsTextFieldModule,
            FormlyNsTextAreaFieldModule,
            FormlyNsCheckboxFieldModule,
            FormlyNsRadioFieldModule,
            FormlyNsSelectFieldModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNativescriptModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormlyNsFormFieldModule,
                        FormlyNsTextFieldModule,
                        FormlyNsTextAreaFieldModule,
                        FormlyNsCheckboxFieldModule,
                        FormlyNsRadioFieldModule,
                        FormlyNsSelectFieldModule,
                    ],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

/*
 * Public API Surface of material
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyNativescriptModule };
//# sourceMappingURL=ngx-formly-nativescript.mjs.map
