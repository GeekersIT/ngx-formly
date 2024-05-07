import { Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/ionic/form-field';
import * as i0 from "@angular/core";
interface ToggleProps extends FormlyFieldProps {
}
export interface FormlyToggleFieldConfig extends FormlyFieldConfig<ToggleProps> {
    type: 'toggle' | Type<FormlyFieldToggle>;
}
export declare class FormlyFieldToggle extends FieldType<FieldTypeConfig<ToggleProps>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldToggle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldToggle, "formly-field-ion-toggle", never, {}, {}, never, never>;
}
export {};
