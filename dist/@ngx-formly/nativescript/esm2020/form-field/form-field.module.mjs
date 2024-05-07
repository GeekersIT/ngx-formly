import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { FormlyWrapperFormField } from './form-field.wrapper';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyNsFormFieldModule {
}
FormlyNsFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNsFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsFormFieldModule, declarations: [FormlyWrapperFormField], imports: [CommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule, i1.FormlyModule] });
FormlyNsFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsFormFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'form-field',
                        component: FormlyWrapperFormField,
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyWrapperFormField],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NativeScriptFormsModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'form-field',
                                    component: FormlyWrapperFormField,
                                },
                            ],
                        }),
                    ],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvbmF0aXZlc2NyaXB0L2Zvcm0tZmllbGQvc3JjL2Zvcm0tZmllbGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBbUI5RCxNQUFNLE9BQU8sdUJBQXVCOztxSEFBdkIsdUJBQXVCO3NIQUF2Qix1QkFBdUIsaUJBaEJuQixzQkFBc0IsYUFFbkMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1QkFBdUI7c0hBWWQsdUJBQXVCLFlBZnpCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxZQUFZO3dCQUNsQixTQUFTLEVBQUUsc0JBQXNCO3FCQUNsQztpQkFDRjthQUNGLENBQUM7U0FDSDs0RkFHVSx1QkFBdUI7a0JBakJuQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUN0QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsUUFBUSxFQUFFO2dDQUNSO29DQUNFLElBQUksRUFBRSxZQUFZO29DQUNsQixTQUFTLEVBQUUsc0JBQXNCO2lDQUNsQzs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO29CQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2FuZ3VsYXInO1xuaW1wb3J0IHsgRm9ybWx5V3JhcHBlckZvcm1GaWVsZCB9IGZyb20gJy4vZm9ybS1maWVsZC53cmFwcGVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5V3JhcHBlckZvcm1GaWVsZF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xuICAgICAgd3JhcHBlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmb3JtLWZpZWxkJyxcbiAgICAgICAgICBjb21wb25lbnQ6IEZvcm1seVdyYXBwZXJGb3JtRmllbGQsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU5zRm9ybUZpZWxkTW9kdWxlIHt9XG4iXX0=