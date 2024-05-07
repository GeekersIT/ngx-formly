import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormlyFieldRadio } from './radio.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyRadioModule {
}
FormlyRadioModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyRadioModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, declarations: [FormlyFieldRadio], imports: [CommonModule,
        ReactiveFormsModule,
        LabelModule,
        InputsModule,
        FormlyFormFieldModule,
        FormlySelectModule, i1.FormlyModule] });
FormlyRadioModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            LabelModule,
            InputsModule,
            FormlyFormFieldModule,
            FormlySelectModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'radio',
                        component: FormlyFieldRadio,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldRadio],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        LabelModule,
                        InputsModule,
                        FormlyFormFieldModule,
                        FormlySelectModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'radio',
                                    component: FormlyFieldRadio,
                                    wrappers: ['form-field'],
                                },
                            ],
                        }),
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL2tlbmRvL3JhZGlvL3NyYy9yYWRpby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUF1QmhELE1BQU0sT0FBTyxpQkFBaUI7OytHQUFqQixpQkFBaUI7Z0hBQWpCLGlCQUFpQixpQkFwQmIsZ0JBQWdCLGFBRTdCLFlBQVk7UUFDWixtQkFBbUI7UUFFbkIsV0FBVztRQUNYLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsa0JBQWtCO2dIQVlULGlCQUFpQixZQW5CbkI7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBRW5CLFdBQVc7WUFDWCxZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsU0FBUyxFQUFFLGdCQUFnQjt3QkFDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtpQkFDRjthQUNGLENBQUM7U0FDSDs0RkFFVSxpQkFBaUI7a0JBckI3QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBRW5CLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxPQUFPO29DQUNiLFNBQVMsRUFBRSxnQkFBZ0I7b0NBQzNCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDekI7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybWx5U2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZS9zZWxlY3QnO1xuaW1wb3J0IHsgRm9ybWx5Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkva2VuZG8vZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBMYWJlbE1vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWxhYmVsJztcbmltcG9ydCB7IElucHV0c01vZHVsZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWlucHV0cyc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFJhZGlvIH0gZnJvbSAnLi9yYWRpby50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRSYWRpb10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgIExhYmVsTW9kdWxlLFxuICAgIElucHV0c01vZHVsZSxcbiAgICBGb3JtbHlGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5U2VsZWN0TW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3JhZGlvJyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seUZpZWxkUmFkaW8sXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZm9ybS1maWVsZCddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5UmFkaW9Nb2R1bGUge31cbiJdfQ==