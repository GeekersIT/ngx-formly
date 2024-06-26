import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewChildren, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import * as i4 from '@ngx-formly/core/select';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import * as i1 from '@angular/material/checkbox';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';

class FormlyFieldMultiCheckbox extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            props: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                color: 'accent', // workaround for https://github.com/angular/components/issues/18465
            },
        };
    }
    onChange(value, checked) {
        this.formControl.markAsDirty();
        if (this.props.type === 'array') {
            this.formControl.patchValue(checked
                ? [...(this.formControl.value || []), value]
                : [...(this.formControl.value || [])].filter((o) => o !== value));
        }
        else {
            this.formControl.patchValue({ ...this.formControl.value, [value]: checked });
        }
        this.formControl.markAsTouched();
    }
    // TODO: find a solution to prevent scroll on focus
    onContainerClick() { }
    isChecked(option) {
        const value = this.formControl.value;
        return value && (this.props.type === 'array' ? value.indexOf(option.value) !== -1 : value[option.value]);
    }
}
FormlyFieldMultiCheckbox.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldMultiCheckbox, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldMultiCheckbox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldMultiCheckbox, selector: "formly-field-mat-multicheckbox", host: { properties: { "id": "id" } }, viewQueries: [{ propertyName: "checkboxes", predicate: MatCheckbox, descendants: true }], usesInheritance: true, ngImport: i0, template: `
    <ng-container *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index">
      <mat-checkbox
        [id]="id + '_' + i"
        [formlyAttributes]="field"
        [tabIndex]="props.tabindex"
        [color]="props.color"
        [labelPosition]="props.labelPosition"
        [checked]="isChecked(option)"
        [disabled]="formControl.disabled || option.disabled"
        (change)="onChange(option.value, $event.checked)"
      >
        {{ option.label }}
      </mat-checkbox>
    </ng-container>
  `, isInline: true, components: [{ type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], pipes: { "async": i2.AsyncPipe, "formlySelectOptions": i4.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldMultiCheckbox, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-mat-multicheckbox',
                    template: `
    <ng-container *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index">
      <mat-checkbox
        [id]="id + '_' + i"
        [formlyAttributes]="field"
        [tabIndex]="props.tabindex"
        [color]="props.color"
        [labelPosition]="props.labelPosition"
        [checked]="isChecked(option)"
        [disabled]="formControl.disabled || option.disabled"
        (change)="onChange(option.value, $event.checked)"
      >
        {{ option.label }}
      </mat-checkbox>
    </ng-container>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[id]': 'id',
                    },
                }]
        }], propDecorators: { checkboxes: [{
                type: ViewChildren,
                args: [MatCheckbox]
            }] } });

class FormlyMatMultiCheckboxModule {
}
FormlyMatMultiCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatMultiCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatMultiCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatMultiCheckboxModule, declarations: [FormlyFieldMultiCheckbox], imports: [CommonModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        FormlyMatFormFieldModule,
        FormlySelectModule, i3.FormlyModule] });
FormlyMatMultiCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatMultiCheckboxModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatCheckboxModule,
            FormlyMatFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'multicheckbox',
                        component: FormlyFieldMultiCheckbox,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatMultiCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldMultiCheckbox],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                        FormlyMatFormFieldModule,
                        FormlySelectModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'multicheckbox',
                                    component: FormlyFieldMultiCheckbox,
                                    wrappers: ['form-field'],
                                },
                            ],
                        }),
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldMultiCheckbox, FormlyMatMultiCheckboxModule };
//# sourceMappingURL=ngx-formly-material-multicheckbox.mjs.map
