import * as i0 from '@angular/core';
import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import { FormlyInputModule } from '@ngx-formly/kendo/input';
import { FormlyTextAreaModule } from '@ngx-formly/kendo/textarea';
import { FormlyRadioModule } from '@ngx-formly/kendo/radio';
import { FormlyCheckboxModule } from '@ngx-formly/kendo/checkbox';
import { FormlySelectModule } from '@ngx-formly/kendo/select';

class FormlyKendoModule {
}
FormlyKendoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyKendoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyKendoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyKendoModule, imports: [FormlyFormFieldModule,
        FormlyInputModule,
        FormlyTextAreaModule,
        FormlyRadioModule,
        FormlyCheckboxModule,
        FormlySelectModule] });
FormlyKendoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyKendoModule, imports: [[
            FormlyFormFieldModule,
            FormlyInputModule,
            FormlyTextAreaModule,
            FormlyRadioModule,
            FormlyCheckboxModule,
            FormlySelectModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyKendoModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormlyFormFieldModule,
                        FormlyInputModule,
                        FormlyTextAreaModule,
                        FormlyRadioModule,
                        FormlyCheckboxModule,
                        FormlySelectModule,
                    ],
                }]
        }] });

/*
 * Public API Surface of kendo
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyKendoModule };
//# sourceMappingURL=ngx-formly-kendo.mjs.map
