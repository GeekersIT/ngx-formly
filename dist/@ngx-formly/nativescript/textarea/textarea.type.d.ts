import { Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/nativescript/form-field';
import * as i0 from "@angular/core";
interface TextAreaProps extends FormlyFieldProps {
    hint?: string;
    autocorrect?: boolean;
    keyboardType?: any;
}
export interface FormlyTextAreaFieldConfig extends FormlyFieldConfig<TextAreaProps> {
    type: 'textarea' | Type<FormlyFieldTextArea>;
}
export declare class FormlyFieldTextArea extends FieldType<FieldTypeConfig<TextAreaProps>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldTextArea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldTextArea, "formly-field-ns-textarea", never, {}, {}, never, never>;
}
export {};
