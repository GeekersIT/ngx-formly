import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/select";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-formly/core";
import * as i4 from "@angular/common";
import * as i5 from "@ngx-formly/core/select";
export class FormlyFieldSelect extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvbmctem9ycm8tYW50ZC9zZWxlY3Qvc3JjL3NlbGVjdC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBc0MsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztBQTRDakYsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFNBQXVDOzsrR0FBakUsaUJBQWlCO21HQUFqQixpQkFBaUIscUZBOUJsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUOzRGQUdVLGlCQUFpQjtrQkFoQzdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZFR5cGVDb25maWcsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFByb3BzIH0gZnJvbSAnQG5neC1mb3JtbHkvbmctem9ycm8tYW50ZC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZvcm1seUZpZWxkU2VsZWN0UHJvcHMgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlL3NlbGVjdCc7XG5cbmludGVyZmFjZSBTZWxlY3RQcm9wcyBleHRlbmRzIEZvcm1seUZpZWxkUHJvcHMsIEZvcm1seUZpZWxkU2VsZWN0UHJvcHMge1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5U2VsZWN0RmllbGRDb25maWcgZXh0ZW5kcyBGb3JtbHlGaWVsZENvbmZpZzxTZWxlY3RQcm9wcz4ge1xuICB0eXBlOiAnc2VsZWN0JyB8IFR5cGU8Rm9ybWx5RmllbGRTZWxlY3Q+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbnotc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotc2VsZWN0XG4gICAgICBbY2xhc3MubmctZGlydHldPVwic2hvd0Vycm9yXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInByb3BzLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbbnpNb2RlXT1cInByb3BzLm11bHRpcGxlID8gJ211bHRpcGxlJyA6ICdkZWZhdWx0J1wiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJwcm9wcy5jaGFuZ2UgJiYgcHJvcHMuY2hhbmdlKGZpZWxkLCAkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHByb3BzLm9wdGlvbnMgfCBmb3JtbHlTZWxlY3RPcHRpb25zIDogZmllbGQgfCBhc3luY1wiPlxuICAgICAgICA8bnotb3B0aW9uLWdyb3VwICpuZ0lmPVwiaXRlbS5ncm91cFwiIFtuekxhYmVsXT1cIml0ZW0ubGFiZWxcIj5cbiAgICAgICAgICA8bnotb3B0aW9uXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgaXRlbS5ncm91cFwiXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJjaGlsZC52YWx1ZVwiXG4gICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJjaGlsZC5kaXNhYmxlZFwiXG4gICAgICAgICAgICBbbnpMYWJlbF09XCJjaGlsZC5sYWJlbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvbnotb3B0aW9uPlxuICAgICAgICA8L256LW9wdGlvbi1ncm91cD5cbiAgICAgICAgPG56LW9wdGlvblxuICAgICAgICAgICpuZ0lmPVwiIWl0ZW0uZ3JvdXBcIlxuICAgICAgICAgIFtuelZhbHVlXT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgIFtuekRpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIlxuICAgICAgICAgIFtuekxhYmVsXT1cIml0ZW0ubGFiZWxcIlxuICAgICAgICA+PC9uei1vcHRpb24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L256LXNlbGVjdD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkU2VsZWN0IGV4dGVuZHMgRmllbGRUeXBlPEZpZWxkVHlwZUNvbmZpZzxTZWxlY3RQcm9wcz4+IHt9XG4iXX0=