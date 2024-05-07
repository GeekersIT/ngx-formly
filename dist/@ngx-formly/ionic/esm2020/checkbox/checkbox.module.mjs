import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';
import { FormlyFieldCheckbox } from './checkbox.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyCheckboxModule {
}
FormlyCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, declarations: [FormlyFieldCheckbox], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule, i1.FormlyModule] });
FormlyCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldCheckbox],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        FormlyFormFieldModule,
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL2lvbmljL2NoZWNrYm94L3NyYy9jaGVja2JveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBd0J0RCxNQUFNLE9BQU8sb0JBQW9COztrSEFBcEIsb0JBQW9CO21IQUFwQixvQkFBb0IsaUJBckJoQixtQkFBbUIsYUFFaEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gscUJBQXFCO21IQWdCWixvQkFBb0IsWUFwQnRCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gscUJBQXFCO1lBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsU0FBUyxFQUFFLG1CQUFtQjt3QkFDOUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixPQUFPLEVBQUUsVUFBVTtxQkFDcEI7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7NEZBRVUsb0JBQW9CO2tCQXRCaEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLHFCQUFxQjt3QkFDckIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxVQUFVO29DQUNoQixTQUFTLEVBQUUsbUJBQW1CO29DQUM5QixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUNBQ3pCO2dDQUNEO29DQUNFLElBQUksRUFBRSxTQUFTO29DQUNmLE9BQU8sRUFBRSxVQUFVO2lDQUNwQjs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEZvcm1seUZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2lvbmljL2Zvcm0tZmllbGQnO1xuXG5pbXBvcnQgeyBGb3JtbHlGaWVsZENoZWNrYm94IH0gZnJvbSAnLi9jaGVja2JveC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRDaGVja2JveF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBGb3JtbHlGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGRDaGVja2JveCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYm9vbGVhbicsXG4gICAgICAgICAgZXh0ZW5kczogJ2NoZWNrYm94JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seUNoZWNrYm94TW9kdWxlIHt9XG4iXX0=