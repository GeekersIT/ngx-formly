import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@nativescript/angular";
import * as i2 from "@ngx-formly/core";
import * as i3 from "@angular/forms";
export class FormlyFieldInput extends FieldType {
}
FormlyFieldInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldInput, selector: "formly-field-ns-input", usesInheritance: true, ngImport: i0, template: `
    <TextField
      class="input"
      [formlyAttributes]="field"
      [formControl]="formControl"
      [autocorrect]="props.autocorrect"
      [secure]="props.secure"
      [hint]="props.hint"
      [keyboardType]="props.keyboardType"
    >
    </TextField>
  `, isInline: true, directives: [{ type: i1.TextValueAccessor, selector: "TextField[ngModel],TextField[formControlName],TextField[formControl],textField[ngModel],textField[formControlName],textField[formControl],textfield[ngModel],textfield[formControlName],textfield[formControl],text-field[ngModel],text-field[formControlName],text-field[formControl],TextView[ngModel],TextView[formControlName],TextView[formControl],textView[ngModel],textView[formControlName],textView[formControl],textview[ngModel],textview[formControlName],textview[formControl],text-view[ngModel],text-view[formControlName],text-view[formControl],SearchBar[ngModel],SearchBar[formControlName],SearchBar[formControl],searchBar[ngModel],searchBar[formControlName],searchBar[formControl],searchbar[ngModel],searchbar[formControlName],searchbar[formControl],search-bar[ngModel], search-bar[formControlName],search-bar[formControl]" }, { type: i2.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldInput, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ns-input',
                    template: `
    <TextField
      class="input"
      [formlyAttributes]="field"
      [formControl]="formControl"
      [autocorrect]="props.autocorrect"
      [secure]="props.secure"
      [hint]="props.hint"
      [keyboardType]="props.keyboardType"
    >
    </TextField>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC50eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL25hdGl2ZXNjcmlwdC90ZXh0LWZpZWxkL3NyYy90ZXh0LWZpZWxkLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFzQyxNQUFNLGtCQUFrQixDQUFDOzs7OztBQThCakYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQXNDOzs4R0FBL0QsZ0JBQWdCO2tHQUFoQixnQkFBZ0Isb0ZBZGpCOzs7Ozs7Ozs7OztHQVdUOzRGQUdVLGdCQUFnQjtrQkFoQjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSwgRmllbGRUeXBlQ29uZmlnLCBGb3JtbHlGaWVsZENvbmZpZyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L25hdGl2ZXNjcmlwdC9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHtcbiAgYXV0b2NvcnJlY3Q/OiBib29sZWFuO1xuICBzZWN1cmU/OiBib29sZWFuO1xuICBoaW50Pzogc3RyaW5nO1xuICBrZXlib2FyZFR5cGU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5SW5wdXRGaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPElucHV0UHJvcHM+IHtcbiAgdHlwZTogJ2lucHV0JyB8IFR5cGU8Rm9ybWx5RmllbGRJbnB1dD47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1ucy1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPFRleHRGaWVsZFxuICAgICAgY2xhc3M9XCJpbnB1dFwiXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2F1dG9jb3JyZWN0XT1cInByb3BzLmF1dG9jb3JyZWN0XCJcbiAgICAgIFtzZWN1cmVdPVwicHJvcHMuc2VjdXJlXCJcbiAgICAgIFtoaW50XT1cInByb3BzLmhpbnRcIlxuICAgICAgW2tleWJvYXJkVHlwZV09XCJwcm9wcy5rZXlib2FyZFR5cGVcIlxuICAgID5cbiAgICA8L1RleHRGaWVsZD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkSW5wdXQgZXh0ZW5kcyBGaWVsZFR5cGU8RmllbGRUeXBlQ29uZmlnPElucHV0UHJvcHM+PiB7fVxuIl19