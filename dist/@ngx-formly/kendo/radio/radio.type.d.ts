import { Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/kendo/form-field';
import { FormlyFieldProps } from '@ngx-formly/kendo/form-field';
import * as i0 from "@angular/core";
interface RadioProps extends FormlyFieldProps {
}
export interface FormlyRadioFieldConfig extends FormlyFieldConfig<RadioProps> {
    type: 'radio' | Type<FormlyFieldRadio>;
}
export declare class FormlyFieldRadio extends FieldType<FieldTypeConfig<RadioProps>> {
    get disabledControl(): FormControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldRadio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldRadio, "formly-field-kendo-radio", never, {}, {}, never, never>;
}
export {};
