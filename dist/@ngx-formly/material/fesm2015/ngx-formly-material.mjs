import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
export { FieldType } from '@ngx-formly/material/form-field';
import * as i0 from '@angular/core';
import { NgModule } from '@angular/core';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { FormlyMatTextAreaModule } from '@ngx-formly/material/textarea';
import { FormlyMatRadioModule } from '@ngx-formly/material/radio';
import { FormlyMatCheckboxModule } from '@ngx-formly/material/checkbox';
import { FormlyMatMultiCheckboxModule } from '@ngx-formly/material/multicheckbox';
import { FormlyMatSelectModule } from '@ngx-formly/material/select';

class FormlyMaterialModule {
}
FormlyMaterialModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMaterialModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMaterialModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMaterialModule, imports: [FormlyMatFormFieldModule,
        FormlyMatInputModule,
        FormlyMatTextAreaModule,
        FormlyMatRadioModule,
        FormlyMatCheckboxModule,
        FormlyMatMultiCheckboxModule,
        FormlyMatSelectModule] });
FormlyMaterialModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMaterialModule, imports: [[
            FormlyMatFormFieldModule,
            FormlyMatInputModule,
            FormlyMatTextAreaModule,
            FormlyMatRadioModule,
            FormlyMatCheckboxModule,
            FormlyMatMultiCheckboxModule,
            FormlyMatSelectModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormlyMatFormFieldModule,
                        FormlyMatInputModule,
                        FormlyMatTextAreaModule,
                        FormlyMatRadioModule,
                        FormlyMatCheckboxModule,
                        FormlyMatMultiCheckboxModule,
                        FormlyMatSelectModule,
                    ],
                }]
        }] });

/*
 * Public API Surface of material
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyMaterialModule };
//# sourceMappingURL=ngx-formly-material.mjs.map
