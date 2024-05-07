import { Type } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/ionic/form-field';
import * as i0 from "@angular/core";
interface DatetimeProps extends FormlyFieldProps {
    presentation?: 'date' | 'date-time' | 'month' | 'month-year' | 'time' | 'time-date' | 'year';
    locale?: any;
    cancelText?: string;
    doneText?: string;
    dayValues?: number | number[] | string | undefined;
    hourValues?: number | number[] | string | undefined;
    minuteValues?: number | number[] | string | undefined;
    monthValues?: number | number[] | string | undefined;
    yearValues?: number | number[] | string | undefined;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    displayFormat?: string;
}
export interface FormlyDatetimeFieldConfig extends FormlyFieldConfig<DatetimeProps> {
    type: 'datetime' | Type<FormlyFieldDatetime>;
}
export declare class FormlyFieldDatetime extends FieldType<FieldTypeConfig<DatetimeProps>> {
    datetime: IonDatetime;
    isOpen: boolean;
    defaultOptions: {
        props: {
            presentation: "month-year";
            legacyLabel: boolean;
        };
    };
    displayFormat(): string;
    confirm(): void;
    reset(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldDatetime, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldDatetime, "formly-field-ion-datetime", never, {}, {}, never, never>;
}
export {};
