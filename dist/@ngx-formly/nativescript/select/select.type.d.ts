import { Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/nativescript/form-field';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';
import * as i0 from "@angular/core";
interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
}
export interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
    type: 'select' | Type<FormlyFieldSelect>;
}
export declare class FormlyFieldSelect extends FieldType<FieldTypeConfig<SelectProps>> {
    tap(options: any[]): void;
    selectedItem(options: any[]): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSelect, "formly-field-ns-select", never, {}, {}, never, never>;
}
export {};
