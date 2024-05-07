import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ngx-formly/core/select";
export class FormlyFieldRadio extends FieldType {
    tap(id) {
        const value = this.formControl.value === id ? null : id;
        setTimeout(() => {
            this.formControl.patchValue(value);
            this.formControl.markAsTouched();
        }, 100);
    }
}
FormlyFieldRadio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldRadio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldRadio, selector: "formly-field-ns-radio", usesInheritance: true, ngImport: i0, template: `
    <ng-container *ngFor="let option of props.options | formlySelectOptions : field | async">
      <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
        <Label class="label" [text]="option.label"></Label>
        <Switch col="1" class="switch input" [checked]="formControl.value === option.value" (tap)="tap(option.value)">
        </Switch>
      </GridLayout>
    </ng-container>
  `, isInline: true, directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i1.AsyncPipe, "formlySelectOptions": i2.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ns-radio',
                    template: `
    <ng-container *ngFor="let option of props.options | formlySelectOptions : field | async">
      <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
        <Label class="label" [text]="option.label"></Label>
        <Switch col="1" class="switch input" [checked]="formControl.value === option.value" (tap)="tap(option.value)">
        </Switch>
      </GridLayout>
    </ng-container>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8udHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9uYXRpdmVzY3JpcHQvcmFkaW8vc3JjL3JhZGlvLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFzQyxNQUFNLGtCQUFrQixDQUFDOzs7O0FBc0JqRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBc0M7SUFDMUUsR0FBRyxDQUFDLEVBQU87UUFDVCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7OzhHQVBVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLG9GQVhqQjs7Ozs7Ozs7R0FRVDs0RkFHVSxnQkFBZ0I7a0JBYjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSwgRmllbGRUeXBlQ29uZmlnLCBGb3JtbHlGaWVsZENvbmZpZyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L25hdGl2ZXNjcmlwdC9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIFJhZGlvUHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5UmFkaW9GaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPFJhZGlvUHJvcHM+IHtcbiAgdHlwZTogJ3JhZGlvJyB8IFR5cGU8Rm9ybWx5RmllbGRSYWRpbz47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1ucy1yYWRpbycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHByb3BzLm9wdGlvbnMgfCBmb3JtbHlTZWxlY3RPcHRpb25zIDogZmllbGQgfCBhc3luY1wiPlxuICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJpbnB1dC1maWVsZCBpbnB1dC1zaWRlc1wiIHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIiosKlwiPlxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYWJlbFwiIFt0ZXh0XT1cIm9wdGlvbi5sYWJlbFwiPjwvTGFiZWw+XG4gICAgICAgIDxTd2l0Y2ggY29sPVwiMVwiIGNsYXNzPVwic3dpdGNoIGlucHV0XCIgW2NoZWNrZWRdPVwiZm9ybUNvbnRyb2wudmFsdWUgPT09IG9wdGlvbi52YWx1ZVwiICh0YXApPVwidGFwKG9wdGlvbi52YWx1ZSlcIj5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFJhZGlvIGV4dGVuZHMgRmllbGRUeXBlPEZpZWxkVHlwZUNvbmZpZzxSYWRpb1Byb3BzPj4ge1xuICB0YXAoaWQ6IGFueSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSA9PT0gaWQgPyBudWxsIDogaWQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLnBhdGNoVmFsdWUodmFsdWUpO1xuICAgICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuIl19