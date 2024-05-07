import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "primeng/dropdown";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-formly/core";
import * as i4 from "@angular/common";
import * as i5 from "@ngx-formly/core/select";
export class FormlyFieldSelect extends FieldType {
}
FormlyFieldSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldSelect, selector: "formly-field-primeng-select", usesInheritance: true, ngImport: i0, template: `
    <p-dropdown
      [placeholder]="props.placeholder"
      [options]="props.options | formlySelectOptions : field | async"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [showClear]="!props.required"
      [appendTo]="props.appendTo"
      [filter]="props.filter"
      (onChange)="props.change && props.change(field, $event)"
    >
    </p-dropdown>
  `, isInline: true, components: [{ type: i1.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }], directives: [{ type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], pipes: { "async": i4.AsyncPipe, "formlySelectOptions": i5.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-primeng-select',
                    template: `
    <p-dropdown
      [placeholder]="props.placeholder"
      [options]="props.options | formlySelectOptions : field | async"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [showClear]="!props.required"
      [appendTo]="props.appendTo"
      [filter]="props.filter"
      (onChange)="props.change && props.change(field, $event)"
    >
    </p-dropdown>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvcHJpbWVuZy9zZWxlY3Qvc3JjL3NlbGVjdC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBc0MsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztBQThCakYsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFNBQXVDOzsrR0FBakUsaUJBQWlCO21HQUFqQixpQkFBaUIsMEZBZmxCOzs7Ozs7Ozs7Ozs7R0FZVDs0RkFHVSxpQkFBaUI7a0JBakI3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZFR5cGVDb25maWcsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFByb3BzIH0gZnJvbSAnQG5neC1mb3JtbHkvcHJpbWVuZy9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZvcm1seUZpZWxkU2VsZWN0UHJvcHMgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlL3NlbGVjdCc7XG5cbmludGVyZmFjZSBTZWxlY3RQcm9wcyBleHRlbmRzIEZvcm1seUZpZWxkUHJvcHMsIEZvcm1seUZpZWxkU2VsZWN0UHJvcHMge1xuICBhcHBlbmRUbz86IGFueTtcbiAgZmlsdGVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtbHlTZWxlY3RGaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPFNlbGVjdFByb3BzPiB7XG4gIHR5cGU6ICdzZWxlY3QnIHwgVHlwZTxGb3JtbHlGaWVsZFNlbGVjdD47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1wcmltZW5nLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHAtZHJvcGRvd25cbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwcm9wcy5wbGFjZWhvbGRlclwiXG4gICAgICBbb3B0aW9uc109XCJwcm9wcy5vcHRpb25zIHwgZm9ybWx5U2VsZWN0T3B0aW9ucyA6IGZpZWxkIHwgYXN5bmNcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcbiAgICAgIFtzaG93Q2xlYXJdPVwiIXByb3BzLnJlcXVpcmVkXCJcbiAgICAgIFthcHBlbmRUb109XCJwcm9wcy5hcHBlbmRUb1wiXG4gICAgICBbZmlsdGVyXT1cInByb3BzLmZpbHRlclwiXG4gICAgICAob25DaGFuZ2UpPVwicHJvcHMuY2hhbmdlICYmIHByb3BzLmNoYW5nZShmaWVsZCwgJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvcC1kcm9wZG93bj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkU2VsZWN0IGV4dGVuZHMgRmllbGRUeXBlPEZpZWxkVHlwZUNvbmZpZzxTZWxlY3RQcm9wcz4+IHt9XG4iXX0=