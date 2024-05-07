import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i5 from '@ngx-formly/core/select';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import * as i1 from 'ng-zorro-antd/select';
import { NzSelectModule } from 'ng-zorro-antd/select';

class FormlyFieldSelect extends FieldType {
}
FormlyFieldSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldSelect, selector: "formly-field-nz-select", usesInheritance: true, ngImport: i0, template: `
    <nz-select
      [class.ng-dirty]="showError"
      [nzPlaceHolder]="props.placeholder"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzMode]="props.multiple ? 'multiple' : 'default'"
      (ngModelChange)="props.change && props.change(field, $event)"
    >
      <ng-container *ngFor="let item of props.options | formlySelectOptions : field | async">
        <nz-option-group *ngIf="item.group" [nzLabel]="item.label">
          <nz-option
            *ngFor="let child of item.group"
            [nzValue]="child.value"
            [nzDisabled]="child.disabled"
            [nzLabel]="child.label"
          >
          </nz-option>
        </nz-option-group>
        <nz-option
          *ngIf="!item.group"
          [nzValue]="item.value"
          [nzDisabled]="item.disabled"
          [nzLabel]="item.label"
        ></nz-option>
      </ng-container>
    </nz-select>
  `, isInline: true, components: [{ type: i1.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzStatus", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i1.NzOptionGroupComponent, selector: "nz-option-group", inputs: ["nzLabel"], exportAs: ["nzOptionGroup"] }, { type: i1.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i4.AsyncPipe, "formlySelectOptions": i5.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-nz-select',
                    template: `
    <nz-select
      [class.ng-dirty]="showError"
      [nzPlaceHolder]="props.placeholder"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzMode]="props.multiple ? 'multiple' : 'default'"
      (ngModelChange)="props.change && props.change(field, $event)"
    >
      <ng-container *ngFor="let item of props.options | formlySelectOptions : field | async">
        <nz-option-group *ngIf="item.group" [nzLabel]="item.label">
          <nz-option
            *ngFor="let child of item.group"
            [nzValue]="child.value"
            [nzDisabled]="child.disabled"
            [nzLabel]="child.label"
          >
          </nz-option>
        </nz-option-group>
        <nz-option
          *ngIf="!item.group"
          [nzValue]="item.value"
          [nzDisabled]="item.disabled"
          [nzLabel]="item.label"
        ></nz-option>
      </ng-container>
    </nz-select>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class FormlyNzSelectModule {
}
FormlyNzSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNzSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzSelectModule, declarations: [FormlyFieldSelect], imports: [CommonModule,
        ReactiveFormsModule,
        NzSelectModule,
        FormlyNzFormFieldModule,
        FormlySelectModule, i3.FormlyModule] });
FormlyNzSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzSelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzSelectModule,
            FormlyNzFormFieldModule,
            FormlySelectModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldSelect],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzSelectModule,
                        FormlyNzFormFieldModule,
                        FormlySelectModule,
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

export { FormlyFieldSelect, FormlyNzSelectModule };
//# sourceMappingURL=ngx-formly-ng-zorro-antd-select.mjs.map
