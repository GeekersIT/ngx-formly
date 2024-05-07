import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormlyWrapperFormField } from './form-field.wrapper';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyNzFormFieldModule {
}
FormlyNzFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNzFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzFormFieldModule, declarations: [FormlyWrapperFormField], imports: [CommonModule,
        ReactiveFormsModule,
        NzFormModule, i1.FormlyModule] });
FormlyNzFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzFormFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NzFormModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNzFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperFormField],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzFormModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'form-field',
                                    component: FormlyWrapperFormField,
                                },
                            ],
                        }),
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvbmctem9ycm8tYW50ZC9mb3JtLWZpZWxkL3NyYy9mb3JtLWZpZWxkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFrQjlELE1BQU0sT0FBTyx1QkFBdUI7O3FIQUF2Qix1QkFBdUI7c0hBQXZCLHVCQUF1QixpQkFmbkIsc0JBQXNCLGFBRW5DLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtzSEFXSCx1QkFBdUIsWUFkekI7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFNBQVMsRUFBRSxzQkFBc0I7cUJBQ2xDO2lCQUNGO2FBQ0YsQ0FBQztTQUNIOzRGQUVVLHVCQUF1QjtrQkFoQm5DLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixRQUFRLEVBQUU7Z0NBQ1I7b0NBQ0UsSUFBSSxFQUFFLFlBQVk7b0NBQ2xCLFNBQVMsRUFBRSxzQkFBc0I7aUNBQ2xDOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56Rm9ybU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZm9ybSc7XG5pbXBvcnQgeyBGb3JtbHlXcmFwcGVyRm9ybUZpZWxkIH0gZnJvbSAnLi9mb3JtLWZpZWxkLndyYXBwZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlXcmFwcGVyRm9ybUZpZWxkXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE56Rm9ybU1vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgd3JhcHBlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmb3JtLWZpZWxkJyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seVdyYXBwZXJGb3JtRmllbGQsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlOekZvcm1GaWVsZE1vZHVsZSB7fVxuIl19