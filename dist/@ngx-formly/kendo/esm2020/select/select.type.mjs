import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/kendo/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-dropdowns";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-formly/core";
import * as i4 from "@angular/common";
import * as i5 from "@ngx-formly/core/select";
export class FormlyFieldSelect extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkva2VuZG8vc2VsZWN0L3NyYy9zZWxlY3QudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUEyQjNFLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUF1Qzs7K0dBQWpFLGlCQUFpQjttR0FBakIsaUJBQWlCLHdGQWRsQjs7Ozs7Ozs7Ozs7R0FXVDs0RkFHVSxpQkFBaUI7a0JBaEI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGVDb25maWcsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUsIEZvcm1seUZpZWxkUHJvcHMgfSBmcm9tICdAbmd4LWZvcm1seS9rZW5kby9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZvcm1seUZpZWxkU2VsZWN0UHJvcHMgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlL3NlbGVjdCc7XG5cbmludGVyZmFjZSBTZWxlY3RQcm9wcyBleHRlbmRzIEZvcm1seUZpZWxkUHJvcHMsIEZvcm1seUZpZWxkU2VsZWN0UHJvcHMge1xuICBwcmltaXRpdmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seVNlbGVjdEZpZWxkQ29uZmlnIGV4dGVuZHMgRm9ybWx5RmllbGRDb25maWc8U2VsZWN0UHJvcHM+IHtcbiAgdHlwZTogJ3NlbGVjdCcgfCBUeXBlPEZvcm1seUZpZWxkU2VsZWN0Pjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLWtlbmRvLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGtlbmRvLWRyb3Bkb3dubGlzdFxuICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcbiAgICAgIFtkYXRhXT1cInByb3BzLm9wdGlvbnMgfCBmb3JtbHlTZWxlY3RPcHRpb25zIDogZmllbGQgfCBhc3luY1wiXG4gICAgICBbdGV4dEZpZWxkXT1cIidsYWJlbCdcIlxuICAgICAgW3ZhbHVlRmllbGRdPVwiJ3ZhbHVlJ1wiXG4gICAgICBbdmFsdWVQcmltaXRpdmVdPVwicHJvcHMucHJpbWl0aXZlID8/IHRydWVcIlxuICAgICAgKHZhbHVlQ2hhbmdlKT1cInByb3BzLmNoYW5nZSAmJiBwcm9wcy5jaGFuZ2UoZmllbGQsICRldmVudClcIlxuICAgID5cbiAgICA8L2tlbmRvLWRyb3Bkb3dubGlzdD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkU2VsZWN0IGV4dGVuZHMgRmllbGRUeXBlPEZpZWxkVHlwZUNvbmZpZzxTZWxlY3RQcm9wcz4+IHt9XG4iXX0=