import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { action } from '@nativescript/core/ui/dialogs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ngx-formly/core/select";
export class FormlyFieldSelect extends FieldType {
    tap(options) {
        action({ title: this.props.label, actions: options.map((o) => o.label) }).then((selectedAction) => this.formControl.patchValue(options.find((o) => o.label === selectedAction).value));
    }
    selectedItem(options) {
        if (this.formControl.value) {
            return options.find((o) => o.value === this.formControl.value).label;
        }
        return this.props.placeholder;
    }
}
FormlyFieldSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldSelect, selector: "formly-field-ns-select", usesInheritance: true, ngImport: i0, template: `
    <ng-container *ngIf="props.options | formlySelectOptions : field | async as options">
      <Button (tap)="tap(options)" [text]="selectedItem(options)"></Button>
    </ng-container>
  `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i1.AsyncPipe, "formlySelectOptions": i2.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ns-select',
                    template: `
    <ng-container *ngIf="props.options | formlySelectOptions : field | async as options">
      <Button (tap)="tap(options)" [text]="selectedItem(options)"></Button>
    </ng-container>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvbmF0aXZlc2NyaXB0L3NlbGVjdC9zcmMvc2VsZWN0LnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFzQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQW1CdkQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFNBQXVDO0lBQzVFLEdBQUcsQ0FBQyxPQUFjO1FBQ2hCLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUNoRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUNuRixDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFjO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDMUIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3RFO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUNoQyxDQUFDOzsrR0FiVSxpQkFBaUI7bUdBQWpCLGlCQUFpQixxRkFQbEI7Ozs7R0FJVDs0RkFHVSxpQkFBaUI7a0JBVDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZFR5cGVDb25maWcsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFByb3BzIH0gZnJvbSAnQG5neC1mb3JtbHkvbmF0aXZlc2NyaXB0L2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRTZWxlY3RQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUvc2VsZWN0JztcblxuaW50ZXJmYWNlIFNlbGVjdFByb3BzIGV4dGVuZHMgRm9ybWx5RmllbGRQcm9wcywgRm9ybWx5RmllbGRTZWxlY3RQcm9wcyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seVNlbGVjdEZpZWxkQ29uZmlnIGV4dGVuZHMgRm9ybWx5RmllbGRDb25maWc8U2VsZWN0UHJvcHM+IHtcbiAgdHlwZTogJ3NlbGVjdCcgfCBUeXBlPEZvcm1seUZpZWxkU2VsZWN0Pjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLW5zLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInByb3BzLm9wdGlvbnMgfCBmb3JtbHlTZWxlY3RPcHRpb25zIDogZmllbGQgfCBhc3luYyBhcyBvcHRpb25zXCI+XG4gICAgICA8QnV0dG9uICh0YXApPVwidGFwKG9wdGlvbnMpXCIgW3RleHRdPVwic2VsZWN0ZWRJdGVtKG9wdGlvbnMpXCI+PC9CdXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFNlbGVjdCBleHRlbmRzIEZpZWxkVHlwZTxGaWVsZFR5cGVDb25maWc8U2VsZWN0UHJvcHM+PiB7XG4gIHRhcChvcHRpb25zOiBhbnlbXSkge1xuICAgIGFjdGlvbih7IHRpdGxlOiB0aGlzLnByb3BzLmxhYmVsLCBhY3Rpb25zOiBvcHRpb25zLm1hcCgobykgPT4gby5sYWJlbCkgfSkudGhlbigoc2VsZWN0ZWRBY3Rpb24pID0+XG4gICAgICB0aGlzLmZvcm1Db250cm9sLnBhdGNoVmFsdWUob3B0aW9ucy5maW5kKChvKSA9PiBvLmxhYmVsID09PSBzZWxlY3RlZEFjdGlvbikudmFsdWUpLFxuICAgICk7XG4gIH1cblxuICBzZWxlY3RlZEl0ZW0ob3B0aW9uczogYW55W10pIHtcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZmluZCgobykgPT4gby52YWx1ZSA9PT0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSkubGFiZWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG4gIH1cbn1cbiJdfQ==