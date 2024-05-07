import { Component, ViewChild } from '@angular/core';
import { FormFieldComponent } from '@progress/kendo-angular-inputs';
import { ɵdefineHiddenProp as defineHiddenProp, FieldWrapper, } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@progress/kendo-angular-inputs";
import * as i2 from "@ngx-formly/core";
import * as i3 from "@angular/common";
import * as i4 from "@progress/kendo-angular-label";
export class FormlyWrapperFormField extends FieldWrapper {
    ngOnInit() {
        defineHiddenProp(this.field, '_formField', this.formfield);
        defineHiddenProp(this.formfield, 'formControls', undefined);
        this.formfield['showErrorsInitial'] = () => this.showError;
        this.formfield['showHintsInitial'] = () => !this.showError;
        const disabledElement = this.formfield['disabledElement'].bind(this);
        this.formfield['disabledElement'] = () => {
            if (this.formfield.controlElementRefs.length === 0) {
                return false;
            }
            return disabledElement();
        };
    }
}
FormlyWrapperFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyWrapperFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyWrapperFormField, selector: "formly-wrapper-kendo-form-field", viewQueries: [{ propertyName: "formfield", first: true, predicate: FormFieldComponent, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <kendo-formfield [orientation]="props.orientation">
      <label *ngIf="props.label && props.hideLabel !== true" [for]="id">
        {{ props.label }}
        <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true" class="k-required">*</span>
      </label>

      <ng-container #fieldComponent></ng-container>

      <kendo-formhint *ngIf="props.description">{{ props.description }}</kendo-formhint>
      <kendo-formerror *ngIf="showError">
        <formly-validation-message [field]="field"></formly-validation-message>
      </kendo-formerror>
    </kendo-formfield>
  `, isInline: true, components: [{ type: i1.FormFieldComponent, selector: "kendo-formfield", inputs: ["showHints", "orientation", "showErrors"] }, { type: i1.HintComponent, selector: "kendo-formhint", inputs: ["align"] }, { type: i1.ErrorComponent, selector: "kendo-formerror", inputs: ["align"] }, { type: i2.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.LabelDirective, selector: "label[for]", inputs: ["for"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-wrapper-kendo-form-field',
                    template: `
    <kendo-formfield [orientation]="props.orientation">
      <label *ngIf="props.label && props.hideLabel !== true" [for]="id">
        {{ props.label }}
        <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true" class="k-required">*</span>
      </label>

      <ng-container #fieldComponent></ng-container>

      <kendo-formhint *ngIf="props.description">{{ props.description }}</kendo-formhint>
      <kendo-formerror *ngIf="showError">
        <formly-validation-message [field]="field"></formly-validation-message>
      </kendo-formerror>
    </kendo-formfield>
  `,
                }]
        }], propDecorators: { formfield: [{
                type: ViewChild,
                args: [FormFieldComponent, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL2tlbmRvL2Zvcm0tZmllbGQvc3JjL2Zvcm0tZmllbGQud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQWUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRixPQUFPLEVBQ0wsaUJBQWlCLElBQUksZ0JBQWdCLEVBQ3JDLFlBQVksR0FHYixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUEwQjFCLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxZQUFpRDtJQUczRixRQUFRO1FBQ04sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFM0QsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNsRCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDSixDQUFDOztvSEFqQlUsc0JBQXNCO3dHQUF0QixzQkFBc0Isa0hBQ3RCLGtCQUFrQixxRkFqQm5COzs7Ozs7Ozs7Ozs7OztHQWNUOzRGQUVVLHNCQUFzQjtrQkFsQmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2lCQUNGOzhCQUVrRCxTQUFTO3NCQUF6RCxTQUFTO3VCQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1GaWVsZENvbXBvbmVudCwgT3JpZW50YXRpb24gfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1pbnB1dHMnO1xuaW1wb3J0IHtcbiAgybVkZWZpbmVIaWRkZW5Qcm9wIGFzIGRlZmluZUhpZGRlblByb3AsXG4gIEZpZWxkV3JhcHBlcixcbiAgRm9ybWx5RmllbGRDb25maWcsXG4gIEZvcm1seUZpZWxkUHJvcHMgYXMgQ29yZUZvcm1seUZpZWxkUHJvcHMsXG59IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seUZpZWxkUHJvcHMgZXh0ZW5kcyBDb3JlRm9ybWx5RmllbGRQcm9wcyB7XG4gIGhpZGVSZXF1aXJlZE1hcmtlcj86IGJvb2xlYW47XG4gIGhpZGVMYWJlbD86IGJvb2xlYW47XG4gIG9yaWVudGF0aW9uPzogT3JpZW50YXRpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS13cmFwcGVyLWtlbmRvLWZvcm0tZmllbGQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxrZW5kby1mb3JtZmllbGQgW29yaWVudGF0aW9uXT1cInByb3BzLm9yaWVudGF0aW9uXCI+XG4gICAgICA8bGFiZWwgKm5nSWY9XCJwcm9wcy5sYWJlbCAmJiBwcm9wcy5oaWRlTGFiZWwgIT09IHRydWVcIiBbZm9yXT1cImlkXCI+XG4gICAgICAgIHt7IHByb3BzLmxhYmVsIH19XG4gICAgICAgIDxzcGFuICpuZ0lmPVwicHJvcHMucmVxdWlyZWQgJiYgcHJvcHMuaGlkZVJlcXVpcmVkTWFya2VyICE9PSB0cnVlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJrLXJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxuZy1jb250YWluZXIgI2ZpZWxkQ29tcG9uZW50PjwvbmctY29udGFpbmVyPlxuXG4gICAgICA8a2VuZG8tZm9ybWhpbnQgKm5nSWY9XCJwcm9wcy5kZXNjcmlwdGlvblwiPnt7IHByb3BzLmRlc2NyaXB0aW9uIH19PC9rZW5kby1mb3JtaGludD5cbiAgICAgIDxrZW5kby1mb3JtZXJyb3IgKm5nSWY9XCJzaG93RXJyb3JcIj5cbiAgICAgICAgPGZvcm1seS12YWxpZGF0aW9uLW1lc3NhZ2UgW2ZpZWxkXT1cImZpZWxkXCI+PC9mb3JtbHktdmFsaWRhdGlvbi1tZXNzYWdlPlxuICAgICAgPC9rZW5kby1mb3JtZXJyb3I+XG4gICAgPC9rZW5kby1mb3JtZmllbGQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seVdyYXBwZXJGb3JtRmllbGQgZXh0ZW5kcyBGaWVsZFdyYXBwZXI8Rm9ybWx5RmllbGRDb25maWc8Rm9ybWx5RmllbGRQcm9wcz4+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChGb3JtRmllbGRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGZvcm1maWVsZCE6IEZvcm1GaWVsZENvbXBvbmVudDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBkZWZpbmVIaWRkZW5Qcm9wKHRoaXMuZmllbGQsICdfZm9ybUZpZWxkJywgdGhpcy5mb3JtZmllbGQpO1xuICAgIGRlZmluZUhpZGRlblByb3AodGhpcy5mb3JtZmllbGQsICdmb3JtQ29udHJvbHMnLCB1bmRlZmluZWQpO1xuICAgIHRoaXMuZm9ybWZpZWxkWydzaG93RXJyb3JzSW5pdGlhbCddID0gKCkgPT4gdGhpcy5zaG93RXJyb3I7XG4gICAgdGhpcy5mb3JtZmllbGRbJ3Nob3dIaW50c0luaXRpYWwnXSA9ICgpID0+ICF0aGlzLnNob3dFcnJvcjtcblxuICAgIGNvbnN0IGRpc2FibGVkRWxlbWVudCA9IHRoaXMuZm9ybWZpZWxkWydkaXNhYmxlZEVsZW1lbnQnXS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9ybWZpZWxkWydkaXNhYmxlZEVsZW1lbnQnXSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmZvcm1maWVsZC5jb250cm9sRWxlbWVudFJlZnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpc2FibGVkRWxlbWVudCgpO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==