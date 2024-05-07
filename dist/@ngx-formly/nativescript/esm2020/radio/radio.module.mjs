import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { FormlyNsFormFieldModule } from '@ngx-formly/nativescript/form-field';
import { FormlyFieldRadio } from './radio.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyNsRadioFieldModule {
}
FormlyNsRadioFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsRadioFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNsRadioFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsRadioFieldModule, declarations: [FormlyFieldRadio], imports: [CommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        FormlyNsFormFieldModule,
        FormlySelectModule, i1.FormlyModule] });
FormlyNsRadioFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsRadioFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            FormlyNsFormFieldModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsRadioFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldRadio],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NativeScriptFormsModule,
                        FormlyNsFormFieldModule,
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
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL25hdGl2ZXNjcmlwdC9yYWRpby9zcmMvcmFkaW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQXVCaEQsTUFBTSxPQUFPLHdCQUF3Qjs7c0hBQXhCLHdCQUF3Qjt1SEFBeEIsd0JBQXdCLGlCQXBCcEIsZ0JBQWdCLGFBRTdCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBRXZCLHVCQUF1QjtRQUN2QixrQkFBa0I7dUhBYVQsd0JBQXdCLFlBbkIxQjtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBRXZCLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLFNBQVMsRUFBRSxnQkFBZ0I7d0JBQzNCLFFBQVEsRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekI7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7NEZBR1Usd0JBQXdCO2tCQXJCcEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDaEMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBRXZCLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLE9BQU87b0NBQ2IsU0FBUyxFQUFFLGdCQUFnQjtvQ0FDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO2lDQUN6Qjs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBGb3JtbHlTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlL3NlbGVjdCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBGb3JtbHlOc0Zvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L25hdGl2ZXNjcmlwdC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZvcm1seUZpZWxkUmFkaW8gfSBmcm9tICcuL3JhZGlvLnR5cGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGb3JtbHlGaWVsZFJhZGlvXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXG4gICAgRm9ybWx5TnNGb3JtRmllbGRNb2R1bGUsXG4gICAgRm9ybWx5U2VsZWN0TW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3JhZGlvJyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seUZpZWxkUmFkaW8sXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZm9ybS1maWVsZCddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlOc1JhZGlvRmllbGRNb2R1bGUge31cbiJdfQ==