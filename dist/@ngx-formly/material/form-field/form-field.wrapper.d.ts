import { OnInit, OnDestroy, Renderer2, AfterViewInit, ElementRef, TemplateRef } from '@angular/core';
import { FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps, FieldWrapper } from '@ngx-formly/core';
import { MatFormField } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';
import { ThemePalette } from '@angular/material/core';
import * as i0 from "@angular/core";
interface MatFormlyFieldConfig extends FormlyFieldConfig<FormlyFieldProps> {
    _formField?: FormlyWrapperFormField;
}
export interface FormlyFieldProps extends CoreFormlyFieldProps {
    prefix?: TemplateRef<any>;
    suffix?: TemplateRef<any>;
    textPrefix?: TemplateRef<any>;
    textSuffix?: TemplateRef<any>;
    hideLabel?: boolean;
    hideRequiredMarker?: boolean;
    hideFieldUnderline?: boolean;
    floatLabel?: FloatLabelType;
    appearance?: MatFormFieldAppearance;
    subscriptSizing?: 'fixed' | 'dynamic';
    color?: ThemePalette;
    hintStart?: TemplateRef<any> | string;
    hintEnd?: TemplateRef<any> | string;
}
export declare class FormlyWrapperFormField extends FieldWrapper<MatFormlyFieldConfig> implements OnInit, OnDestroy, AfterViewInit {
    private renderer;
    private elementRef;
    private focusMonitor;
    formField: MatFormField;
    constructor(renderer: Renderer2, elementRef: ElementRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyWrapperFormField, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyWrapperFormField, "formly-wrapper-mat-form-field", never, {}, {}, never, never>;
}
export {};
