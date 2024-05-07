import * as i0 from '@angular/core';
import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';
import { FormlyInputModule } from '@ngx-formly/ionic/input';
import { FormlyTextAreaModule } from '@ngx-formly/ionic/textarea';
import { FormlyRadioModule } from '@ngx-formly/ionic/radio';
import { FormlyCheckboxModule } from '@ngx-formly/ionic/checkbox';
import { FormlySelectModule } from '@ngx-formly/ionic/select';
import { FormlyToggleModule } from '@ngx-formly/ionic/toggle';
import { FormlySliderModule } from '@ngx-formly/ionic/slider';
import { FormlyDatetimeModule } from '@ngx-formly/ionic/datetime';

class FormlyIonicModule {
}
FormlyIonicModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyIonicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyIonicModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyIonicModule, imports: [FormlyFormFieldModule,
        FormlyInputModule,
        FormlyTextAreaModule,
        FormlyRadioModule,
        FormlyCheckboxModule,
        FormlySelectModule,
        FormlyToggleModule,
        FormlySliderModule,
        FormlyDatetimeModule], exports: [FormlyFormFieldModule] });
FormlyIonicModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyIonicModule, imports: [[
            FormlyFormFieldModule,
            FormlyInputModule,
            FormlyTextAreaModule,
            FormlyRadioModule,
            FormlyCheckboxModule,
            FormlySelectModule,
            FormlyToggleModule,
            FormlySliderModule,
            FormlyDatetimeModule,
        ], FormlyFormFieldModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyIonicModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormlyFormFieldModule,
                        FormlyInputModule,
                        FormlyTextAreaModule,
                        FormlyRadioModule,
                        FormlyCheckboxModule,
                        FormlySelectModule,
                        FormlyToggleModule,
                        FormlySliderModule,
                        FormlyDatetimeModule,
                    ],
                    exports: [FormlyFormFieldModule],
                }]
        }] });

/*
 * Public API Surface of ionic
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyIonicModule };
//# sourceMappingURL=ngx-formly-ionic.mjs.map
