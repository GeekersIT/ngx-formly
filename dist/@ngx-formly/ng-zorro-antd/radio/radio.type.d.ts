import { Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field';
import * as i0 from "@angular/core";
interface RadioProps extends FormlyFieldProps {
}
export interface FormlyRadioFieldConfig extends FormlyFieldConfig<RadioProps> {
    type: 'radio' | Type<FormlyFieldRadio>;
}
export declare class FormlyFieldRadio extends FieldType<FieldTypeConfig<RadioProps>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldRadio, "formly-field-nz-radio", never, {}, {}, never, never>;
}
export {};
