import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@nativescript/angular";
import * as i2 from "@ngx-formly/core";
import * as i3 from "@angular/forms";
export class FormlyFieldTextArea extends FieldType {
}
FormlyFieldTextArea.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldTextArea.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldTextArea, selector: "formly-field-ns-textarea", usesInheritance: true, ngImport: i0, template: `
    <TextView
      class="input"
      [formlyAttributes]="field"
      [formControl]="formControl"
      [hint]="props.hint"
      [autocorrect]="props.autocorrect"
      [keyboardType]="props.keyboardType"
    >
    </TextView>
  `, isInline: true, directives: [{ type: i1.TextValueAccessor, selector: "TextField[ngModel],TextField[formControlName],TextField[formControl],textField[ngModel],textField[formControlName],textField[formControl],textfield[ngModel],textfield[formControlName],textfield[formControl],text-field[ngModel],text-field[formControlName],text-field[formControl],TextView[ngModel],TextView[formControlName],TextView[formControl],textView[ngModel],textView[formControlName],textView[formControl],textview[ngModel],textview[formControlName],textview[formControl],text-view[ngModel],text-view[formControlName],text-view[formControl],SearchBar[ngModel],SearchBar[formControlName],SearchBar[formControl],searchBar[ngModel],searchBar[formControlName],searchBar[formControl],searchbar[ngModel],searchbar[formControlName],searchbar[formControl],search-bar[ngModel], search-bar[formControlName],search-bar[formControl]" }, { type: i2.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldTextArea, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ns-textarea',
                    template: `
    <TextView
      class="input"
      [formlyAttributes]="field"
      [formControl]="formControl"
      [hint]="props.hint"
      [autocorrect]="props.autocorrect"
      [keyboardType]="props.keyboardType"
    >
    </TextView>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9uYXRpdmVzY3JpcHQvdGV4dGFyZWEvc3JjL3RleHRhcmVhLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFzQyxNQUFNLGtCQUFrQixDQUFDOzs7OztBQTRCakYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQXlDOztpSEFBckUsbUJBQW1CO3FHQUFuQixtQkFBbUIsdUZBYnBCOzs7Ozs7Ozs7O0dBVVQ7NEZBR1UsbUJBQW1CO2tCQWYvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSwgRmllbGRUeXBlQ29uZmlnLCBGb3JtbHlGaWVsZENvbmZpZyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L25hdGl2ZXNjcmlwdC9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIFRleHRBcmVhUHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHtcbiAgaGludD86IHN0cmluZztcbiAgYXV0b2NvcnJlY3Q/OiBib29sZWFuO1xuICBrZXlib2FyZFR5cGU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5VGV4dEFyZWFGaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPFRleHRBcmVhUHJvcHM+IHtcbiAgdHlwZTogJ3RleHRhcmVhJyB8IFR5cGU8Rm9ybWx5RmllbGRUZXh0QXJlYT47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1ucy10ZXh0YXJlYScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPFRleHRWaWV3XG4gICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICBbaGludF09XCJwcm9wcy5oaW50XCJcbiAgICAgIFthdXRvY29ycmVjdF09XCJwcm9wcy5hdXRvY29ycmVjdFwiXG4gICAgICBba2V5Ym9hcmRUeXBlXT1cInByb3BzLmtleWJvYXJkVHlwZVwiXG4gICAgPlxuICAgIDwvVGV4dFZpZXc+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFRleHRBcmVhIGV4dGVuZHMgRmllbGRUeXBlPEZpZWxkVHlwZUNvbmZpZzxUZXh0QXJlYVByb3BzPj4ge31cbiJdfQ==