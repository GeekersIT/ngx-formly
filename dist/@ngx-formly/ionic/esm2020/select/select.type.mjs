import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@ngx-formly/ionic/form-field";
import * as i5 from "@ngx-formly/core/select";
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
}
FormlyFieldSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldSelect, selector: "formly-field-ion-select", usesInheritance: true, ngImport: i0, template: `
    <!-- ng-container used as a workaround for https://github.com/ionic-team/ionic/issues/19324 -->
    <ng-container *ngIf="props.options | formlySelectOptions : field | async; let selectOptions">
      <ion-select
        [style.align-self]="props.labelPosition === 'floating' ? 'stretch' : ''"
        [style.max-width.%]="props.labelPosition === 'floating' ? 100 : ''"
        [formControl]="formControl"
        [compareWith]="props.compareWith"
        [ionFormlyAttributes]="field"
        [multiple]="props.multiple"
        [interface]="props.interface"
        [okText]="props.okText"
        [cancelText]="props.cancelText"
        [label]="props.label"
      >
        <ion-select-option *ngFor="let option of selectOptions" [value]="option.value" [disabled]="option.disabled">
          {{ option.label }}
        </ion-select-option>
      </ion-select>
    </ng-container>
  `, isInline: true, styles: [":host{display:inherit}\n"], components: [{ type: i1.IonSelect, selector: "ion-select", inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"] }, { type: i1.IonSelectOption, selector: "ion-select-option", inputs: ["disabled", "value"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i4.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i2.AsyncPipe, "formlySelectOptions": i5.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSelect, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-select',
                    template: `
    <!-- ng-container used as a workaround for https://github.com/ionic-team/ionic/issues/19324 -->
    <ng-container *ngIf="props.options | formlySelectOptions : field | async; let selectOptions">
      <ion-select
        [style.align-self]="props.labelPosition === 'floating' ? 'stretch' : ''"
        [style.max-width.%]="props.labelPosition === 'floating' ? 100 : ''"
        [formControl]="formControl"
        [compareWith]="props.compareWith"
        [ionFormlyAttributes]="field"
        [multiple]="props.multiple"
        [interface]="props.interface"
        [okText]="props.okText"
        [cancelText]="props.cancelText"
        [label]="props.label"
      >
        <ion-select-option *ngFor="let option of selectOptions" [value]="option.value" [disabled]="option.disabled">
          {{ option.label }}
        </ion-select-option>
      </ion-select>
    </ng-container>
  `,
                    styles: [':host { display: inherit; }'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvaW9uaWMvc2VsZWN0L3NyYy9zZWxlY3QudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7QUEwQ2pGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUF1QztJQTFCOUU7O1FBMkJXLG1CQUFjLEdBQUc7WUFDeEIsS0FBSyxFQUFFO2dCQUNMLFdBQVcsQ0FBQyxFQUFPLEVBQUUsRUFBTztvQkFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUNuQixDQUFDO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7OytHQVJZLGlCQUFpQjttR0FBakIsaUJBQWlCLHNGQXhCbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUOzRGQUlVLGlCQUFpQjtrQkExQjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVDtvQkFDRCxNQUFNLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZFR5cGVDb25maWcsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFByb3BzIH0gZnJvbSAnQG5neC1mb3JtbHkvaW9uaWMvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFNlbGVjdFByb3BzIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZS9zZWxlY3QnO1xuXG5pbnRlcmZhY2UgU2VsZWN0UHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzLCBGb3JtbHlGaWVsZFNlbGVjdFByb3BzIHtcbiAgY29tcGFyZVdpdGg/OiAoKGN1cnJlbnRWYWx1ZTogYW55LCBjb21wYXJlVmFsdWU6IGFueSkgPT4gYm9vbGVhbikgfCBudWxsIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIGludGVyZmFjZT86ICdhY3Rpb24tc2hlZXQnIHwgJ2FsZXJ0JyB8ICdwb3BvdmVyJztcbiAgb2tUZXh0Pzogc3RyaW5nO1xuICBjYW5jZWxUZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seVNlbGVjdEZpZWxkQ29uZmlnIGV4dGVuZHMgRm9ybWx5RmllbGRDb25maWc8U2VsZWN0UHJvcHM+IHtcbiAgdHlwZTogJ3NlbGVjdCcgfCBUeXBlPEZvcm1seUZpZWxkU2VsZWN0Pjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWZpZWxkLWlvbi1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS0gbmctY29udGFpbmVyIHVzZWQgYXMgYSB3b3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy9pc3N1ZXMvMTkzMjQgLS0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInByb3BzLm9wdGlvbnMgfCBmb3JtbHlTZWxlY3RPcHRpb25zIDogZmllbGQgfCBhc3luYzsgbGV0IHNlbGVjdE9wdGlvbnNcIj5cbiAgICAgIDxpb24tc2VsZWN0XG4gICAgICAgIFtzdHlsZS5hbGlnbi1zZWxmXT1cInByb3BzLmxhYmVsUG9zaXRpb24gPT09ICdmbG9hdGluZycgPyAnc3RyZXRjaCcgOiAnJ1wiXG4gICAgICAgIFtzdHlsZS5tYXgtd2lkdGguJV09XCJwcm9wcy5sYWJlbFBvc2l0aW9uID09PSAnZmxvYXRpbmcnID8gMTAwIDogJydcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgICBbY29tcGFyZVdpdGhdPVwicHJvcHMuY29tcGFyZVdpdGhcIlxuICAgICAgICBbaW9uRm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXG4gICAgICAgIFttdWx0aXBsZV09XCJwcm9wcy5tdWx0aXBsZVwiXG4gICAgICAgIFtpbnRlcmZhY2VdPVwicHJvcHMuaW50ZXJmYWNlXCJcbiAgICAgICAgW29rVGV4dF09XCJwcm9wcy5va1RleHRcIlxuICAgICAgICBbY2FuY2VsVGV4dF09XCJwcm9wcy5jYW5jZWxUZXh0XCJcbiAgICAgICAgW2xhYmVsXT1cInByb3BzLmxhYmVsXCJcbiAgICAgID5cbiAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc2VsZWN0T3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiBbZGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCI+XG4gICAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19XG4gICAgICAgIDwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICA8L2lvbi1zZWxlY3Q+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGluaGVyaXQ7IH0nXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkU2VsZWN0IGV4dGVuZHMgRmllbGRUeXBlPEZpZWxkVHlwZUNvbmZpZzxTZWxlY3RQcm9wcz4+IHtcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvbXBhcmVXaXRoKG8xOiBhbnksIG8yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIG8xID09PSBvMjtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==