import { Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/ionic/form-field';
import * as i0 from "@angular/core";
interface SliderProps extends FormlyFieldProps {
}
export interface FormlySliderFieldConfig extends FormlyFieldConfig<SliderProps> {
    type: 'slider' | Type<FormlyFieldSlider>;
}
export declare class FormlyFieldSlider extends FieldType<FieldTypeConfig<SliderProps>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldSlider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldSlider, "formly-field-ion-range", never, {}, {}, never, never>;
}
export {};
