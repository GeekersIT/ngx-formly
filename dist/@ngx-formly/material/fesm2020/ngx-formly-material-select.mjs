import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewChild, NgModule } from '@angular/core';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i4 from '@ngx-formly/core';
import { ɵobserve, FormlyModule } from '@ngx-formly/core';
import * as i6 from '@ngx-formly/core/select';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FieldType, FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import * as i2 from '@angular/material/select';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import * as i1 from '@angular/material/core';
import { MatPseudoCheckboxModule } from '@angular/material/core';

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
    set select(select) {
        ɵobserve(select, ['_parentFormField', '_textField'], ({ currentValue }) => {
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

class FormlyMatSelectModule {
}
FormlyMatSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatSelectModule, declarations: [FormlyFieldSelect], imports: [CommonModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatPseudoCheckboxModule,
        FormlyMatFormFieldModule,
        FormlySelectModule, i4.FormlyModule] });
FormlyMatSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatSelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatSelectModule,
            MatPseudoCheckboxModule,
            FormlyMatFormFieldModule,
            FormlySelectModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldSelect],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatSelectModule,
                        MatPseudoCheckboxModule,
                        FormlyMatFormFieldModule,
                        FormlySelectModule,
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
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldSelect, FormlyMatSelectModule };
//# sourceMappingURL=ngx-formly-material-select.mjs.map
