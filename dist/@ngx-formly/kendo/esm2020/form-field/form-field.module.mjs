import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyWrapperFormField } from './form-field.wrapper';
import { FormFieldModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyFormFieldModule {
}
FormlyFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, declarations: [FormlyWrapperFormField], imports: [CommonModule,
        ReactiveFormsModule,
        FormFieldModule,
        LabelModule, i1.FormlyModule] });
FormlyFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            FormFieldModule,
            LabelModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperFormField],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormFieldModule,
                        LabelModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkva2VuZG8vZm9ybS1maWVsZC9zcmMvZm9ybS1maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQW9CNUQsTUFBTSxPQUFPLHFCQUFxQjs7bUhBQXJCLHFCQUFxQjtvSEFBckIscUJBQXFCLGlCQWpCakIsc0JBQXNCLGFBRW5DLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLFdBQVc7b0hBWUYscUJBQXFCLFlBaEJ2QjtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLFdBQVc7WUFFWCxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFNBQVMsRUFBRSxzQkFBc0I7cUJBQ2xDO2lCQUNGO2FBQ0YsQ0FBQztTQUNIOzRGQUVVLHFCQUFxQjtrQkFsQmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixXQUFXO3dCQUVYLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLFFBQVEsRUFBRTtnQ0FDUjtvQ0FDRSxJQUFJLEVBQUUsWUFBWTtvQ0FDbEIsU0FBUyxFQUFFLHNCQUFzQjtpQ0FDbEM7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybWx5V3JhcHBlckZvcm1GaWVsZCB9IGZyb20gJy4vZm9ybS1maWVsZC53cmFwcGVyJztcbmltcG9ydCB7IEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWlucHV0cyc7XG5pbXBvcnQgeyBMYWJlbE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxhYmVsJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5V3JhcHBlckZvcm1GaWVsZF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3JtRmllbGRNb2R1bGUsXG4gICAgTGFiZWxNb2R1bGUsXG5cbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgd3JhcHBlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmb3JtLWZpZWxkJyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seVdyYXBwZXJGb3JtRmllbGQsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGb3JtRmllbGRNb2R1bGUge31cbiJdfQ==