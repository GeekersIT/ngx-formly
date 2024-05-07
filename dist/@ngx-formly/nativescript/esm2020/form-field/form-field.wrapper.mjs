import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
import * as i2 from "@angular/common";
export class FormlyWrapperFormField extends FieldWrapper {
}
FormlyWrapperFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyWrapperFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyWrapperFormField, selector: "formly-wrapper-ns-form-field", usesInheritance: true, ngImport: i0, template: `
    <StackLayout class="form">
      <StackLayout class="input-field">
        <Label *ngIf="props.label && props.hideLabel !== true" class="label" [text]="props.label"></Label>
        <ng-container #fieldComponent></ng-container>
        <StackLayout class="hr-light"></StackLayout>
        <ng-container *ngIf="showError">
          <formly-validation-message #validationMessage [field]="field"></formly-validation-message>
          <Label class="text-danger" [text]="validationMessage.errorMessage"></Label>
        </ng-container>
      </StackLayout>
    </StackLayout>
  `, isInline: true, components: [{ type: i1.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-wrapper-ns-form-field',
                    template: `
    <StackLayout class="form">
      <StackLayout class="input-field">
        <Label *ngIf="props.label && props.hideLabel !== true" class="label" [text]="props.label"></Label>
        <ng-container #fieldComponent></ng-container>
        <StackLayout class="hr-light"></StackLayout>
        <ng-container *ngIf="showError">
          <formly-validation-message #validationMessage [field]="field"></formly-validation-message>
          <Label class="text-danger" [text]="validationMessage.errorMessage"></Label>
        </ng-container>
      </StackLayout>
    </StackLayout>
  `,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL25hdGl2ZXNjcmlwdC9mb3JtLWZpZWxkL3NyYy9mb3JtLWZpZWxkLndyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUErRCxNQUFNLGtCQUFrQixDQUFDOzs7O0FBc0I3RyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsWUFBaUQ7O29IQUFoRixzQkFBc0I7d0dBQXRCLHNCQUFzQiwyRkFkdkI7Ozs7Ozs7Ozs7OztHQVlUOzRGQUVVLHNCQUFzQjtrQkFoQmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRXcmFwcGVyLCBGb3JtbHlGaWVsZENvbmZpZywgRm9ybWx5RmllbGRQcm9wcyBhcyBDb3JlRm9ybWx5RmllbGRQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seUZpZWxkUHJvcHMgZXh0ZW5kcyBDb3JlRm9ybWx5RmllbGRQcm9wcyB7XG4gIGhpZGVMYWJlbD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS13cmFwcGVyLW5zLWZvcm0tZmllbGQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgIDxMYWJlbCAqbmdJZj1cInByb3BzLmxhYmVsICYmIHByb3BzLmhpZGVMYWJlbCAhPT0gdHJ1ZVwiIGNsYXNzPVwibGFiZWxcIiBbdGV4dF09XCJwcm9wcy5sYWJlbFwiPjwvTGFiZWw+XG4gICAgICAgIDxuZy1jb250YWluZXIgI2ZpZWxkQ29tcG9uZW50PjwvbmctY29udGFpbmVyPlxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93RXJyb3JcIj5cbiAgICAgICAgICA8Zm9ybWx5LXZhbGlkYXRpb24tbWVzc2FnZSAjdmFsaWRhdGlvbk1lc3NhZ2UgW2ZpZWxkXT1cImZpZWxkXCI+PC9mb3JtbHktdmFsaWRhdGlvbi1tZXNzYWdlPlxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInRleHQtZGFuZ2VyXCIgW3RleHRdPVwidmFsaWRhdGlvbk1lc3NhZ2UuZXJyb3JNZXNzYWdlXCI+PC9MYWJlbD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seVdyYXBwZXJGb3JtRmllbGQgZXh0ZW5kcyBGaWVsZFdyYXBwZXI8Rm9ybWx5RmllbGRDb25maWc8Rm9ybWx5RmllbGRQcm9wcz4+IHt9XG4iXX0=