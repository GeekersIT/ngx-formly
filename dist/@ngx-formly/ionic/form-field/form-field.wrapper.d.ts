import { IonItem, IonLabel } from '@ionic/angular';
import { FieldWrapper, FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps } from '@ngx-formly/core';
import * as i0 from "@angular/core";
export interface FormlyFieldProps extends CoreFormlyFieldProps {
    hideRequiredMarker?: boolean;
    itemLines?: IonItem['lines'];
    labelPosition?: IonLabel['position'];
    legacyLabel?: boolean;
}
export declare class FormlyWrapperFormField extends FieldWrapper<FormlyFieldConfig<FormlyFieldProps>> {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyWrapperFormField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyWrapperFormField, "formly-wrapper-ion-form-field", never, {}, {}, never, never>;
}
