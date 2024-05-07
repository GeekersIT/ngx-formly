import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';
import { FormlyFieldDatetime } from './datetime.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyDatetimeModule {
}
FormlyDatetimeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyDatetimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyDatetimeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyDatetimeModule, declarations: [FormlyFieldDatetime], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule, i1.FormlyModule] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL2lvbmljL2RhdGV0aW1lL3NyYy9kYXRldGltZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBb0J0RCxNQUFNLE9BQU8sb0JBQW9COztrSEFBcEIsb0JBQW9CO21IQUFwQixvQkFBb0IsaUJBakJoQixtQkFBbUIsYUFFaEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gscUJBQXFCO21IQVlaLG9CQUFvQixZQWhCdEI7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxxQkFBcUI7WUFDckIsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxVQUFVO3dCQUNoQixTQUFTLEVBQUUsbUJBQW1CO3dCQUM5QixRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3pCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIOzRGQUVVLG9CQUFvQjtrQkFsQmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxxQkFBcUI7d0JBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxJQUFJLEVBQUUsVUFBVTtvQ0FDaEIsU0FBUyxFQUFFLG1CQUFtQjtvQ0FDOUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO2lDQUN6Qjs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEZvcm1seUZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2lvbmljL2Zvcm0tZmllbGQnO1xuXG5pbXBvcnQgeyBGb3JtbHlGaWVsZERhdGV0aW1lIH0gZnJvbSAnLi9kYXRldGltZS50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGREYXRldGltZV0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBGb3JtbHlGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZGF0ZXRpbWUnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGREYXRldGltZSxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlEYXRldGltZU1vZHVsZSB7fVxuIl19