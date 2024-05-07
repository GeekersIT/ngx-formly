import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormlyFieldCheckbox } from './checkbox.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyCheckboxModule {
}
FormlyCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, declarations: [FormlyFieldCheckbox], imports: [CommonModule,
        ReactiveFormsModule,
        InputsModule,
        LabelModule,
        FormlyFormFieldModule, i1.FormlyModule] });
FormlyCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyCheckboxModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            InputsModule,
            LabelModule,
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
                        InputsModule,
                        LabelModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL2tlbmRvL2NoZWNrYm94L3NyYy9jaGVja2JveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQXlCdEQsTUFBTSxPQUFPLG9CQUFvQjs7a0hBQXBCLG9CQUFvQjttSEFBcEIsb0JBQW9CLGlCQXRCaEIsbUJBQW1CLGFBRWhDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxxQkFBcUI7bUhBZ0JaLG9CQUFvQixZQXJCdEI7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixXQUFXO1lBQ1gscUJBQXFCO1lBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsU0FBUyxFQUFFLG1CQUFtQjt3QkFDOUIsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsU0FBUzt3QkFDZixPQUFPLEVBQUUsVUFBVTtxQkFDcEI7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7NEZBRVUsb0JBQW9CO2tCQXZCaEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gscUJBQXFCO3dCQUNyQixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLFVBQVU7b0NBQ2hCLFNBQVMsRUFBRSxtQkFBbUI7b0NBQzlCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDekI7Z0NBQ0Q7b0NBQ0UsSUFBSSxFQUFFLFNBQVM7b0NBQ2YsT0FBTyxFQUFFLFVBQVU7aUNBQ3BCOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1seUZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2tlbmRvL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTGFiZWxNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1sYWJlbCc7XG5pbXBvcnQgeyBJbnB1dHNNb2R1bGUgfSBmcm9tICdAcHJvZ3Jlc3Mva2VuZG8tYW5ndWxhci1pbnB1dHMnO1xuXG5pbXBvcnQgeyBGb3JtbHlGaWVsZENoZWNrYm94IH0gZnJvbSAnLi9jaGVja2JveC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRDaGVja2JveF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJbnB1dHNNb2R1bGUsXG4gICAgTGFiZWxNb2R1bGUsXG4gICAgRm9ybWx5Rm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seUZpZWxkQ2hlY2tib3gsXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZm9ybS1maWVsZCddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGV4dGVuZHM6ICdjaGVja2JveCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlDaGVja2JveE1vZHVsZSB7fVxuIl19