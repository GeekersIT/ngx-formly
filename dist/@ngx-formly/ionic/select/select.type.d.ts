import { Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/ionic/form-field';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';
import * as i0 from "@angular/core";
interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
    compareWith?: ((currentValue: any, compareValue: any) => boolean) | null | string | undefined;
    multiple?: boolean;
    interface?: 'action-sheet' | 'alert' | 'popover';
    okText?: string;
    cancelText?: string;
}
export interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
    type: 'select' | Type<FormlyFieldSelect>;
}
export declare class FormlyFieldSelect extends FieldType<FieldTypeConfig<SelectProps>> {
    defaultOptions: {
        props: {
            compareWith(o1: any, o2: any): boolean;
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSelect, "formly-field-ion-select", never, {}, {}, never, never>;
}
export {};
