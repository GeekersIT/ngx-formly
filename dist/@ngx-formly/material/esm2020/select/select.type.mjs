import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { FieldType } from '@ngx-formly/material/form-field';
import { ɵobserve as observe } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@ngx-formly/core";
import * as i5 from "@angular/common";
import * as i6 from "@ngx-formly/core/select";
export class FormlyFieldSelect extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            props: {
                compareWith(o1, o2) {
                    return o1 === o2;
                },
            },
        };
    }
    set select(select) {
        observe(select, ['_parentFormField', '_textField'], ({ currentValue }) => {
            if (currentValue) {
                select._preferredOverlayOrigin = select._parentFormField.getConnectedOverlayOrigin();
            }
        });
    }
    getSelectAllState(options) {
        if (this.empty || this.value.length === 0) {
            return null;
        }
        return this.value.length !== this.getSelectAllValue(options).length ? 'indeterminate' : 'checked';
    }
    toggleSelectAll(options) {
        const selectAllValue = this.getSelectAllValue(options);
        this.formControl.setValue(!this.value || this.value.length !== selectAllValue.length ? selectAllValue : []);
        this.formControl.markAsDirty();
    }
    change($event) {
        this.props.change?.(this.field, $event);
    }
    _getAriaLabelledby() {
        if (this.props.attributes?.['aria-labelledby']) {
            return this.props.attributes['aria-labelledby'];
        }
        return this.formField?._labelId;
    }
    _getAriaLabel() {
        return this.props.attributes?.['aria-label'];
    }
    getSelectAllValue(options) {
        if (!this.selectAllValue || options !== this.selectAllValue.options) {
            const flatOptions = [];
            options.forEach((o) => (o.group ? flatOptions.push(...o.group) : flatOptions.push(o)));
            this.selectAllValue = {
                options,
                value: flatOptions.filter((o) => !o.disabled).map((o) => o.value),
            };
        }
        return this.selectAllValue.value;
    }
}
FormlyFieldSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldSelect, selector: "formly-field-mat-select", viewQueries: [{ propertyName: "select", first: true, predicate: MatSelect, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <ng-template #selectAll let-selectOptions="selectOptions">
      <mat-option (click)="toggleSelectAll(selectOptions)">
        <mat-pseudo-checkbox class="mat-option-pseudo-checkbox" [state]="getSelectAllState(selectOptions)">
        </mat-pseudo-checkbox>
        {{ props.selectAllOption }}
      </mat-option>
    </ng-template>

    <mat-select
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [placeholder]="props.placeholder"
      [tabIndex]="props.tabindex"
      [required]="required"
      [compareWith]="props.compareWith"
      [multiple]="props.multiple"
      (selectionChange)="change($event)"
      [errorStateMatcher]="errorStateMatcher"
      [aria-label]="_getAriaLabel()"
      [aria-labelledby]="_getAriaLabelledby()"
      [disableOptionCentering]="props.disableOptionCentering"
      [typeaheadDebounceInterval]="props.typeaheadDebounceInterval"
      [panelClass]="props.panelClass"
    >
      <ng-container *ngIf="props.options | formlySelectOptions : field | async as selectOptions">
        <ng-container
          *ngIf="props.multiple && props.selectAllOption"
          [ngTemplateOutlet]="selectAll"
          [ngTemplateOutletContext]="{ selectOptions: selectOptions }"
        >
        </ng-container>
        <ng-container *ngFor="let item of selectOptions">
          <mat-optgroup *ngIf="item.group" [label]="item.label">
            <mat-option *ngFor="let child of item.group" [value]="child.value" [disabled]="child.disabled">
              {{ child.label }}
            </mat-option>
          </mat-optgroup>
          <mat-option *ngIf="!item.group" [value]="item.value" [disabled]="item.disabled">{{ item.label }}</mat-option>
        </ng-container>
      </ng-container>
    </mat-select>
  `, isInline: true, components: [{ type: i1.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i1.MatPseudoCheckbox, selector: "mat-pseudo-checkbox", inputs: ["state", "disabled"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i1.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }], directives: [{ type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i5.AsyncPipe, "formlySelectOptions": i6.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-mat-select',
                    template: `
    <ng-template #selectAll let-selectOptions="selectOptions">
      <mat-option (click)="toggleSelectAll(selectOptions)">
        <mat-pseudo-checkbox class="mat-option-pseudo-checkbox" [state]="getSelectAllState(selectOptions)">
        </mat-pseudo-checkbox>
        {{ props.selectAllOption }}
      </mat-option>
    </ng-template>

    <mat-select
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [placeholder]="props.placeholder"
      [tabIndex]="props.tabindex"
      [required]="required"
      [compareWith]="props.compareWith"
      [multiple]="props.multiple"
      (selectionChange)="change($event)"
      [errorStateMatcher]="errorStateMatcher"
      [aria-label]="_getAriaLabel()"
      [aria-labelledby]="_getAriaLabelledby()"
      [disableOptionCentering]="props.disableOptionCentering"
      [typeaheadDebounceInterval]="props.typeaheadDebounceInterval"
      [panelClass]="props.panelClass"
    >
      <ng-container *ngIf="props.options | formlySelectOptions : field | async as selectOptions">
        <ng-container
          *ngIf="props.multiple && props.selectAllOption"
          [ngTemplateOutlet]="selectAll"
          [ngTemplateOutletContext]="{ selectOptions: selectOptions }"
        >
        </ng-container>
        <ng-container *ngFor="let item of selectOptions">
          <mat-optgroup *ngIf="item.group" [label]="item.label">
            <mat-option *ngFor="let child of item.group" [value]="child.value" [disabled]="child.disabled">
              {{ child.label }}
            </mat-option>
          </mat-optgroup>
          <mat-option *ngIf="!item.group" [value]="item.value" [disabled]="item.disabled">{{ item.label }}</mat-option>
        </ng-container>
      </ng-container>
    </mat-select>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { select: [{
                type: ViewChild,
                args: [MatSelect, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvbWF0ZXJpYWwvc2VsZWN0L3NyYy9zZWxlY3QudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFRLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsU0FBUyxFQUFtQixNQUFNLDBCQUEwQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0saUNBQWlDLENBQUM7QUFFOUUsT0FBTyxFQUFFLFFBQVEsSUFBSSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7QUErRHZELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUF1QztJQWhEOUU7O1FBd0RXLG1CQUFjLEdBQUc7WUFDeEIsS0FBSyxFQUFFO2dCQUNMLFdBQVcsQ0FBQyxFQUFPLEVBQUUsRUFBTztvQkFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUNuQixDQUFDO2FBQ0Y7U0FDRixDQUFDO0tBK0NIO0lBNURDLElBQTRDLE1BQU0sQ0FBQyxNQUFXO1FBQzVELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRTtZQUN2RSxJQUFJLFlBQVksRUFBRTtnQkFDaEIsTUFBTSxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2FBQ3RGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBV0QsaUJBQWlCLENBQUMsT0FBYztRQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3BHLENBQUM7SUFFRCxlQUFlLENBQUMsT0FBYztRQUM1QixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQXVCO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQVcsQ0FBQztTQUMzRDtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsWUFBWSxDQUFXLENBQUM7SUFDekQsQ0FBQztJQUVPLGlCQUFpQixDQUFDLE9BQWM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ25FLE1BQU0sV0FBVyxHQUFVLEVBQUUsQ0FBQztZQUM5QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZGLElBQUksQ0FBQyxjQUFjLEdBQUc7Z0JBQ3BCLE9BQU87Z0JBQ1AsS0FBSyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNsRSxDQUFDO1NBQ0g7UUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7OytHQTVEVSxpQkFBaUI7bUdBQWpCLGlCQUFpQix1R0FDakIsU0FBUyxxRkEvQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ1Q7NEZBR1UsaUJBQWlCO2tCQWhEN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhCQUU2QyxNQUFNO3NCQUFqRCxTQUFTO3VCQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUeXBlLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNlbGVjdCwgTWF0U2VsZWN0Q2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IEZpZWxkVHlwZUNvbmZpZywgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSwgRm9ybWx5RmllbGRQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRTZWxlY3RQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUvc2VsZWN0JztcbmltcG9ydCB7IMm1b2JzZXJ2ZSBhcyBvYnNlcnZlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbmludGVyZmFjZSBTZWxlY3RQcm9wcyBleHRlbmRzIEZvcm1seUZpZWxkUHJvcHMsIEZvcm1seUZpZWxkU2VsZWN0UHJvcHMge1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIHNlbGVjdEFsbE9wdGlvbj86IHN0cmluZztcbiAgZGlzYWJsZU9wdGlvbkNlbnRlcmluZz86IGJvb2xlYW47XG4gIHR5cGVhaGVhZERlYm91bmNlSW50ZXJ2YWw/OiBudW1iZXI7XG4gIGNvbXBhcmVXaXRoPzogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XG4gIHBhbmVsQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5U2VsZWN0RmllbGRDb25maWcgZXh0ZW5kcyBGb3JtbHlGaWVsZENvbmZpZzxTZWxlY3RQcm9wcz4ge1xuICB0eXBlOiAnc2VsZWN0JyB8IFR5cGU8Rm9ybWx5RmllbGRTZWxlY3Q+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtbWF0LXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNzZWxlY3RBbGwgbGV0LXNlbGVjdE9wdGlvbnM9XCJzZWxlY3RPcHRpb25zXCI+XG4gICAgICA8bWF0LW9wdGlvbiAoY2xpY2spPVwidG9nZ2xlU2VsZWN0QWxsKHNlbGVjdE9wdGlvbnMpXCI+XG4gICAgICAgIDxtYXQtcHNldWRvLWNoZWNrYm94IGNsYXNzPVwibWF0LW9wdGlvbi1wc2V1ZG8tY2hlY2tib3hcIiBbc3RhdGVdPVwiZ2V0U2VsZWN0QWxsU3RhdGUoc2VsZWN0T3B0aW9ucylcIj5cbiAgICAgICAgPC9tYXQtcHNldWRvLWNoZWNrYm94PlxuICAgICAgICB7eyBwcm9wcy5zZWxlY3RBbGxPcHRpb24gfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG1hdC1zZWxlY3RcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInByb3BzLnBsYWNlaG9sZGVyXCJcbiAgICAgIFt0YWJJbmRleF09XCJwcm9wcy50YWJpbmRleFwiXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgW2NvbXBhcmVXaXRoXT1cInByb3BzLmNvbXBhcmVXaXRoXCJcbiAgICAgIFttdWx0aXBsZV09XCJwcm9wcy5tdWx0aXBsZVwiXG4gICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJlcnJvclN0YXRlTWF0Y2hlclwiXG4gICAgICBbYXJpYS1sYWJlbF09XCJfZ2V0QXJpYUxhYmVsKClcIlxuICAgICAgW2FyaWEtbGFiZWxsZWRieV09XCJfZ2V0QXJpYUxhYmVsbGVkYnkoKVwiXG4gICAgICBbZGlzYWJsZU9wdGlvbkNlbnRlcmluZ109XCJwcm9wcy5kaXNhYmxlT3B0aW9uQ2VudGVyaW5nXCJcbiAgICAgIFt0eXBlYWhlYWREZWJvdW5jZUludGVydmFsXT1cInByb3BzLnR5cGVhaGVhZERlYm91bmNlSW50ZXJ2YWxcIlxuICAgICAgW3BhbmVsQ2xhc3NdPVwicHJvcHMucGFuZWxDbGFzc1wiXG4gICAgPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInByb3BzLm9wdGlvbnMgfCBmb3JtbHlTZWxlY3RPcHRpb25zIDogZmllbGQgfCBhc3luYyBhcyBzZWxlY3RPcHRpb25zXCI+XG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdJZj1cInByb3BzLm11bHRpcGxlICYmIHByb3BzLnNlbGVjdEFsbE9wdGlvblwiXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwic2VsZWN0QWxsXCJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBzZWxlY3RPcHRpb25zOiBzZWxlY3RPcHRpb25zIH1cIlxuICAgICAgICA+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlbGVjdE9wdGlvbnNcIj5cbiAgICAgICAgICA8bWF0LW9wdGdyb3VwICpuZ0lmPVwiaXRlbS5ncm91cFwiIFtsYWJlbF09XCJpdGVtLmxhYmVsXCI+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgaXRlbS5ncm91cFwiIFt2YWx1ZV09XCJjaGlsZC52YWx1ZVwiIFtkaXNhYmxlZF09XCJjaGlsZC5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICB7eyBjaGlsZC5sYWJlbCB9fVxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgIDwvbWF0LW9wdGdyb3VwPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0lmPVwiIWl0ZW0uZ3JvdXBcIiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiIFtkaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkXCI+e3sgaXRlbS5sYWJlbCB9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFNlbGVjdCBleHRlbmRzIEZpZWxkVHlwZTxGaWVsZFR5cGVDb25maWc8U2VsZWN0UHJvcHM+PiB7XG4gIEBWaWV3Q2hpbGQoTWF0U2VsZWN0LCB7IHN0YXRpYzogdHJ1ZSB9KSBzZXQgc2VsZWN0KHNlbGVjdDogYW55KSB7XG4gICAgb2JzZXJ2ZShzZWxlY3QsIFsnX3BhcmVudEZvcm1GaWVsZCcsICdfdGV4dEZpZWxkJ10sICh7IGN1cnJlbnRWYWx1ZSB9KSA9PiB7XG4gICAgICBpZiAoY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHNlbGVjdC5fcHJlZmVycmVkT3ZlcmxheU9yaWdpbiA9IHNlbGVjdC5fcGFyZW50Rm9ybUZpZWxkLmdldENvbm5lY3RlZE92ZXJsYXlPcmlnaW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBvdmVycmlkZSBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBwcm9wczoge1xuICAgICAgY29tcGFyZVdpdGgobzE6IGFueSwgbzI6IGFueSkge1xuICAgICAgICByZXR1cm4gbzEgPT09IG8yO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHByaXZhdGUgc2VsZWN0QWxsVmFsdWUhOiB7IG9wdGlvbnM6IGFueTsgdmFsdWU6IGFueVtdIH07XG5cbiAgZ2V0U2VsZWN0QWxsU3RhdGUob3B0aW9uczogYW55W10pIHtcbiAgICBpZiAodGhpcy5lbXB0eSB8fCB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudmFsdWUubGVuZ3RoICE9PSB0aGlzLmdldFNlbGVjdEFsbFZhbHVlKG9wdGlvbnMpLmxlbmd0aCA/ICdpbmRldGVybWluYXRlJyA6ICdjaGVja2VkJztcbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdEFsbChvcHRpb25zOiBhbnlbXSkge1xuICAgIGNvbnN0IHNlbGVjdEFsbFZhbHVlID0gdGhpcy5nZXRTZWxlY3RBbGxWYWx1ZShvcHRpb25zKTtcbiAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKCF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUubGVuZ3RoICE9PSBzZWxlY3RBbGxWYWx1ZS5sZW5ndGggPyBzZWxlY3RBbGxWYWx1ZSA6IFtdKTtcbiAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc0RpcnR5KCk7XG4gIH1cblxuICBjaGFuZ2UoJGV2ZW50OiBNYXRTZWxlY3RDaGFuZ2UpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZT8uKHRoaXMuZmllbGQsICRldmVudCk7XG4gIH1cblxuICBfZ2V0QXJpYUxhYmVsbGVkYnkoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYXR0cmlidXRlcz8uWydhcmlhLWxhYmVsbGVkYnknXSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gYXMgc3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZvcm1GaWVsZD8uX2xhYmVsSWQ7XG4gIH1cblxuICBfZ2V0QXJpYUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmF0dHJpYnV0ZXM/LlsnYXJpYS1sYWJlbCddIGFzIHN0cmluZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0QWxsVmFsdWUob3B0aW9uczogYW55W10pIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0QWxsVmFsdWUgfHwgb3B0aW9ucyAhPT0gdGhpcy5zZWxlY3RBbGxWYWx1ZS5vcHRpb25zKSB7XG4gICAgICBjb25zdCBmbGF0T3B0aW9uczogYW55W10gPSBbXTtcbiAgICAgIG9wdGlvbnMuZm9yRWFjaCgobykgPT4gKG8uZ3JvdXAgPyBmbGF0T3B0aW9ucy5wdXNoKC4uLm8uZ3JvdXApIDogZmxhdE9wdGlvbnMucHVzaChvKSkpO1xuXG4gICAgICB0aGlzLnNlbGVjdEFsbFZhbHVlID0ge1xuICAgICAgICBvcHRpb25zLFxuICAgICAgICB2YWx1ZTogZmxhdE9wdGlvbnMuZmlsdGVyKChvKSA9PiAhby5kaXNhYmxlZCkubWFwKChvKSA9PiBvLnZhbHVlKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0QWxsVmFsdWUudmFsdWU7XG4gIH1cbn1cbiJdfQ==