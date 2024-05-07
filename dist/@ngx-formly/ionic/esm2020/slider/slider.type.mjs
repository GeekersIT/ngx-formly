import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-formly/ionic/form-field";
export class FormlyFieldSlider extends FieldType {
}
FormlyFieldSlider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSlider, deps: null, target: i0.ɵɵFactoryTarget.Component });
FormlyFieldSlider.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: FormlyFieldSlider, selector: "formly-field-ion-range", usesInheritance: true, ngImport: i0, template: `
    <ion-range
      [min]="props.min"
      [max]="props.max"
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
      [label]="props.label"
    >
      <ion-label slot="start">{{ props.min }}</ion-label>
      <ion-label slot="end">{{ props.max }}</ion-label>
    </ion-range>
  `, isInline: true, styles: [":host{display:inherit}\n"], components: [{ type: i1.IonRange, selector: "ion-range", inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"] }, { type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }], directives: [{ type: i1.SelectValueAccessor, selector: "ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.ɵIonFormlyAttributes, selector: "[ionFormlyAttributes]", inputs: ["ionFormlyAttributes"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFieldSlider, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-ion-range',
                    template: `
    <ion-range
      [min]="props.min"
      [max]="props.max"
      [formControl]="formControl"
      [ionFormlyAttributes]="field"
      [label]="props.label"
    >
      <ion-label slot="start">{{ props.min }}</ion-label>
      <ion-label slot="end">{{ props.max }}</ion-label>
    </ion-range>
  `,
                    styles: [':host { display: inherit; }'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvaW9uaWMvc2xpZGVyL3NyYy9zbGlkZXIudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBMEJqRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsU0FBdUM7OytHQUFqRSxpQkFBaUI7bUdBQWpCLGlCQUFpQixxRkFmbEI7Ozs7Ozs7Ozs7O0dBV1Q7NEZBSVUsaUJBQWlCO2tCQWpCN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7b0JBQ0QsTUFBTSxFQUFFLENBQUMsNkJBQTZCLENBQUM7b0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSwgRmllbGRUeXBlQ29uZmlnLCBGb3JtbHlGaWVsZENvbmZpZyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRQcm9wcyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2lvbmljL2Zvcm0tZmllbGQnO1xuXG5pbnRlcmZhY2UgU2xpZGVyUHJvcHMgZXh0ZW5kcyBGb3JtbHlGaWVsZFByb3BzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5U2xpZGVyRmllbGRDb25maWcgZXh0ZW5kcyBGb3JtbHlGaWVsZENvbmZpZzxTbGlkZXJQcm9wcz4ge1xuICB0eXBlOiAnc2xpZGVyJyB8IFR5cGU8Rm9ybWx5RmllbGRTbGlkZXI+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtbHktZmllbGQtaW9uLXJhbmdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW9uLXJhbmdlXG4gICAgICBbbWluXT1cInByb3BzLm1pblwiXG4gICAgICBbbWF4XT1cInByb3BzLm1heFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgICAgW2lvbkZvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxuICAgICAgW2xhYmVsXT1cInByb3BzLmxhYmVsXCJcbiAgICA+XG4gICAgICA8aW9uLWxhYmVsIHNsb3Q9XCJzdGFydFwiPnt7IHByb3BzLm1pbiB9fTwvaW9uLWxhYmVsPlxuICAgICAgPGlvbi1sYWJlbCBzbG90PVwiZW5kXCI+e3sgcHJvcHMubWF4IH19PC9pb24tbGFiZWw+XG4gICAgPC9pb24tcmFuZ2U+XG4gIGAsXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGluaGVyaXQ7IH0nXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkU2xpZGVyIGV4dGVuZHMgRmllbGRUeXBlPEZpZWxkVHlwZUNvbmZpZzxTbGlkZXJQcm9wcz4+IHt9XG4iXX0=