import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i5 from '@ngx-formly/core/select';
import { FormlySelectModule as FormlySelectModule$1 } from '@ngx-formly/core/select';
import * as i4 from '@ngx-formly/ionic/form-field';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';

class FormlyFieldSelect extends FieldType {
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

class FormlySelectModule {
}
FormlySelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlySelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, declarations: [FormlyFieldSelect], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule,
        FormlySelectModule$1, i1$1.FormlyModule] });
FormlySelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyFormFieldModule,
            FormlySelectModule$1,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'select',
                        component: FormlyFieldSelect,
                        wrappers: ['form-field'],
                    },
                    { name: 'enum', extends: 'select' },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldSelect],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        FormlyFormFieldModule,
                        FormlySelectModule$1,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'select',
                                    component: FormlyFieldSelect,
                                    wrappers: ['form-field'],
                                },
                                { name: 'enum', extends: 'select' },
                            ],
                        }),
                    ],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldSelect, FormlySelectModule };
//# sourceMappingURL=ngx-formly-ionic-select.mjs.map
