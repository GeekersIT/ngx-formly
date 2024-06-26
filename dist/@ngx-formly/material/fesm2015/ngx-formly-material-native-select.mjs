import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@ngx-formly/core';
import { FormlyModule } from '@ngx-formly/core';
import * as i5 from '@ngx-formly/core/select';
import { FormlySelectModule } from '@ngx-formly/core/select';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import * as i1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';

class FormlyFieldNativeSelect extends FieldType {
}
FormlyFieldNativeSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldNativeSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldNativeSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldNativeSelect, selector: "formly-field-mat-native-select", usesInheritance: true, ngImport: i0, template: `
    <select
      matNativeControl
      [id]="id"
      [name]="field.name"
      [readonly]="props.readonly"
      [required]="required"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
      <option *ngIf="props.placeholder" [ngValue]="undefined">{{ props.placeholder }}</option>
      <ng-container *ngIf="props.options | formlySelectOptions : field | async as opts">
        <ng-container *ngFor="let opt of opts">
          <option *ngIf="!opt.group; else optgroup" [ngValue]="opt.value" [disabled]="opt.disabled">
            {{ opt.label }}
          </option>
          <ng-template #optgroup>
            <optgroup [label]="opt.label">
              <option *ngFor="let child of opt.group" [ngValue]="child.value" [disabled]="child.disabled">
                {{ child.label }}
              </option>
            </optgroup>
          </ng-template>
        </ng-container>
      </ng-container>
    </select>
  `, isInline: true, directives: [{ type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i4.AsyncPipe, "formlySelectOptions": i5.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldNativeSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-mat-native-select',
                    template: `
    <select
      matNativeControl
      [id]="id"
      [name]="field.name"
      [readonly]="props.readonly"
      [required]="required"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
      <option *ngIf="props.placeholder" [ngValue]="undefined">{{ props.placeholder }}</option>
      <ng-container *ngIf="props.options | formlySelectOptions : field | async as opts">
        <ng-container *ngFor="let opt of opts">
          <option *ngIf="!opt.group; else optgroup" [ngValue]="opt.value" [disabled]="opt.disabled">
            {{ opt.label }}
          </option>
          <ng-template #optgroup>
            <optgroup [label]="opt.label">
              <option *ngFor="let child of opt.group" [ngValue]="child.value" [disabled]="child.disabled">
                {{ child.label }}
              </option>
            </optgroup>
          </ng-template>
        </ng-container>
      </ng-container>
    </select>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyMatNativeSelectModule {
}
FormlyMatNativeSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatNativeSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatNativeSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatNativeSelectModule, declarations: [FormlyFieldNativeSelect], imports: [CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        FormlyMatFormFieldModule,
        FormlySelectModule, i3.FormlyModule] });
FormlyMatNativeSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatNativeSelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            FormlyMatFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'native-select',
                        component: FormlyFieldNativeSelect,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatNativeSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldNativeSelect],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        FormlyMatFormFieldModule,
                        FormlySelectModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'native-select',
                                    component: FormlyFieldNativeSelect,
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

export { FormlyFieldNativeSelect, FormlyMatNativeSelectModule };
//# sourceMappingURL=ngx-formly-material-native-select.mjs.map
