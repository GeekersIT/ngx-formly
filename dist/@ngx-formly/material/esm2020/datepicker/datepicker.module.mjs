import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormlyFieldDatepicker } from './datepicker.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyMatDatepickerModule {
}
FormlyMatDatepickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatDatepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatDatepickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatDatepickerModule, declarations: [FormlyFieldDatepicker], imports: [CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        FormlyMatFormFieldModule, i1.FormlyModule] });
FormlyMatDatepickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatDatepickerModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            MatDatepickerModule,
            FormlyMatFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'datepicker',
                        component: FormlyFieldDatepicker,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatDatepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldDatepicker],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatDatepickerModule,
                        FormlyMatFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'datepicker',
                                    component: FormlyFieldDatepicker,
                                    wrappers: ['form-field'],
                                },
                            ],
                        }),
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvbWF0ZXJpYWwvZGF0ZXBpY2tlci9zcmMvZGF0ZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBc0IxRCxNQUFNLE9BQU8seUJBQXlCOzt1SEFBekIseUJBQXlCO3dIQUF6Qix5QkFBeUIsaUJBbkJyQixxQkFBcUIsYUFFbEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsbUJBQW1CO1FBRW5CLHdCQUF3Qjt3SEFZZix5QkFBeUIsWUFsQjNCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2QsbUJBQW1CO1lBRW5CLHdCQUF3QjtZQUN4QixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFNBQVMsRUFBRSxxQkFBcUI7d0JBQ2hDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekI7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7NEZBRVUseUJBQXlCO2tCQXBCckMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDckMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFFbkIsd0JBQXdCO3dCQUN4QixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLFlBQVk7b0NBQ2xCLFNBQVMsRUFBRSxxQkFBcUI7b0NBQ2hDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDekI7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuXG5pbXBvcnQgeyBGb3JtbHlGaWVsZERhdGVwaWNrZXIgfSBmcm9tICcuL2RhdGVwaWNrZXIudHlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1seUZpZWxkRGF0ZXBpY2tlcl0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuXG4gICAgRm9ybWx5TWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2RhdGVwaWNrZXInLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGREYXRlcGlja2VyLFxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2Zvcm0tZmllbGQnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU1hdERhdGVwaWNrZXJNb2R1bGUge31cbiJdfQ==