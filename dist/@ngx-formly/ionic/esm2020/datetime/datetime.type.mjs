import { Component, ChangeDetectionStrategy, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-formly/ionic/form-field";
import * as i4 from "@angular/common";
export class FormlyFieldDatetime extends FieldType {
    constructor() {
        super(...arguments);
        this.isOpen = false;
        this.defaultOptions = {
            props: {
                presentation: 'month-year',
                legacyLabel: true,
            },
        };
    }
    displayFormat() {
        if (this.props.displayFormat) {
            return this.props.displayFormat;
        }
        switch (this.props.presentation) {
            case 'date-time':
            case 'time-date':
                return 'short';
            case 'time':
                return 'shortTime';
            case 'month':
                return 'MMMM';
            case 'month-year':
                return 'MMMM, y';
            case 'year':
                return 'y';
            case 'date':
                return 'mediumDate';
        }
    }
    confirm() {
        this.datetime?.confirm();
        this.close();
    }
    reset() {
        this.datetime?.reset();
        this.close();
    }
    close() {
        this.isOpen = false;
        this.formControl.markAsTouched();
    }
}
FormlyFieldDatetime.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldDatetime, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldDatetime.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldDatetime, selector: "formly-field-ion-datetime", viewQueries: [{ propertyName: "datetime", first: true, predicate: IonDatetime, descendants: true }], usesInheritance: true, ngImport: i0, template: `
    <ion-item [button]="true" [detail]="false" (click)="isOpen = true">
      <ion-label>
        {{ formControl.value ? (formControl.value | date : displayFormat()) : props.placeholder }}
      </ion-label>
    </ion-item>
    <ion-modal
      [isOpen]="isOpen"
      (didDismiss)="close()"
      [cssClass]="'ion-datetime-modal ion-datetime-modal-' + props.presentation"
    >
      <ng-template>
        <ion-datetime
          [locale]="props.locale"
          [presentation]="props.presentation"
          [cancelText]="props.cancelText"
          [dayValues]="props.dayValues"
          [doneText]="props.doneText"
          [hourValues]="props.hourValues"
          [minuteValues]="props.minuteValues"
          [monthValues]="props.monthValues"
          [yearValues]="props.yearValues"
          [min]="props.minDate ? props.minDate : props.min"
          [max]="props.maxDate ? props.maxDate : props.max"
          [formControl]="formControl"
          [ionFormlyAttributes]="field"
        >
          <ion-buttons slot="buttons">
            <ion-button (click)="reset()">{{ props.cancelText || 'Cancel' }}</ion-button>
            <ion-button (click)="confirm()">{{ props.doneText || 'Done' }}</ion-button>
          </ion-buttons>
        </ion-datetime>
      </ng-template>
    </ion-modal>
  `, isInline: true, styles: [".ion-datetime-modal{--width: 310px;--border-radius: 8px}.ion-datetime-modal.ion-datetime-modal-time-date{--height: 440px}.ion-datetime-modal.ion-datetime-modal-date{--height: 390px}.ion-datetime-modal.ion-datetime-modal-time{--height: 260px}\n"], components: [{ type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { type: i1.IonModal, selector: "ion-modal", inputs: ["animated", "keepContentsMounted", "backdropBreakpoint", "backdropDismiss", "breakpoints", "canDismiss", "cssClass", "enterAnimation", "event", "handle", "handleBehavior", "initialBreakpoint", "isOpen", "keyboardClose", "leaveAnimation", "mode", "presentingElement", "showBackdrop", "swipeToClose", "translucent", "trigger"] }, { type: i1.IonDatetime, selector: "ion-datetime", inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"] }, { type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }], directives: [{ type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }], pipes: { "date": i4.DatePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldDatetime, decorators: [{
            type: Component,
            args: [{ selector: 'formly-field-ion-datetime', template: `
    <ion-item [button]="true" [detail]="false" (click)="isOpen = true">
      <ion-label>
        {{ formControl.value ? (formControl.value | date : displayFormat()) : props.placeholder }}
      </ion-label>
    </ion-item>
    <ion-modal
      [isOpen]="isOpen"
      (didDismiss)="close()"
      [cssClass]="'ion-datetime-modal ion-datetime-modal-' + props.presentation"
    >
      <ng-template>
        <ion-datetime
          [locale]="props.locale"
          [presentation]="props.presentation"
          [cancelText]="props.cancelText"
          [dayValues]="props.dayValues"
          [doneText]="props.doneText"
          [hourValues]="props.hourValues"
          [minuteValues]="props.minuteValues"
          [monthValues]="props.monthValues"
          [yearValues]="props.yearValues"
          [min]="props.minDate ? props.minDate : props.min"
          [max]="props.maxDate ? props.maxDate : props.max"
          [formControl]="formControl"
          [ionFormlyAttributes]="field"
        >
          <ion-buttons slot="buttons">
            <ion-button (click)="reset()">{{ props.cancelText || 'Cancel' }}</ion-button>
            <ion-button (click)="confirm()">{{ props.doneText || 'Done' }}</ion-button>
          </ion-buttons>
        </ion-datetime>
      </ng-template>
    </ion-modal>
  `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".ion-datetime-modal{--width: 310px;--border-radius: 8px}.ion-datetime-modal.ion-datetime-modal-time-date{--height: 440px}.ion-datetime-modal.ion-datetime-modal-date{--height: 390px}.ion-datetime-modal.ion-datetime-modal-time{--height: 260px}\n"] }]
        }], propDecorators: { datetime: [{
                type: ViewChild,
                args: [IonDatetime]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9pb25pYy9kYXRldGltZS9zcmMvZGF0ZXRpbWUudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBc0MsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBK0RqRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBeUM7SUF6Q2xGOztRQTJDRSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRU4sbUJBQWMsR0FBRztZQUN4QixLQUFLLEVBQUU7Z0JBQ0wsWUFBWSxFQUFFLFlBQXFCO2dCQUNuQyxXQUFXLEVBQUUsSUFBSTthQUNsQjtTQUNGLENBQUM7S0FzQ0g7SUFwQ0MsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUNqQztRQUVELFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDL0IsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxXQUFXO2dCQUNkLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLEtBQUssTUFBTTtnQkFDVCxPQUFPLFdBQVcsQ0FBQztZQUNyQixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxZQUFZO2dCQUNmLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssTUFBTTtnQkFDVCxPQUFPLEdBQUcsQ0FBQztZQUNiLEtBQUssTUFBTTtnQkFDVCxPQUFPLFlBQVksQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2lIQTlDVSxtQkFBbUI7cUdBQW5CLG1CQUFtQiwyR0FDbkIsV0FBVyx1RUF4Q1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ1Q7NEZBS1UsbUJBQW1CO2tCQXpDL0IsU0FBUzsrQkFDRSwyQkFBMkIsWUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ1QsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU0saUJBRWhDLGlCQUFpQixDQUFDLElBQUk7OEJBR2IsUUFBUTtzQkFBL0IsU0FBUzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uRGF0ZXRpbWUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBGaWVsZFR5cGUsIEZpZWxkVHlwZUNvbmZpZywgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IEZvcm1seUZpZWxkUHJvcHMgfSBmcm9tICdAbmd4LWZvcm1seS9pb25pYy9mb3JtLWZpZWxkJztcblxuaW50ZXJmYWNlIERhdGV0aW1lUHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHtcbiAgcHJlc2VudGF0aW9uPzogJ2RhdGUnIHwgJ2RhdGUtdGltZScgfCAnbW9udGgnIHwgJ21vbnRoLXllYXInIHwgJ3RpbWUnIHwgJ3RpbWUtZGF0ZScgfCAneWVhcic7XG4gIGxvY2FsZT86IGFueTtcbiAgY2FuY2VsVGV4dD86IHN0cmluZztcbiAgZG9uZVRleHQ/OiBzdHJpbmc7XG4gIGRheVZhbHVlcz86IG51bWJlciB8IG51bWJlcltdIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBob3VyVmFsdWVzPzogbnVtYmVyIHwgbnVtYmVyW10gfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1pbnV0ZVZhbHVlcz86IG51bWJlciB8IG51bWJlcltdIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtb250aFZhbHVlcz86IG51bWJlciB8IG51bWJlcltdIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB5ZWFyVmFsdWVzPzogbnVtYmVyIHwgbnVtYmVyW10gfCBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1pbkRhdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIG1heERhdGU/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5RGF0ZXRpbWVGaWVsZENvbmZpZyBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnPERhdGV0aW1lUHJvcHM+IHtcbiAgdHlwZTogJ2RhdGV0aW1lJyB8IFR5cGU8Rm9ybWx5RmllbGREYXRldGltZT47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1maWVsZC1pb24tZGF0ZXRpbWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpb24taXRlbSBbYnV0dG9uXT1cInRydWVcIiBbZGV0YWlsXT1cImZhbHNlXCIgKGNsaWNrKT1cImlzT3BlbiA9IHRydWVcIj5cbiAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgIHt7IGZvcm1Db250cm9sLnZhbHVlID8gKGZvcm1Db250cm9sLnZhbHVlIHwgZGF0ZSA6IGRpc3BsYXlGb3JtYXQoKSkgOiBwcm9wcy5wbGFjZWhvbGRlciB9fVxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgPC9pb24taXRlbT5cbiAgICA8aW9uLW1vZGFsXG4gICAgICBbaXNPcGVuXT1cImlzT3BlblwiXG4gICAgICAoZGlkRGlzbWlzcyk9XCJjbG9zZSgpXCJcbiAgICAgIFtjc3NDbGFzc109XCInaW9uLWRhdGV0aW1lLW1vZGFsIGlvbi1kYXRldGltZS1tb2RhbC0nICsgcHJvcHMucHJlc2VudGF0aW9uXCJcbiAgICA+XG4gICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgIDxpb24tZGF0ZXRpbWVcbiAgICAgICAgICBbbG9jYWxlXT1cInByb3BzLmxvY2FsZVwiXG4gICAgICAgICAgW3ByZXNlbnRhdGlvbl09XCJwcm9wcy5wcmVzZW50YXRpb25cIlxuICAgICAgICAgIFtjYW5jZWxUZXh0XT1cInByb3BzLmNhbmNlbFRleHRcIlxuICAgICAgICAgIFtkYXlWYWx1ZXNdPVwicHJvcHMuZGF5VmFsdWVzXCJcbiAgICAgICAgICBbZG9uZVRleHRdPVwicHJvcHMuZG9uZVRleHRcIlxuICAgICAgICAgIFtob3VyVmFsdWVzXT1cInByb3BzLmhvdXJWYWx1ZXNcIlxuICAgICAgICAgIFttaW51dGVWYWx1ZXNdPVwicHJvcHMubWludXRlVmFsdWVzXCJcbiAgICAgICAgICBbbW9udGhWYWx1ZXNdPVwicHJvcHMubW9udGhWYWx1ZXNcIlxuICAgICAgICAgIFt5ZWFyVmFsdWVzXT1cInByb3BzLnllYXJWYWx1ZXNcIlxuICAgICAgICAgIFttaW5dPVwicHJvcHMubWluRGF0ZSA/IHByb3BzLm1pbkRhdGUgOiBwcm9wcy5taW5cIlxuICAgICAgICAgIFttYXhdPVwicHJvcHMubWF4RGF0ZSA/IHByb3BzLm1heERhdGUgOiBwcm9wcy5tYXhcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiXG4gICAgICAgICAgW2lvbkZvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJidXR0b25zXCI+XG4gICAgICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiPnt7IHByb3BzLmNhbmNlbFRleHQgfHwgJ0NhbmNlbCcgfX08L2lvbi1idXR0b24+XG4gICAgICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY29uZmlybSgpXCI+e3sgcHJvcHMuZG9uZVRleHQgfHwgJ0RvbmUnIH19PC9pb24tYnV0dG9uPlxuICAgICAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgICAgIDwvaW9uLWRhdGV0aW1lPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2lvbi1tb2RhbD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlVXJsczogWycuL2RhdHRpbWUudHlwZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkRGF0ZXRpbWUgZXh0ZW5kcyBGaWVsZFR5cGU8RmllbGRUeXBlQ29uZmlnPERhdGV0aW1lUHJvcHM+PiB7XG4gIEBWaWV3Q2hpbGQoSW9uRGF0ZXRpbWUpIGRhdGV0aW1lITogSW9uRGF0ZXRpbWU7XG4gIGlzT3BlbiA9IGZhbHNlO1xuXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcmVzZW50YXRpb246ICdtb250aC15ZWFyJyBhcyBjb25zdCxcbiAgICAgIGxlZ2FjeUxhYmVsOiB0cnVlLFxuICAgIH0sXG4gIH07XG5cbiAgZGlzcGxheUZvcm1hdCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNwbGF5Rm9ybWF0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kaXNwbGF5Rm9ybWF0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5wcmVzZW50YXRpb24pIHtcbiAgICAgIGNhc2UgJ2RhdGUtdGltZSc6XG4gICAgICBjYXNlICd0aW1lLWRhdGUnOlxuICAgICAgICByZXR1cm4gJ3Nob3J0JztcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICByZXR1cm4gJ3Nob3J0VGltZSc7XG4gICAgICBjYXNlICdtb250aCc6XG4gICAgICAgIHJldHVybiAnTU1NTSc7XG4gICAgICBjYXNlICdtb250aC15ZWFyJzpcbiAgICAgICAgcmV0dXJuICdNTU1NLCB5JztcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICByZXR1cm4gJ3knO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldHVybiAnbWVkaXVtRGF0ZSc7XG4gICAgfVxuICB9XG5cbiAgY29uZmlybSgpIHtcbiAgICB0aGlzLmRhdGV0aW1lPy5jb25maXJtKCk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRldGltZT8ucmVzZXQoKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICB9XG59XG4iXX0=