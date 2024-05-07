import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import * as i1 from '@progress/kendo-angular-dropdowns';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import * as i5 from '@ngx-formly/core/select';
import { FormlySelectModule as FormlySelectModule$1 } from '@ngx-formly/core/select';
import { FieldType, FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';

class FormlyFieldSelect extends FieldType {
}
FormlyFieldSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldSelect, selector: "formly-field-kendo-select", usesInheritance: true, ngImport: i0, template: `
    <kendo-dropdownlist
      [formControl]="formControl"
      [formlyAttributes]="field"
      [data]="props.options | formlySelectOptions : field | async"
      [textField]="'label'"
      [valueField]="'value'"
      [valuePrimitive]="props.primitive ?? true"
      (valueChange)="props.change && props.change(field, $event)"
    >
    </kendo-dropdownlist>
  `, isInline: true, components: [{ type: i1.DropDownListComponent, selector: "kendo-dropdownlist", inputs: ["iconClass", "loading", "data", "value", "textField", "valueField", "popupSettings", "listHeight", "defaultItem", "disabled", "itemDisabled", "readonly", "filterable", "virtual", "ignoreCase", "delay", "valuePrimitive", "tabindex", "tabIndex", "size", "rounded", "fillMode", "id"], outputs: ["valueChange", "filterChange", "selectionChange", "open", "opened", "close", "closed", "focus", "blur"], exportAs: ["kendoDropDownList"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], pipes: { "async": i4.AsyncPipe, "formlySelectOptions": i5.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-kendo-select',
                    template: `
    <kendo-dropdownlist
      [formControl]="formControl"
      [formlyAttributes]="field"
      [data]="props.options | formlySelectOptions : field | async"
      [textField]="'label'"
      [valueField]="'value'"
      [valuePrimitive]="props.primitive ?? true"
      (valueChange)="props.change && props.change(field, $event)"
    >
    </kendo-dropdownlist>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlySelectModule {
}
FormlySelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlySelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, declarations: [FormlyFieldSelect], imports: [CommonModule,
        ReactiveFormsModule,
        DropDownsModule,
        FormlyFormFieldModule,
        FormlySelectModule$1, i3.FormlyModule] });
FormlySelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            DropDownsModule,
            FormlyFormFieldModule,
            FormlySelectModule$1,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'select',
                        component: FormlyFieldSelect,
                        wrappers: ['form-field'],
                    },
                    { name: 'enum', extends: 'select' },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldSelect],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        DropDownsModule,
                        FormlyFormFieldModule,
                        FormlySelectModule$1,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'select',
                                    component: FormlyFieldSelect,
                                    wrappers: ['form-field'],
                                },
                                { name: 'enum', extends: 'select' },
                            ],
                        }),
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldSelect, FormlySelectModule };
//# sourceMappingURL=ngx-formly-kendo-select.mjs.map
