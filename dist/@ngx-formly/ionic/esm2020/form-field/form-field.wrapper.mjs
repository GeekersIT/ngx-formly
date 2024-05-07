import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@ngx-formly/core";
import * as i3 from "@angular/common";
export class FormlyWrapperFormField extends FieldWrapper {
}
FormlyWrapperFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyWrapperFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyWrapperFormField, selector: "formly-wrapper-ion-form-field", usesInheritance: true, ngImport: i0, template: `
    <ion-item [lines]="props.itemLines">
      <ion-label [position]="props.labelPosition" *ngIf="props.legacyLabel">
        {{ props.label }}
        <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true">*</span>
      </ion-label>
      <ng-template #fieldComponent></ng-template>
    </ion-item>
    <ion-item lines="none" *ngIf="showError">
      <ion-label>
        <ion-text color="danger">
          <p>
            <formly-validation-message [field]="field"></formly-validation-message>
          </p>
        </ion-text>
      </ion-label>
    </ion-item>
  `, isInline: true, components: [{ type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonText, selector: "ion-text", inputs: ["color", "mode"] }, { type: i2.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-wrapper-ion-form-field',
                    template: `
    <ion-item [lines]="props.itemLines">
      <ion-label [position]="props.labelPosition" *ngIf="props.legacyLabel">
        {{ props.label }}
        <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true">*</span>
      </ion-label>
      <ng-template #fieldComponent></ng-template>
    </ion-item>
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC53cmFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL2lvbmljL2Zvcm0tZmllbGQvc3JjL2Zvcm0tZmllbGQud3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxZQUFZLEVBQStELE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBOEI3RyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsWUFBaUQ7O29IQUFoRixzQkFBc0I7d0dBQXRCLHNCQUFzQiw0RkFuQnZCOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDs0RkFFVSxzQkFBc0I7a0JBckJsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbkl0ZW0sIElvbkxhYmVsIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgRmllbGRXcmFwcGVyLCBGb3JtbHlGaWVsZENvbmZpZywgRm9ybWx5RmllbGRQcm9wcyBhcyBDb3JlRm9ybWx5RmllbGRQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seUZpZWxkUHJvcHMgZXh0ZW5kcyBDb3JlRm9ybWx5RmllbGRQcm9wcyB7XG4gIGhpZGVSZXF1aXJlZE1hcmtlcj86IGJvb2xlYW47XG4gIGl0ZW1MaW5lcz86IElvbkl0ZW1bJ2xpbmVzJ107XG4gIGxhYmVsUG9zaXRpb24/OiBJb25MYWJlbFsncG9zaXRpb24nXTtcbiAgbGVnYWN5TGFiZWw/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktd3JhcHBlci1pb24tZm9ybS1maWVsZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlvbi1pdGVtIFtsaW5lc109XCJwcm9wcy5pdGVtTGluZXNcIj5cbiAgICAgIDxpb24tbGFiZWwgW3Bvc2l0aW9uXT1cInByb3BzLmxhYmVsUG9zaXRpb25cIiAqbmdJZj1cInByb3BzLmxlZ2FjeUxhYmVsXCI+XG4gICAgICAgIHt7IHByb3BzLmxhYmVsIH19XG4gICAgICAgIDxzcGFuICpuZ0lmPVwicHJvcHMucmVxdWlyZWQgJiYgcHJvcHMuaGlkZVJlcXVpcmVkTWFya2VyICE9PSB0cnVlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+Kjwvc3Bhbj5cbiAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPG5nLXRlbXBsYXRlICNmaWVsZENvbXBvbmVudD48L25nLXRlbXBsYXRlPlxuICAgIDwvaW9uLWl0ZW0+XG4gICAgPGlvbi1pdGVtIGxpbmVzPVwibm9uZVwiICpuZ0lmPVwic2hvd0Vycm9yXCI+XG4gICAgICA8aW9uLWxhYmVsPlxuICAgICAgICA8aW9uLXRleHQgY29sb3I9XCJkYW5nZXJcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxmb3JtbHktdmFsaWRhdGlvbi1tZXNzYWdlIFtmaWVsZF09XCJmaWVsZFwiPjwvZm9ybWx5LXZhbGlkYXRpb24tbWVzc2FnZT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvaW9uLXRleHQ+XG4gICAgICA8L2lvbi1sYWJlbD5cbiAgICA8L2lvbi1pdGVtPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlXcmFwcGVyRm9ybUZpZWxkIGV4dGVuZHMgRmllbGRXcmFwcGVyPEZvcm1seUZpZWxkQ29uZmlnPEZvcm1seUZpZWxkUHJvcHM+PiB7fVxuIl19