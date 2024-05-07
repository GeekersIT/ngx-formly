import { OnInit } from '@angular/core';
import { FormFieldComponent, Orientation } from '@progress/kendo-angular-inputs';
import { FieldWrapper, FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps } from '@ngx-formly/core';
import * as i0 from "@angular/core";
export interface FormlyFieldProps extends CoreFormlyFieldProps {
    hideRequiredMarker?: boolean;
    hideLabel?: boolean;
    orientation?: Orientation;
}
export declare class FormlyWrapperFormField extends FieldWrapper<FormlyFieldConfig<FormlyFieldProps>> implements OnInit {
    formfield: FormFieldComponent;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyWrapperFormField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyWrapperFormField, "formly-wrapper-kendo-form-field", never, {}, {}, never, never>;
}
