import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { FormlyNsFormFieldModule } from '@ngx-formly/nativescript/form-field';
import { FormlyFieldInput } from './text-field.type';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class FormlyNsTextFieldModule {
}
FormlyNsTextFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormlyNsTextFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextFieldModule, declarations: [FormlyFieldInput], imports: [CommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        FormlyNsFormFieldModule, i1.FormlyModule] });
FormlyNsTextFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextFieldModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            NativeScriptFormsModule,
            FormlyNsFormFieldModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'text-field',
                        component: FormlyFieldInput,
                        wrappers: ['form-field'],
                    },
                    { name: 'input', extends: 'text-field' },
                    { name: 'string', extends: 'input' },
                    {
                        name: 'number',
                        extends: 'input',
                        defaultOptions: {
                            props: {
                                type: 'number',
                            },
                        },
                    },
                    {
                        name: 'integer',
                        extends: 'input',
                        defaultOptions: {
                            props: {
                                type: 'number',
                            },
                        },
                    },
                ],
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: FormlyNsTextFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldInput],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NativeScriptFormsModule,
                        FormlyNsFormFieldModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'text-field',
                                    component: FormlyFieldInput,
                                    wrappers: ['form-field'],
                                },
                                { name: 'input', extends: 'text-field' },
                                { name: 'string', extends: 'input' },
                                {
                                    name: 'number',
                                    extends: 'input',
                                    defaultOptions: {
                                        props: {
                                            type: 'number',
                                        },
                                    },
                                },
                                {
                                    name: 'integer',
                                    extends: 'input',
                                    defaultOptions: {
                                        props: {
                                            type: 'number',
                                        },
                                    },
                                },
                            ],
                        }),
                    ],
                    schemas: [NO_ERRORS_SCHEMA],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdWkvbmF0aXZlc2NyaXB0L3RleHQtZmllbGQvc3JjL3RleHQtZmllbGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBMENyRCxNQUFNLE9BQU8sdUJBQXVCOztxSEFBdkIsdUJBQXVCO3NIQUF2Qix1QkFBdUIsaUJBdkNuQixnQkFBZ0IsYUFFN0IsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFFdkIsdUJBQXVCO3NIQWlDZCx1QkFBdUIsWUF0Q3pCO1lBQ1AsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFFdkIsdUJBQXVCO1lBQ3ZCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsU0FBUyxFQUFFLGdCQUFnQjt3QkFDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN6QjtvQkFDRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRTtvQkFDeEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7b0JBQ3BDO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixjQUFjLEVBQUU7NEJBQ2QsS0FBSyxFQUFFO2dDQUNMLElBQUksRUFBRSxRQUFROzZCQUNmO3lCQUNGO3FCQUNGO29CQUNEO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixjQUFjLEVBQUU7NEJBQ2QsS0FBSyxFQUFFO2dDQUNMLElBQUksRUFBRSxRQUFROzZCQUNmO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQztTQUNIOzRGQUdVLHVCQUF1QjtrQkF4Q25DLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUV2Qix1QkFBdUI7d0JBQ3ZCLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxJQUFJLEVBQUUsWUFBWTtvQ0FDbEIsU0FBUyxFQUFFLGdCQUFnQjtvQ0FDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO2lDQUN6QjtnQ0FDRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRTtnQ0FDeEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7Z0NBQ3BDO29DQUNFLElBQUksRUFBRSxRQUFRO29DQUNkLE9BQU8sRUFBRSxPQUFPO29DQUNoQixjQUFjLEVBQUU7d0NBQ2QsS0FBSyxFQUFFOzRDQUNMLElBQUksRUFBRSxRQUFRO3lDQUNmO3FDQUNGO2lDQUNGO2dDQUNEO29DQUNFLElBQUksRUFBRSxTQUFTO29DQUNmLE9BQU8sRUFBRSxPQUFPO29DQUNoQixjQUFjLEVBQUU7d0NBQ2QsS0FBSyxFQUFFOzRDQUNMLElBQUksRUFBRSxRQUFRO3lDQUNmO3FDQUNGO2lDQUNGOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvYW5ndWxhcic7XG5cbmltcG9ydCB7IEZvcm1seU5zRm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvbmF0aXZlc2NyaXB0L2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRJbnB1dCB9IGZyb20gJy4vdGV4dC1maWVsZC50eXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRJbnB1dF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcblxuICAgIEZvcm1seU5zRm9ybUZpZWxkTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3RleHQtZmllbGQnLFxuICAgICAgICAgIGNvbXBvbmVudDogRm9ybWx5RmllbGRJbnB1dCxcbiAgICAgICAgICB3cmFwcGVyczogWydmb3JtLWZpZWxkJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHsgbmFtZTogJ2lucHV0JywgZXh0ZW5kczogJ3RleHQtZmllbGQnIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0cmluZycsIGV4dGVuZHM6ICdpbnB1dCcgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdudW1iZXInLFxuICAgICAgICAgIGV4dGVuZHM6ICdpbnB1dCcsXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ludGVnZXInLFxuICAgICAgICAgIGV4dGVuZHM6ICdpbnB1dCcsXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlOc1RleHRGaWVsZE1vZHVsZSB7fVxuIl19