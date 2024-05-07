import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormlyFormFieldModule } from '@ngx-formly/ionic/form-field';
import { FormlyFieldSlider } from './slider.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlySliderModule {
}
FormlySliderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlySliderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySliderModule, declarations: [FormlyFieldSlider], imports: [CommonModule,
        ReactiveFormsModule,
        IonicModule,
        FormlyFormFieldModule, i1.FormlyModule] });
FormlySliderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySliderModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            FormlyFormFieldModule,
            FormlyModule.forChild({
                types: [
                    { name: 'slider', component: FormlyFieldSlider, wrappers: ['form-field'] },
                    { name: 'range', extends: 'slider' },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlySliderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldSlider],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        IonicModule,
                        FormlyFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                { name: 'slider', component: FormlyFieldSlider, wrappers: ['form-field'] },
                                { name: 'range', extends: 'slider' },
                            ],
                        }),
                    ],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9pb25pYy9zbGlkZXIvc3JjL3NsaWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWtCbEQsTUFBTSxPQUFPLGtCQUFrQjs7Z0hBQWxCLGtCQUFrQjtpSEFBbEIsa0JBQWtCLGlCQWZkLGlCQUFpQixhQUU5QixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxxQkFBcUI7aUhBVVosa0JBQWtCLFlBZHBCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gscUJBQXFCO1lBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUMxRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtpQkFDckM7YUFDRixDQUFDO1NBQ0g7NEZBR1Usa0JBQWtCO2tCQWhCOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLHFCQUFxQjt3QkFDckIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0NBQzFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFOzZCQUNyQzt5QkFDRixDQUFDO3FCQUNIO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5PX0VSUk9SU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBGb3JtbHlGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9pb25pYy9mb3JtLWZpZWxkJztcblxuaW1wb3J0IHsgRm9ybWx5RmllbGRTbGlkZXIgfSBmcm9tICcuL3NsaWRlci50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRTbGlkZXJdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgRm9ybWx5Rm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7IG5hbWU6ICdzbGlkZXInLCBjb21wb25lbnQ6IEZvcm1seUZpZWxkU2xpZGVyLCB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10gfSxcbiAgICAgICAgeyBuYW1lOiAncmFuZ2UnLCBleHRlbmRzOiAnc2xpZGVyJyB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlTbGlkZXJNb2R1bGUge31cbiJdfQ==