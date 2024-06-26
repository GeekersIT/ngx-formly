import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@ngx-formly/core';
import { ɵobserve, FormlyModule } from '@ngx-formly/core';
import * as i4 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';

class FormlyFieldDatepicker extends FieldType {
    constructor(config, cdRef) {
        super();
        this.config = config;
        this.cdRef = cdRef;
        this.defaultOptions = {
            props: {
                datepickerOptions: {
                    startView: 'month',
                    datepickerTogglePosition: 'suffix',
                    disabled: false,
                    opened: false,
                    dateInput: () => { },
                    dateChange: () => { },
                    monthSelected: () => { },
                    yearSelected: () => { },
                },
            },
        };
    }
    detectChanges() {
        this.options.detectChanges?.(this.field);
    }
    ngAfterViewInit() {
        this.props[this.props.datepickerOptions.datepickerTogglePosition] = this.datepickerToggle;
        ɵobserve(this.field, ['props', 'datepickerOptions', 'opened'], () => {
            this.cdRef.detectChanges();
        });
        // temporary fix for https://github.com/angular/components/issues/16761
        if (this.config.getValidatorMessage('matDatepickerParse')) {
            this.fieldErrorsObserver = ɵobserve(this.field, ['formControl', 'errors'], ({ currentValue }) => {
                if (currentValue && currentValue.required && currentValue.matDatepickerParse) {
                    const errors = Object.keys(currentValue)
                        .sort((prop) => (prop === 'matDatepickerParse' ? -1 : 0))
                        .reduce((errors, prop) => ({ ...errors, [prop]: currentValue[prop] }), {});
                    this.fieldErrorsObserver?.setValue(errors);
                }
            });
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.fieldErrorsObserver?.unsubscribe();
    }
}
FormlyFieldDatepicker.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldDatepicker, deps: [{ token: i1.FormlyConfig }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
FormlyFieldDatepicker.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldDatepicker, selector: "formly-field-mat-datepicker", viewQueries: [{ propertyName: "datepickerToggle", first: true, predicate: ["datepickerToggle"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <input
      matInput
      [id]="id"
      [name]="field.name"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [matDatepicker]="picker"
      [matDatepickerFilter]="props.datepickerOptions.filter"
      [max]="props.datepickerOptions.max"
      [min]="props.datepickerOptions.min"
      [formlyAttributes]="field"
      [placeholder]="props.placeholder"
      [tabindex]="props.tabindex"
      [readonly]="props.readonly"
      [required]="required"
      (dateInput)="props.datepickerOptions.dateInput(field, $event)"
      (dateChange)="props.datepickerOptions.dateChange(field, $event)"
    />
    <ng-template #datepickerToggle>
      <mat-datepicker-toggle
        (click)="detectChanges()"
        [disabled]="props.disabled"
        [for]="picker"
      ></mat-datepicker-toggle>
    </ng-template>
    <mat-datepicker
      #picker
      [color]="props.color"
      [dateClass]="props.datepickerOptions.dateClass"
      [disabled]="props.datepickerOptions.disabled"
      [opened]="props.datepickerOptions.opened"
      [panelClass]="props.datepickerOptions.panelClass"
      [startAt]="props.datepickerOptions.startAt"
      [startView]="props.datepickerOptions.startView"
      [touchUi]="props.datepickerOptions.touchUi"
      [calendarHeaderComponent]="props.datepickerOptions.calendarHeaderComponent"
      (monthSelected)="props.datepickerOptions.monthSelected(field, $event, picker)"
      (yearSelected)="props.datepickerOptions.yearSelected(field, $event, picker)"
      (opened)="props.datepickerOptions.opened = true"
      (closed)="props.datepickerOptions.opened = false"
    >
    </mat-datepicker>
  `, isInline: true, components: [{ type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i1.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldDatepicker, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-mat-datepicker',
                    template: `
    <input
      matInput
      [id]="id"
      [name]="field.name"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [matDatepicker]="picker"
      [matDatepickerFilter]="props.datepickerOptions.filter"
      [max]="props.datepickerOptions.max"
      [min]="props.datepickerOptions.min"
      [formlyAttributes]="field"
      [placeholder]="props.placeholder"
      [tabindex]="props.tabindex"
      [readonly]="props.readonly"
      [required]="required"
      (dateInput)="props.datepickerOptions.dateInput(field, $event)"
      (dateChange)="props.datepickerOptions.dateChange(field, $event)"
    />
    <ng-template #datepickerToggle>
      <mat-datepicker-toggle
        (click)="detectChanges()"
        [disabled]="props.disabled"
        [for]="picker"
      ></mat-datepicker-toggle>
    </ng-template>
    <mat-datepicker
      #picker
      [color]="props.color"
      [dateClass]="props.datepickerOptions.dateClass"
      [disabled]="props.datepickerOptions.disabled"
      [opened]="props.datepickerOptions.opened"
      [panelClass]="props.datepickerOptions.panelClass"
      [startAt]="props.datepickerOptions.startAt"
      [startView]="props.datepickerOptions.startView"
      [touchUi]="props.datepickerOptions.touchUi"
      [calendarHeaderComponent]="props.datepickerOptions.calendarHeaderComponent"
      (monthSelected)="props.datepickerOptions.monthSelected(field, $event, picker)"
      (yearSelected)="props.datepickerOptions.yearSelected(field, $event, picker)"
      (opened)="props.datepickerOptions.opened = true"
      (closed)="props.datepickerOptions.opened = false"
    >
    </mat-datepicker>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyConfig }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { datepickerToggle: [{
                type: ViewChild,
                args: ['datepickerToggle', { static: true }]
            }] } });

class FormlyMatDatepickerModule {
}
FormlyMatDatepickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatDatepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatDatepickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatDatepickerModule, declarations: [FormlyFieldDatepicker], imports: [CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        FormlyMatFormFieldModule, i1.FormlyModule] });
FormlyMatDatepickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatDatepickerModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            MatDatepickerModule,
            FormlyMatFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'datepicker',
                        component: FormlyFieldDatepicker,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatDatepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldDatepicker],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatDatepickerModule,
                        FormlyMatFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'datepicker',
                                    component: FormlyFieldDatepicker,
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

export { FormlyFieldDatepicker, FormlyMatDatepickerModule };
//# sourceMappingURL=ngx-formly-material-datepicker.mjs.map
