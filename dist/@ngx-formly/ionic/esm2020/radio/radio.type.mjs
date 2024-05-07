import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@ngx-formly/core";
import * as i3 from "@angular/forms";
import * as i4 from "@ngx-formly/ionic/form-field";
import * as i5 from "@angular/common";
import * as i6 from "@ngx-formly/core/select";
export class FormlyFieldRadio extends FieldType {
}
FormlyFieldRadio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldRadio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldRadio, selector: "formly-field-ion-radio", usesInheritance: true, ngImport: i0, template: `
    <ion-list>
      <ion-radio-group [formControl]="formControl" [ionFormlyAttributes]="field">
        <ion-list-header>{{ props.label }}</ion-list-header>
        <ion-item
          *ngFor="let option of props.options | formlySelectOptions : field | async"
          [disabled]="option.disabled || formControl.disabled"
        >
          <ion-label *ngIf="props.legacyLabel">{{ option.label }}</ion-label>
          <ion-radio [value]="option.value">
            {{ option.label }}
          </ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
    <ion-item lines="none" *ngIf="showError">
      <ion-label>
        <ion-text color="danger">
          <p>
            <formly-validation-message [field]="field"></formly-validation-message>
          </p>
        </ion-text>
      </ion-label>
    </ion-item>
  `, isInline: true, components: [{ type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { type: i1.IonRadioGroup, selector: "ion-radio-group", inputs: ["allowEmptySelection", "name", "value"] }, { type: i1.IonListHeader, selector: "ion-list-header", inputs: ["color", "lines", "mode"] }, { type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonRadio, selector: "ion-radio", inputs: ["color", "disabled", "mode", "name", "value"] }, { type: i1.IonText, selector: "ion-text", inputs: ["color", "mode"] }, { type: i2.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.RadioValueAccessor, selector: "ion-radio" }], pipes: { "async": i5.AsyncPipe, "formlySelectOptions": i6.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-radio',
                    template: `
    <ion-list>
      <ion-radio-group [formControl]="formControl" [ionFormlyAttributes]="field">
        <ion-list-header>{{ props.label }}</ion-list-header>
        <ion-item
          *ngFor="let option of props.options | formlySelectOptions : field | async"
          [disabled]="option.disabled || formControl.disabled"
        >
          <ion-label *ngIf="props.legacyLabel">{{ option.label }}</ion-label>
          <ion-radio [value]="option.value">
            {{ option.label }}
          </ion-radio>
        </ion-item>
      </ion-radio-group>
    </ion-list>
    <ion-item lines="none" *ngIf="showError">
      <ion-label>
        <ion-text color="danger">
          <p>
            <formly-validation-message [field]="field"></formly-validation-message>
          </p>
        </ion-text>
      </ion-label>
    </ion-item>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8udHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9pb25pYy9yYWRpby9zcmMvcmFkaW8udHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7O0FBc0NqRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBc0M7OzhHQUEvRCxnQkFBZ0I7a0dBQWhCLGdCQUFnQixxRkEzQmpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QlQ7NEZBR1UsZ0JBQWdCO2tCQTdCNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFR5cGUsIEZpZWxkVHlwZUNvbmZpZywgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZvcm1seUZpZWxkUHJvcHMgfSBmcm9tICdAbmd4LWZvcm1seS9pb25pYy9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIFJhZGlvUHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5UmFkaW9GaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPFJhZGlvUHJvcHM+IHtcbiAgdHlwZTogJ3JhZGlvJyB8IFR5cGU8Rm9ybWx5RmllbGRSYWRpbz47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1pb24tcmFkaW8nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpb24tbGlzdD5cbiAgICAgIDxpb24tcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCIgW2lvbkZvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIj5cbiAgICAgICAgPGlvbi1saXN0LWhlYWRlcj57eyBwcm9wcy5sYWJlbCB9fTwvaW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICA8aW9uLWl0ZW1cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHByb3BzLm9wdGlvbnMgfCBmb3JtbHlTZWxlY3RPcHRpb25zIDogZmllbGQgfCBhc3luY1wiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZCB8fCBmb3JtQ29udHJvbC5kaXNhYmxlZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWxhYmVsICpuZ0lmPVwicHJvcHMubGVnYWN5TGFiZWxcIj57eyBvcHRpb24ubGFiZWwgfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLXJhZGlvIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj5cbiAgICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fVxuICAgICAgICAgIDwvaW9uLXJhZGlvPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tcmFkaW8tZ3JvdXA+XG4gICAgPC9pb24tbGlzdD5cbiAgICA8aW9uLWl0ZW0gbGluZXM9XCJub25lXCIgKm5nSWY9XCJzaG93RXJyb3JcIj5cbiAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgIDxpb24tdGV4dCBjb2xvcj1cImRhbmdlclwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGZvcm1seS12YWxpZGF0aW9uLW1lc3NhZ2UgW2ZpZWxkXT1cImZpZWxkXCI+PC9mb3JtbHktdmFsaWRhdGlvbi1tZXNzYWdlPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9pb24tdGV4dD5cbiAgICAgIDwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLWl0ZW0+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFJhZGlvIGV4dGVuZHMgRmllbGRUeXBlPEZpZWxkVHlwZUNvbmZpZzxSYWRpb1Byb3BzPj4ge31cbiJdfQ==