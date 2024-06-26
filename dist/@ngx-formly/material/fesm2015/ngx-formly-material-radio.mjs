import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewChild, NgModule } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@ngx-formly/core';
import { ɵobserve, FormlyModule } from '@ngx-formly/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i5 from '@ngx-formly/core/select';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import * as i1 from '@angular/material/radio';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';

class FormlyFieldRadio extends FieldType {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            props: {
                hideFieldUnderline: true,
                floatLabel: 'always',
                tabindex: -1,
            },
        };
    }
    ngAfterViewInit() {
        this.focusObserver = ɵobserve(this.field, ['focus'], ({ currentValue }) => {
            if (this.props.tabindex === -1 && currentValue && this.radioGroup._radios.length > 0) {
                // https://github.com/ngx-formly/ngx-formly/issues/2498
                setTimeout(() => {
                    const radio = this.radioGroup.selected ? this.radioGroup.selected : this.radioGroup._radios.first;
                    radio.focus();
                });
            }
        });
    }
    // TODO: find a solution to prevent scroll on focus
    onContainerClick() { }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.focusObserver && this.focusObserver.unsubscribe();
    }
}
FormlyFieldRadio.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldRadio.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldRadio, selector: "formly-field-mat-radio", viewQueries: [{ propertyName: "radioGroup", first: true, predicate: MatRadioGroup, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <mat-radio-group
      [formControl]="formControl"
      [formlyAttributes]="field"
      [required]="required"
      [tabindex]="props.tabindex"
    >
      <mat-radio-button
        *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index"
        [id]="id + '_' + i"
        [color]="props.color"
        [labelPosition]="props.labelPosition"
        [disabled]="option.disabled"
        [value]="option.value"
      >
        {{ option.label }}
      </mat-radio-button>
    </mat-radio-group>
  `, isInline: true, components: [{ type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }], directives: [{ type: i1.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i4.AsyncPipe, "formlySelectOptions": i5.FormlySelectOptionsPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldRadio, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-mat-radio',
                    template: `
    <mat-radio-group
      [formControl]="formControl"
      [formlyAttributes]="field"
      [required]="required"
      [tabindex]="props.tabindex"
    >
      <mat-radio-button
        *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index"
        [id]="id + '_' + i"
        [color]="props.color"
        [labelPosition]="props.labelPosition"
        [disabled]="option.disabled"
        [value]="option.value"
      >
        {{ option.label }}
      </mat-radio-button>
    </mat-radio-group>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { radioGroup: [{
                type: ViewChild,
                args: [MatRadioGroup, { static: true }]
            }] } });

class FormlyMatRadioModule {
}
FormlyMatRadioModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatRadioModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatRadioModule, declarations: [FormlyFieldRadio], imports: [CommonModule,
        ReactiveFormsModule,
        MatRadioModule,
        FormlyMatFormFieldModule,
        FormlySelectModule, i3.FormlyModule] });
FormlyMatRadioModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatRadioModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatRadioModule,
            FormlyMatFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'radio',
                        component: FormlyFieldRadio,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldRadio],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatRadioModule,
                        FormlyMatFormFieldModule,
                        FormlySelectModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'radio',
                                    component: FormlyFieldRadio,
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

export { FormlyFieldRadio, FormlyMatRadioModule };
//# sourceMappingURL=ngx-formly-material-radio.mjs.map
