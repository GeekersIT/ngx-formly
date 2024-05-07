import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyFieldSelect } from './select.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyNzSelectModule {
}
FormlyNzSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNzSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzSelectModule, declarations: [FormlyFieldSelect], imports: [CommonModule,
        ReactiveFormsModule,
        NzSelectModule,
        FormlyNzFormFieldModule,
        FormlySelectModule, i1.FormlyModule] });
FormlyNzSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzSelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzSelectModule,
            FormlyNzFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldSelect],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzSelectModule,
                        FormlyNzFormFieldModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9uZy16b3Jyby1hbnRkL3NlbGVjdC9zcmMvc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBdUJsRCxNQUFNLE9BQU8sb0JBQW9COztrSEFBcEIsb0JBQW9CO21IQUFwQixvQkFBb0IsaUJBcEJoQixpQkFBaUIsYUFFOUIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixjQUFjO1FBRWQsdUJBQXVCO1FBQ3ZCLGtCQUFrQjttSEFhVCxvQkFBb0IsWUFuQnRCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixjQUFjO1lBRWQsdUJBQXVCO1lBQ3ZCLGtCQUFrQjtZQUNsQixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsU0FBUyxFQUFFLGlCQUFpQjt3QkFDNUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtvQkFDRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtpQkFDcEM7YUFDRixDQUFDO1NBQ0g7NEZBRVUsb0JBQW9CO2tCQXJCaEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixjQUFjO3dCQUVkLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLFFBQVE7b0NBQ2QsU0FBUyxFQUFFLGlCQUFpQjtvQ0FDNUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO2lDQUN6QjtnQ0FDRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTs2QkFDcEM7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgRm9ybWx5U2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZS9zZWxlY3QnO1xuXG5pbXBvcnQgeyBGb3JtbHlOekZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L25nLXpvcnJvLWFudGQvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBOelNlbGVjdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2VsZWN0JztcblxuaW1wb3J0IHsgRm9ybWx5RmllbGRTZWxlY3QgfSBmcm9tICcuL3NlbGVjdC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRTZWxlY3RdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTnpTZWxlY3RNb2R1bGUsXG5cbiAgICBGb3JtbHlOekZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlTZWxlY3RNb2R1bGUsXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcbiAgICAgIHR5cGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seUZpZWxkU2VsZWN0LFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBuYW1lOiAnZW51bScsIGV4dGVuZHM6ICdzZWxlY3QnIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlOelNlbGVjdE1vZHVsZSB7fVxuIl19