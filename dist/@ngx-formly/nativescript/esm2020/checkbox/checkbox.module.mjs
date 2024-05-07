import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { FormlyNsFormFieldModule } from '@ngx-formly/nativescript/form-field';
import { FormlyFieldCheckbox } from './checkbox.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyNsCheckboxFieldModule {
}
FormlyNsCheckboxFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsCheckboxFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNsCheckboxFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsCheckboxFieldModule, declarations: [FormlyFieldCheckbox], imports: [CommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        FormlyNsFormFieldModule, i1.FormlyModule] });
FormlyNsCheckboxFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsCheckboxFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            FormlyNsFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'checkbox',
                        component: FormlyFieldCheckbox,
                        wrappers: ['form-field'],
                    },
                    {
                        name: 'boolean',
                        extends: 'checkbox',
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsCheckboxFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldCheckbox],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NativeScriptFormsModule,
                        FormlyNsFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'checkbox',
                                    component: FormlyFieldCheckbox,
                                    wrappers: ['form-field'],
                                },
                                {
                                    name: 'boolean',
                                    extends: 'checkbox',
                                },
                            ],
                        }),
                    ],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL25hdGl2ZXNjcmlwdC9jaGVja2JveC9zcmMvY2hlY2tib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBMEJ0RCxNQUFNLE9BQU8sMkJBQTJCOzt5SEFBM0IsMkJBQTJCOzBIQUEzQiwyQkFBMkIsaUJBdkJ2QixtQkFBbUIsYUFFaEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFFdkIsdUJBQXVCOzBIQWlCZCwyQkFBMkIsWUF0QjdCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFFdkIsdUJBQXVCO1lBQ3ZCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsU0FBUyxFQUFFLG1CQUFtQjt3QkFDOUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixPQUFPLEVBQUUsVUFBVTtxQkFDcEI7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7NEZBR1UsMkJBQTJCO2tCQXhCdkMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBRXZCLHVCQUF1Qjt3QkFDdkIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxVQUFVO29DQUNoQixTQUFTLEVBQUUsbUJBQW1CO29DQUM5QixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUNBQ3pCO2dDQUNEO29DQUNFLElBQUksRUFBRSxTQUFTO29DQUNmLE9BQU8sRUFBRSxVQUFVO2lDQUNwQjs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBGb3JtbHlOc0Zvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L25hdGl2ZXNjcmlwdC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZvcm1seUZpZWxkQ2hlY2tib3ggfSBmcm9tICcuL2NoZWNrYm94LnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlGaWVsZENoZWNrYm94XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXG4gICAgRm9ybWx5TnNGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGRDaGVja2JveCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYm9vbGVhbicsXG4gICAgICAgICAgZXh0ZW5kczogJ2NoZWNrYm94JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5TnNDaGVja2JveEZpZWxkTW9kdWxlIHt9XG4iXX0=