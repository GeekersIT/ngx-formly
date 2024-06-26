import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ViewChild, NgModule, NO_ERRORS_SCHEMA, Type, Directive, ViewChildren } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@ngx-formly/core';
import { FieldWrapper, ɵdefineHiddenProp, FormlyModule, FieldType as FieldType$1, ɵobserve } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@angular/material/form-field';
import { MatFormField, MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import * as i1 from '@angular/cdk/a11y';
import { Subject } from 'rxjs';

class FormlyWrapperFormField extends FieldWrapper {
    constructor(renderer, elementRef, focusMonitor) {
        super();
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
    }
    ngOnInit() {
        ɵdefineHiddenProp(this.field, '_formField', this.formField);
        this.focusMonitor.monitor(this.elementRef, true).subscribe((origin) => {
            if (!origin && this.field.focus) {
                this.field.focus = false;
            }
        });
    }
    ngAfterViewInit() {
        // temporary fix for https://github.com/angular/material2/issues/7891
        if (this.formField.appearance !== 'outline' && this.props.hideFieldUnderline === true) {
            const underlineElement = this.formField._elementRef.nativeElement.querySelector('.mat-form-field-underline');
            underlineElement && this.renderer.removeChild(underlineElement.parentNode, underlineElement);
        }
    }
    ngOnDestroy() {
        delete this.field._formField;
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
FormlyWrapperFormField.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.FocusMonitor }], target: i0.ɵɵFactoryTarget.Component });
FormlyWrapperFormField.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyWrapperFormField, selector: "formly-wrapper-mat-form-field", viewQueries: [{ propertyName: "formField", first: true, predicate: MatFormField, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <!-- fix https://github.com/angular/material2/pull/7083 by setting width to 100% -->
    <mat-form-field
      [hideRequiredMarker]="true"
      [floatLabel]="props.floatLabel"
      [appearance]="props.appearance"
      [subscriptSizing]="props.subscriptSizing"
      [color]="props.color ?? 'primary'"
    >
      <ng-container #fieldComponent></ng-container>
      <mat-label *ngIf="props.label && props.hideLabel !== true">
        {{ props.label }}
        <span
          *ngIf="props.required && props.hideRequiredMarker !== true"
          aria-hidden="true"
          class="mat-form-field-required-marker mat-mdc-form-field-required-marker"
          >*</span
        >
      </mat-label>

      <ng-container matTextPrefix *ngIf="props.textPrefix">
        <ng-container [ngTemplateOutlet]="props.textPrefix" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      </ng-container>

      <ng-container matPrefix *ngIf="props.prefix">
        <ng-container [ngTemplateOutlet]="props.prefix" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      </ng-container>

      <ng-container matTextSuffix *ngIf="props.textSuffix">
        <ng-container [ngTemplateOutlet]="props.textSuffix" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      </ng-container>

      <ng-container matSuffix *ngIf="props.suffix">
        <ng-container [ngTemplateOutlet]="props.suffix" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      </ng-container>

      <mat-error>
        <formly-validation-message [field]="field"></formly-validation-message>
      </mat-error>

      <mat-hint *ngIf="props.description || props.hintStart as hint">
        <ng-container [ngTemplateOutlet]="stringOrTemplate" [ngTemplateOutletContext]="{ content: hint }">
        </ng-container>
      </mat-hint>

      <mat-hint *ngIf="props.hintEnd as hintEnd" align="end">
        <ng-container [ngTemplateOutlet]="stringOrTemplate" [ngTemplateOutletContext]="{ content: hintEnd }">
        </ng-container>
      </mat-hint>
    </mat-form-field>

    <ng-template #stringOrTemplate let-content="content">
      <ng-container *ngIf="!content.createEmbeddedView; else template">{{ content }}</ng-container>
      <ng-template #template>
        <ng-container [ngTemplateOutlet]="content" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      </ng-template>
    </ng-template>
  `, isInline: true, styles: ["formly-wrapper-mat-form-field .mat-mdc-form-field,formly-wrapper-mat-form-field .mat-form-field{width:100%}\n"], components: [{ type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i3.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.MatLabel, selector: "mat-label" }, { type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i2.MatPrefix, selector: "[matPrefix]" }, { type: i2.MatSuffix, selector: "[matSuffix]" }, { type: i2.MatError, selector: "mat-error", inputs: ["id"] }, { type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyWrapperFormField, decorators: [{
            type: Component,
            args: [{ selector: 'formly-wrapper-mat-form-field', template: `
    <!-- fix https://github.com/angular/material2/pull/7083 by setting width to 100% -->
    <mat-form-field
      [hideRequiredMarker]="true"
      [floatLabel]="props.floatLabel"
      [appearance]="props.appearance"
      [subscriptSizing]="props.subscriptSizing"
      [color]="props.color ?? 'primary'"
    >
      <ng-container #fieldComponent></ng-container>
      <mat-label *ngIf="props.label && props.hideLabel !== true">
        {{ props.label }}
        <span
          *ngIf="props.required && props.hideRequiredMarker !== true"
          aria-hidden="true"
          class="mat-form-field-required-marker mat-mdc-form-field-required-marker"
          >*</span
        >
      </mat-label>

      <ng-container matTextPrefix *ngIf="props.textPrefix">
        <ng-container [ngTemplateOutlet]="props.textPrefix" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      </ng-container>

      <ng-container matPrefix *ngIf="props.prefix">
        <ng-container [ngTemplateOutlet]="props.prefix" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      </ng-container>

      <ng-container matTextSuffix *ngIf="props.textSuffix">
        <ng-container [ngTemplateOutlet]="props.textSuffix" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      </ng-container>

      <ng-container matSuffix *ngIf="props.suffix">
        <ng-container [ngTemplateOutlet]="props.suffix" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      </ng-container>

      <mat-error>
        <formly-validation-message [field]="field"></formly-validation-message>
      </mat-error>

      <mat-hint *ngIf="props.description || props.hintStart as hint">
        <ng-container [ngTemplateOutlet]="stringOrTemplate" [ngTemplateOutletContext]="{ content: hint }">
        </ng-container>
      </mat-hint>

      <mat-hint *ngIf="props.hintEnd as hintEnd" align="end">
        <ng-container [ngTemplateOutlet]="stringOrTemplate" [ngTemplateOutletContext]="{ content: hintEnd }">
        </ng-container>
      </mat-hint>
    </mat-form-field>

    <ng-template #stringOrTemplate let-content="content">
      <ng-container *ngIf="!content.createEmbeddedView; else template">{{ content }}</ng-container>
      <ng-template #template>
        <ng-container [ngTemplateOutlet]="content" [ngTemplateOutletContext]="{ field: field }"></ng-container>
      </ng-template>
    </ng-template>
  `, encapsulation: ViewEncapsulation.None, styles: ["formly-wrapper-mat-form-field .mat-mdc-form-field,formly-wrapper-mat-form-field .mat-form-field{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.FocusMonitor }]; }, propDecorators: { formField: [{
                type: ViewChild,
                args: [MatFormField, { static: true }]
            }] } });

class FormlyMatFormFieldModule {
}
FormlyMatFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatFormFieldModule, declarations: [FormlyWrapperFormField], imports: [CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule, i3.FormlyModule] });
FormlyMatFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatFormFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperFormField],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'form-field',
                                    component: FormlyWrapperFormField,
                                },
                            ],
                        }),
                    ],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });

class FieldType extends FieldType$1 {
    constructor() {
        super(...arguments);
        this.errorStateMatcher = { isErrorState: () => this.field && this.showError };
        this.stateChanges = new Subject();
        this._errorState = false;
        this._focused = false;
    }
    set matPrefix(prefix) {
        if (prefix) {
            this.props.prefix = prefix;
        }
    }
    set matTextPrefix(textPrefix) {
        if (textPrefix) {
            this.props.textPrefix = textPrefix;
        }
    }
    set matSuffix(suffix) {
        if (suffix) {
            this.props.suffix = suffix;
        }
    }
    set matTextSuffix(textSuffix) {
        if (textSuffix) {
            this.props.textSuffix = textSuffix;
        }
    }
    set _controls(controls) {
        this.attachControl(controls.length === 1 ? controls.first : this);
    }
    ngOnDestroy() {
        var _a;
        (_a = this.formField) === null || _a === void 0 ? true : delete _a._control;
        this.stateChanges.complete();
    }
    setDescribedByIds(_ids) { }
    onContainerClick(_event) {
        this.field.focus = true;
        this.stateChanges.next();
    }
    get errorState() {
        const showError = this.options.showError(this);
        if (showError !== this._errorState) {
            this._errorState = showError;
            this.stateChanges.next();
        }
        return showError;
    }
    get controlType() {
        if (this.props.type) {
            return this.props.type;
        }
        const type = this.field.type;
        return type instanceof Type ? type.prototype.constructor.name : type;
    }
    get focused() {
        const focused = !!this.field.focus && !this.disabled;
        if (focused !== this._focused) {
            this._focused = focused;
            this.stateChanges.next();
        }
        return focused;
    }
    get disabled() {
        return !!this.props.disabled;
    }
    get required() {
        return !!this.props.required;
    }
    get placeholder() {
        return this.props.placeholder || '';
    }
    get shouldPlaceholderFloat() {
        return this.shouldLabelFloat;
    }
    get value() {
        var _a;
        return (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.value;
    }
    set value(value) {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.patchValue(value);
    }
    get ngControl() {
        return this.formControl;
    }
    get empty() {
        return this.value == null || this.value === '';
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get formField() {
        var _a;
        return (_a = this.field) === null || _a === void 0 ? void 0 : _a['_formField'];
    }
    attachControl(control) {
        var _a, _b;
        if (this.formField && control !== this.formField._control) {
            this.formField._control = control;
            // temporary fix for https://github.com/angular/material2/issues/6728
            const ngControl = control === null || control === void 0 ? void 0 : control.ngControl;
            if ((_a = ngControl === null || ngControl === void 0 ? void 0 : ngControl.valueAccessor) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('_formField')) {
                ngControl.valueAccessor['_formField'] = this.formField;
            }
            if ((_b = ngControl === null || ngControl === void 0 ? void 0 : ngControl.valueAccessor) === null || _b === void 0 ? void 0 : _b.hasOwnProperty('_parentFormField')) {
                ngControl.valueAccessor['_parentFormField'] = this.formField;
            }
            ['prefix', 'suffix', 'textPrefix', 'textSuffix'].forEach((type) => ɵobserve(this.field, ['props', type], ({ currentValue }) => currentValue &&
                Promise.resolve().then(() => {
                    this.options.detectChanges(this.field);
                })));
            // https://github.com/angular/components/issues/16209
            const setDescribedByIds = control.setDescribedByIds.bind(control);
            control.setDescribedByIds = (ids) => {
                setTimeout(() => setDescribedByIds(ids));
            };
        }
    }
}
FieldType.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FieldType, deps: null, target: i0.ɵɵFactoryTarget.Directive });
FieldType.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.12", type: FieldType, viewQueries: [{ propertyName: "matPrefix", first: true, predicate: ["matPrefix"], descendants: true }, { propertyName: "matTextPrefix", first: true, predicate: ["matTextPrefix"], descendants: true }, { propertyName: "matSuffix", first: true, predicate: ["matSuffix"], descendants: true }, { propertyName: "matTextSuffix", first: true, predicate: ["matTextSuffix"], descendants: true }, { propertyName: "_controls", predicate: MatFormFieldControl, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FieldType, decorators: [{
            type: Directive
        }], propDecorators: { matPrefix: [{
                type: ViewChild,
                args: ['matPrefix']
            }], matTextPrefix: [{
                type: ViewChild,
                args: ['matTextPrefix']
            }], matSuffix: [{
                type: ViewChild,
                args: ['matSuffix']
            }], matTextSuffix: [{
                type: ViewChild,
                args: ['matTextSuffix']
            }], _controls: [{
                type: ViewChildren,
                args: [MatFormFieldControl]
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { FieldType, FormlyMatFormFieldModule };
//# sourceMappingURL=ngx-formly-material-form-field.mjs.map
