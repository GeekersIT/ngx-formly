import { Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';
import * as i0 from "@angular/core";
interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
    appendTo?: any;
    filter?: boolean;
}
export interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
    type: 'select' | Type<FormlyFieldSelect>;
}
export declare class FormlyFieldSelect extends FieldType<FieldTypeConfig<SelectProps>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSelect, "formly-field-primeng-select", never, {}, {}, never, never>;
}
export {};
