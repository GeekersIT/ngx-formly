import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMatFormFieldModule } from '@ngx-formly/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormlyFieldNativeSelect } from './native-select.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyMatNativeSelectModule {
}
FormlyMatNativeSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatNativeSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyMatNativeSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatNativeSelectModule, declarations: [FormlyFieldNativeSelect], imports: [CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        FormlyMatFormFieldModule,
        FormlySelectModule, i1.FormlyModule] });
FormlyMatNativeSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatNativeSelectModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            FormlyMatFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'native-select',
                        component: FormlyFieldNativeSelect,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyMatNativeSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldNativeSelect],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        FormlyMatFormFieldModule,
                        FormlySelectModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'native-select',
                                    component: FormlyFieldNativeSelect,
                                    wrappers: ['form-field'],
                                },
                            ],
                        }),
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvbWF0ZXJpYWwvbmF0aXZlLXNlbGVjdC9zcmMvbmF0aXZlLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBc0IvRCxNQUFNLE9BQU8sMkJBQTJCOzt5SEFBM0IsMkJBQTJCOzBIQUEzQiwyQkFBMkIsaUJBbkJ2Qix1QkFBdUIsYUFFcEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixjQUFjO1FBRWQsd0JBQXdCO1FBQ3hCLGtCQUFrQjswSEFZVCwyQkFBMkIsWUFsQjdCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixjQUFjO1lBRWQsd0JBQXdCO1lBQ3hCLGtCQUFrQjtZQUNsQixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLGVBQWU7d0JBQ3JCLFNBQVMsRUFBRSx1QkFBdUI7d0JBQ2xDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekI7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7NEZBRVUsMkJBQTJCO2tCQXBCdkMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixjQUFjO3dCQUVkLHdCQUF3Qjt3QkFDeEIsa0JBQWtCO3dCQUNsQixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLGVBQWU7b0NBQ3JCLFNBQVMsRUFBRSx1QkFBdUI7b0NBQ2xDLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDekI7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlL3NlbGVjdCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5pbXBvcnQgeyBGb3JtbHlGaWVsZE5hdGl2ZVNlbGVjdCB9IGZyb20gJy4vbmF0aXZlLXNlbGVjdC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGROYXRpdmVTZWxlY3RdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG5cbiAgICBGb3JtbHlNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5U2VsZWN0TW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ25hdGl2ZS1zZWxlY3QnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGROYXRpdmVTZWxlY3QsXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZm9ybS1maWVsZCddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5TWF0TmF0aXZlU2VsZWN0TW9kdWxlIHt9XG4iXX0=