import { Type } from '@angular/core';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/kendo/form-field';
import * as i0 from "@angular/core";
interface TextAreaProps extends FormlyFieldProps {
}
export interface FormlyTextAreaFieldConfig extends FormlyFieldConfig<TextAreaProps> {
    type: 'textarea' | Type<FormlyFieldTextArea>;
}
export declare class FormlyFieldTextArea extends FieldType<FieldTypeConfig<TextAreaProps>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldTextArea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldTextArea, "formly-field-kendo-textarea", never, {}, {}, never, never>;
}
export {};
