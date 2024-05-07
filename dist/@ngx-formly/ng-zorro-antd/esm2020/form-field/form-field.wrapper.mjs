import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/form";
import * as i2 from "@ngx-formly/core";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "@angular/common";
export class FormlyWrapperFormField extends FieldWrapper {
    get errorState() {
        return this.showError ? 'error' : '';
    }
}
FormlyWrapperFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyWrapperFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyWrapperFormField, selector: "formly-wrapper-nz-form-field", usesInheritance: true, ngImport: i0, template: `
    <nz-form-item>
      <ng-container *ngIf="props.label && props.hideLabel !== true">
        <nz-form-label [nzRequired]="props.required && props.hideRequiredMarker !== true" [nzFor]="id">
          {{ props.label }}
        </nz-form-label>
      </ng-container>
      <nz-form-control [nzValidateStatus]="errorState" [nzErrorTip]="errorTpl" [nzExtra]="props.description">
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTpl let-control>
          <formly-validation-message [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `, isInline: true, components: [{ type: i1.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { type: i1.NzFormLabelComponent, selector: "nz-form-label", inputs: ["nzFor", "nzRequired", "nzNoColon", "nzTooltipTitle", "nzTooltipIcon"], exportAs: ["nzFormLabel"] }, { type: i1.NzFormControlComponent, selector: "nz-form-control", inputs: ["nzSuccessTip", "nzWarningTip", "nzErrorTip", "nzValidatingTip", "nzExtra", "nzAutoTips", "nzDisableAutoTips", "nzHasFeedback", "nzValidateStatus"], exportAs: ["nzFormControl"] }, { type: i2.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i3.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-wrapper-nz-form-field',
                    template: `
    <nz-form-item>
      <ng-container *ngIf="props.label && props.hideLabel !== true">
        <nz-form-label [nzRequired]="props.required && props.hideRequiredMarker !== true" [nzFor]="id">
          {{ props.label }}
        </nz-form-label>
      </ng-container>
      <nz-form-control [nzValidateStatus]="errorState" [nzErrorTip]="errorTpl" [nzExtra]="props.description">
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTpl let-control>
          <formly-validation-message [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL25nLXpvcnJvLWFudGQvZm9ybS1maWVsZC9zcmMvZm9ybS1maWVsZC53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBK0QsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBeUI3RyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsWUFBaUQ7SUFDM0YsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2QyxDQUFDOztvSEFIVSxzQkFBc0I7d0dBQXRCLHNCQUFzQiwyRkFoQnZCOzs7Ozs7Ozs7Ozs7OztHQWNUOzRGQUVVLHNCQUFzQjtrQkFsQmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFdyYXBwZXIsIEZvcm1seUZpZWxkQ29uZmlnLCBGb3JtbHlGaWVsZFByb3BzIGFzIENvcmVGb3JtbHlGaWVsZFByb3BzIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5RmllbGRQcm9wcyBleHRlbmRzIENvcmVGb3JtbHlGaWVsZFByb3BzIHtcbiAgaGlkZVJlcXVpcmVkTWFya2VyPzogYm9vbGVhbjtcbiAgaGlkZUxhYmVsPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LXdyYXBwZXItbnotZm9ybS1maWVsZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LWZvcm0taXRlbT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwcm9wcy5sYWJlbCAmJiBwcm9wcy5oaWRlTGFiZWwgIT09IHRydWVcIj5cbiAgICAgICAgPG56LWZvcm0tbGFiZWwgW256UmVxdWlyZWRdPVwicHJvcHMucmVxdWlyZWQgJiYgcHJvcHMuaGlkZVJlcXVpcmVkTWFya2VyICE9PSB0cnVlXCIgW256Rm9yXT1cImlkXCI+XG4gICAgICAgICAge3sgcHJvcHMubGFiZWwgfX1cbiAgICAgICAgPC9uei1mb3JtLWxhYmVsPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bnotZm9ybS1jb250cm9sIFtuelZhbGlkYXRlU3RhdHVzXT1cImVycm9yU3RhdGVcIiBbbnpFcnJvclRpcF09XCJlcnJvclRwbFwiIFtuekV4dHJhXT1cInByb3BzLmRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgI2ZpZWxkQ29tcG9uZW50PjwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Vycm9yVHBsIGxldC1jb250cm9sPlxuICAgICAgICAgIDxmb3JtbHktdmFsaWRhdGlvbi1tZXNzYWdlIFtmaWVsZF09XCJmaWVsZFwiPjwvZm9ybWx5LXZhbGlkYXRpb24tbWVzc2FnZT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbnotZm9ybS1jb250cm9sPlxuICAgIDwvbnotZm9ybS1pdGVtPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlXcmFwcGVyRm9ybUZpZWxkIGV4dGVuZHMgRmllbGRXcmFwcGVyPEZvcm1seUZpZWxkQ29uZmlnPEZvcm1seUZpZWxkUHJvcHM+PiB7XG4gIGdldCBlcnJvclN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnNob3dFcnJvciA/ICdlcnJvcicgOiAnJztcbiAgfVxufVxuIl19