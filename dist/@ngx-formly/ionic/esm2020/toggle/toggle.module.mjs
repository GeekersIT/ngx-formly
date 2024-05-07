import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';
import { FormlyFieldToggle } from './toggle.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyToggleModule {
}
FormlyToggleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyToggleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyToggleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyToggleModule, declarations: [FormlyFieldToggle], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule, i1.FormlyModule] });
FormlyToggleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyToggleModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'toggle',
                        component: FormlyFieldToggle,
                        wrappers: ['form-field'],
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyToggleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldToggle],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        FormlyFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'toggle',
                                    component: FormlyFieldToggle,
                                    wrappers: ['form-field'],
                                },
                            ],
                        }),
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9pb25pYy90b2dnbGUvc3JjL3RvZ2dsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQW9CbEQsTUFBTSxPQUFPLGtCQUFrQjs7Z0hBQWxCLGtCQUFrQjtpSEFBbEIsa0JBQWtCLGlCQWpCZCxpQkFBaUIsYUFFOUIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gscUJBQXFCO2lIQVlaLGtCQUFrQixZQWhCcEI7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxxQkFBcUI7WUFDckIsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLFNBQVMsRUFBRSxpQkFBaUI7d0JBQzVCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekI7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7NEZBRVUsa0JBQWtCO2tCQWxCOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLHFCQUFxQjt3QkFDckIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxRQUFRO29DQUNkLFNBQVMsRUFBRSxpQkFBaUI7b0NBQzVCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztpQ0FDekI7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBGb3JtbHlGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9pb25pYy9mb3JtLWZpZWxkJztcblxuaW1wb3J0IHsgRm9ybWx5RmllbGRUb2dnbGUgfSBmcm9tICcuL3RvZ2dsZS50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRUb2dnbGVdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgRm9ybWx5Rm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3RvZ2dsZScsXG4gICAgICAgICAgY29tcG9uZW50OiBGb3JtbHlGaWVsZFRvZ2dsZSxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlUb2dnbGVNb2R1bGUge31cbiJdfQ==