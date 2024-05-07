import { FormlyFieldConfig, FieldType as CoreFieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
export declare abstract class FieldType<F extends FormlyFieldConfig = FormlyFieldConfig> extends CoreFieldType<F> {
    private set formControls(value);
    private get formField();
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldType<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FieldType<any>, never, never, {}, {}, never>;
}
