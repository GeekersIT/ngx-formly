import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormlySelectModule as FormlyCoreSelectModule } from '@ngx-formly/core/select';
import { FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import { FormlyFieldSelect } from './select.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlySelectModule {
}
FormlySelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlySelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, declarations: [FormlyFieldSelect], imports: [CommonModule,
        ReactiveFormsModule,
        DropDownsModule,
        FormlyFormFieldModule,
        FormlyCoreSelectModule, i1.FormlyModule] });
FormlySelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            DropDownsModule,
            FormlyFormFieldModule,
            FormlyCoreSelectModule,
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
                        DropDownsModule,
                        FormlyFormFieldModule,
                        FormlyCoreSelectModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9rZW5kby9zZWxlY3Qvc3JjL3NlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLElBQUksc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQXVCbEQsTUFBTSxPQUFPLGtCQUFrQjs7Z0hBQWxCLGtCQUFrQjtpSEFBbEIsa0JBQWtCLGlCQXBCZCxpQkFBaUIsYUFFOUIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixlQUFlO1FBRWYscUJBQXFCO1FBQ3JCLHNCQUFzQjtpSEFhYixrQkFBa0IsWUFuQnBCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixlQUFlO1lBRWYscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsU0FBUyxFQUFFLGlCQUFpQjt3QkFDNUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtvQkFDRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtpQkFDcEM7YUFDRixDQUFDO1NBQ0g7NEZBRVUsa0JBQWtCO2tCQXJCOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixlQUFlO3dCQUVmLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLFFBQVE7b0NBQ2QsU0FBUyxFQUFFLGlCQUFpQjtvQ0FDNUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO2lDQUN6QjtnQ0FDRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTs2QkFDcEM7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgRHJvcERvd25zTW9kdWxlIH0gZnJvbSAnQHByb2dyZXNzL2tlbmRvLWFuZ3VsYXItZHJvcGRvd25zJztcbmltcG9ydCB7IEZvcm1seVNlbGVjdE1vZHVsZSBhcyBGb3JtbHlDb3JlU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZS9zZWxlY3QnO1xuXG5pbXBvcnQgeyBGb3JtbHlGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9rZW5kby9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZvcm1seUZpZWxkU2VsZWN0IH0gZnJvbSAnLi9zZWxlY3QudHlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1seUZpZWxkU2VsZWN0XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIERyb3BEb3duc01vZHVsZSxcblxuICAgIEZvcm1seUZvcm1GaWVsZE1vZHVsZSxcbiAgICBGb3JtbHlDb3JlU2VsZWN0TW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlGaWVsZFNlbGVjdCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHsgbmFtZTogJ2VudW0nLCBleHRlbmRzOiAnc2VsZWN0JyB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5U2VsZWN0TW9kdWxlIHt9XG4iXX0=