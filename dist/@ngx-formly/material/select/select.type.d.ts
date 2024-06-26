import { Type } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType, FormlyFieldProps } from '@ngx-formly/material/form-field';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';
import * as i0 from "@angular/core";
interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
    multiple?: boolean;
    selectAllOption?: string;
    disableOptionCentering?: boolean;
    typeaheadDebounceInterval?: number;
    compareWith?: (o1: any, o2: any) => boolean;
    panelClass?: string;
}
export interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
    type: 'select' | Type<FormlyFieldSelect>;
}
export declare class FormlyFieldSelect extends FieldType<FieldTypeConfig<SelectProps>> {
    set select(select: any);
    defaultOptions: {
        props: {
            compareWith(o1: any, o2: any): boolean;
        };
    };
    private selectAllValue;
    getSelectAllState(options: any[]): "indeterminate" | "checked";
    toggleSelectAll(options: any[]): void;
    change($event: MatSelectChange): void;
    _getAriaLabelledby(): string;
    _getAriaLabel(): string;
    private getSelectAllValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSelect, "formly-field-mat-select", never, {}, {}, never, never>;
}
export {};
