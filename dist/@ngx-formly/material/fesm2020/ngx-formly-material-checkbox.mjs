import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewChild, NgModule } from '@angular/core';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import * as i3 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import * as i2 from '@angular/material/checkbox';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import * as i1 from '@angular/cdk/a11y';

class FormlyFieldCheckbox extends FieldType {
    constructor(renderer, focusMonitor) {
        super();
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.defaultOptions = {
            props: {
                hideFieldUnderline: true,
                indeterminate: true,
                floatLabel: 'always',
                hideLabel: true,
                color: 'accent', // workaround for https://github.com/angular/components/issues/18465
            },
        };
    }
    onContainerClick(event) {
        this.checkbox.focus();
        super.onContainerClick(event);
    }
    ngAfterViewInit() {
        if (this.checkbox) {
            this.focusMonitor.monitor(this.checkbox._inputElement, true).subscribe((focusOrigin) => {
                this.field.focus = !!focusOrigin;
                this.stateChanges.next();
                if (focusOrigin) {
                    this.props.focus && this.props.focus(this.field);
                }
                else {
                    this.props.blur && this.props.blur(this.field);
                }
            });
        }
    }
    ngAfterViewChecked() {
        if (this.required !== this._required && this.checkbox && this.checkbox._inputElement) {
            this._required = this.required;
            const inputElement = this.checkbox._inputElement.nativeElement;
            if (this.required) {
                this.renderer.setAttribute(inputElement, 'required', 'required');
            }
            else {
                this.renderer.removeAttribute(inputElement, 'required');
            }
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.checkbox) {
            this.focusMonitor.stopMonitoring(this.checkbox._inputElement);
        }
    }
}
FormlyFieldCheckbox.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, deps: [{ token: i0.Renderer2 }, { token: i1.FocusMonitor }], target: i0.ɵɵFactoryTarget.Component });
FormlyFieldCheckbox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldCheckbox, selector: "formly-field-mat-checkbox", viewQueries: [{ propertyName: "checkbox", first: true, predicate: MatCheckbox, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <mat-checkbox
      [formControl]="formControl"
      [id]="id"
      [name]="field.name"
      [formlyAttributes]="field"
      [tabIndex]="props.tabindex"
      [indeterminate]="props.indeterminate && formControl.value == null"
      [color]="props.color"
      [labelPosition]="props.labelPosition"
    >
      {{ props.label }}
      <span
        *ngIf="props.required && props.hideRequiredMarker !== true"
        aria-hidden="true"
        class="mat-form-field-required-marker mat-mdc-form-field-required-marker"
        >*</span
      >
    </mat-checkbox>
  `, isInline: true, components: [{ type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], directives: [{ type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-mat-checkbox',
                    template: `
    <mat-checkbox
      [formControl]="formControl"
      [id]="id"
      [name]="field.name"
      [formlyAttributes]="field"
      [tabIndex]="props.tabindex"
      [indeterminate]="props.indeterminate && formControl.value == null"
      [color]="props.color"
      [labelPosition]="props.labelPosition"
    >
      {{ props.label }}
      <span
        *ngIf="props.required && props.hideRequiredMarker !== true"
        aria-hidden="true"
        class="mat-form-field-required-marker mat-mdc-form-field-required-marker"
        >*</span
      >
    </mat-checkbox>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i1.FocusMonitor }]; }, propDecorators: { checkbox: [{
                type: ViewChild,
                args: [MatCheckbox, { static: true }]
            }] } });

class FormlyMatCheckboxModule {
}
FormlyMatCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatCheckboxModule, declarations: [FormlyFieldCheckbox], imports: [CommonModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        FormlyMatFormFieldModule, i4.FormlyModule] });
FormlyMatCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatCheckboxModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatCheckboxModule,
            FormlyMatFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'checkbox',
                        component: FormlyFieldCheckbox,
                        wrappers: ['form-field'],
                    },
                    {
                        name: 'boolean',
                        extends: 'checkbox',
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldCheckbox],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                        FormlyMatFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'checkbox',
                                    component: FormlyFieldCheckbox,
                                    wrappers: ['form-field'],
                                },
                                {
                                    name: 'boolean',
                                    extends: 'checkbox',
                                },
                            ],
                        }),
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldCheckbox, FormlyMatCheckboxModule };
//# sourceMappingURL=ngx-formly-material-checkbox.mjs.map
