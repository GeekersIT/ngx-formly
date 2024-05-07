import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@ionic/angular';
import { IonDatetime, IonicModule } from '@ionic/angular';
import * as i3 from '@ngx-formly/ionic/form-field';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';

class FormlyFieldDatetime extends FieldType {
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
        var _a;
        (_a = this.datetime) === null || _a === void 0 ? void 0 : _a.confirm();
        this.close();
    }
    reset() {
        var _a;
        (_a = this.datetime) === null || _a === void 0 ? void 0 : _a.reset();
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

class FormlyDatetimeModule {
}
FormlyDatetimeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyDatetimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyDatetimeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyDatetimeModule, declarations: [FormlyFieldDatetime], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule, i1$1.FormlyModule] });
FormlyDatetimeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyDatetimeModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'datetime',
                        component: FormlyFieldDatetime,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyDatetimeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldDatetime],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        FormlyFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'datetime',
                                    component: FormlyFieldDatetime,
                                    wrappers: ['form-field'],
                                },
                            ],
                        }),
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyDatetimeModule };
//# sourceMappingURL=ngx-formly-ionic-datetime.mjs.map
